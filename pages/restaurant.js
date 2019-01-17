import React, { Component } from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import _ from 'lodash'
import base from '../config'
import firestore from 'firebase/firestore'
import moment from 'moment'
import Fuse from 'fuse.js'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Profile from '../components/Profile'
import ProfileCard from '../components/ProfileCard'
import Swiper from '../components/Swiper'
import Filter from '../components/Filter'
import ItemsList from '../components/ItemsList'
import Menu from '../components/Menu'
import MenuPicker from '../components/MenuPicker'

const RestaurantWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #fff;
`;

const ActionButton = styled.a`
  position: fixed;
  top: 16px;
  right: 16px;
  height: 40px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  background: #FFFFFF;
  box-shadow: 0 2px 16px -2px rgba(0,0,0,0.32);
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  color: #0f0f0f;
  z-index: 7;
`;

const Scroller = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 200px);
  margin-top: 200px;
  background: transparent;
  padding: 40px 0 20px;
  box-sizing: border-box;

  & .sticky-events--sentinel {
      left: 0;
      position: absolute;
      right: 0;
      visibility: hidden;
  }

  & .sticky-events--sentinel-top {
      position: relative;
  }
`;

const SwiperContainer = posed.div({
  enter: {
    y: '0vh',
  },
  exit: {
    y: '100vh',
  },
  init: {
    y: '100vh',
  }
})

const StyledSwiperContainer = styled(SwiperContainer)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  transform: translateY(100vh);
  top: 0;
  z-index: 8888;
`;

const ErrorWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const ErrorContent = styled.div`
  padding: 16px;
  background: #f7f7f7;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  color: #0f0f0f;
`;

const Test = posed.div({
  enter: {
    opacity: 1,
    y: 0,
  },
  preEnter: {
    opacity: 0,
    y: -56,
  },
  exit: {
    opacity: 0,
    y: -56,
  }
})

const PosedOverlay = posed.div({
  enter: {
    opacity: 1,
  },
  preEnter: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  }
})

const Overlay = styled(PosedOverlay)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(31,31,31,0.48);
  display: flex;
  z-index: 88;
`;

const PosedSearchContainer = posed.div({
    enter: {
      opacity: 1,
      height: 60,
    },
    preEnter: {
      opacity: 0,
      height: 0,
    },
    exit: {
      opacity: 0,
      height: 0,
    }
})

const SearchContainer = styled(PosedSearchContainer)`
  width: 100%;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  font-size: 1rem;
  font-weight: 500;
  color: #1f1f1f;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border: 0;
  box-shadow: 0;
  outline: none;
  border-bottom: 1px solid #9f9f9f;
  background: transparent;
  transition: 0.3s ease-out all;

  &::placeholder {
    font-size: 1rem;
    font-weight: 500;
    color: #9f9f9f;
  }

  &:focus {
    outline: none;
    box-shadow: 0;
    border-bottom: 1px solid #1f1f1f;
  }
`;

const PosedLoading = posed.div({
  enter: {
    opacity: 1,
    y: 0,
  },
  preEnter: {
    opacity: 0,
    y: -56,
  },
  exit: {
    opacity: 0,
    y: -56,
  }
})

const Loading = styled(PosedLoading)`
  width: 100vw;
  height: calc(100vh - 200px);
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  jusitify-content: center;
  opacity: 1;
`;

const Section = styled(Element)`
  width: 100%;
  padding-top: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: #1f1f1f;
  margin: 0;
  width: 100%;
  padding-left: 20px;
  box-sizing: border-box;
`;

class Restaurant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
      activeSection: '',
      items: [],
      filteredItems: [],
      groupedItems: {},
      isSearching: false,
      sectionItems: [],
      isFiltering: false,
      isLoading: true,
      isChangingFilter: false,
      overlayVisible: false,
      term: '',
      currentItems: [],
      filters: {
        section: '',
        sortBy: '',
        priceMin: '',
        priceMax: '',
        tags: [],
      },
      menu: {},
    };
  }

  static async getInitialProps({ query }) {
    const { username } = query
    let restaurants = await base.get('restaurants', {
      context: this,
      query: (ref) => ref.where('username', '==', username),
      withIds: true,
    }).then(data => {
      return data
    }).catch(err => {
      console.log(err);
    })
    let restaurant = {

    }
    if (restaurants) {
      restaurant = restaurants[0] || {}
    }
    return { restaurant,  query }
  }

  componentDidMount() {
    if (Object.keys(this.props.restaurant).length > 0) {
      console.log(this.props.restaurant);
      this.fetchItems()
      let date = moment().format('YYYYMMDD')
      if (this.props.restaurant.menus.length == 1) {
        this.setState({
          menu: this.props.restaurant.menus[0]
        })
      }
      // let views = this.props.restaurant.views
      // if (_.has(views, date)) {
      //   // Has views, increment view by 1
      //   _.set(views, date, views[date] + 1)
      // } else {
      //   // Doesn't have views for this date, add a view
      //   _.set(views, date, 1)
      // }
      // const data = {
      //   views
      // }
      // console.log(data);
      // base.updateDoc('restaurants/' + this.props.restaurant.id, data)
      //   .then(() => {
      //   }).catch(err => {
      //   console.log(err);
      // });
    }
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  fetchItems() {
    let restaurantId = this.props.restaurant.id
    base.get('items', {
      context: this,
      withIds: true,
      withRefs: true,
      query: (ref) => ref.where('restaurantId', '==', restaurantId),
    }).then(data => {
      this.processItems(data)
    }).catch(err => {
      console.log(err);
    })
  }

  processItems(items) {
    let sections = []
    _.each(items, function(item) {
      let section = item.section
      sections.push(section)
    })
    if (sections.length === items.length) {
      const uniqueSections = _.uniq(sections)
      const groupedItems = _.groupBy(items, 'section')
      this.setState({
        groupedItems,
        items,
        isLoading: false,
      })
    }
  }

  handleItemView(id, result) {
    let item = _.find(this.state.items, { id: id })
    if (result) {
      console.log(result);
      this.setState({
        activeItem: id,
        results: result,
        overlayVisible: true, })
    } else {
      this.setState({
        activeItem: id,
        activeSection: item.section,
        overlayVisible: true,
      })
    }
    let date = moment().format('YYYYMMDD')
    let views = item.views
    console.log(views);
    if (views) {
      console.log('Views exist');
      if (_.has(views, date)) {
        // Has views, increment view by 1
        _.set(views, date, views[date] + 1)
      } else {
        // Doesn't have views for this date, add a view
        _.set(views, date, 1)
      }
    } else {
      views = {
        [date]: 0
      }
    }
    console.log(views);
    const data = {
      views
    }
    console.log(data);
    base.updateDoc('items/' + id, data)
      .then(() => {
        console.log('updated')
      }).catch(err => {
        console.log(err);
    });
  }

  handleSort(sortBy) {
    const {groupedItems} = this.state
    let sortedGroupedItems = []
    console.log(_.sortBy(groupedItems, ['name']))
    _.forEach(groupedItems, function(value) {
      console.log(value)
      console.log(sortBy);
      switch (sortBy) {
        case 'nameAsc':
          let groupedItem = _.sortBy(value, ['name'])
          console.log(groupedItem);
          sortedGroupedItems.push(groupedItem)
          break;
        default:
          return
      }
    })
    console.log(_.groupBy(sortedGroupedItems, 'section'));
  }

  render() {

    if (Object.keys(this.props.restaurant).length === 0) {
      return (
        <ErrorWrapper>
          <ErrorContent>
          Whoops! There doesn't seem to be a restaurant with that username. This is likely a problem with the implementation of Sommelier on your site. Get in touch with us at <a href="mailto:support@getsommelier.com">support@getsommelier.com</a>.
          </ErrorContent>
        </ErrorWrapper>
      )
    }

    let { isFiltering, isChangingFilter } = this.state

    var options = {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 80,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name",
        "type",
        "family",
    ]
    };

    var fuse = new Fuse(this.state.items, options); // "list" is the item array

    var results = fuse.search(this.state.term);

    return (
      <RestaurantWrapper>
        <Head>
          <title>What to eat at {this.props.restaurant.name} - {this.props.restaurant.address.street}, {this.props.restaurant.address.city}</title>
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <PoseGroup preEnterPose="preEnter">
          {this.state.overlayVisible &&
            <Overlay key="1"/>
          }
        </PoseGroup>
        <Profile
          image={this.props.restaurant.image}
        />
        <ProfileCard
          restaurant={this.props.restaurant}
          sections={this.state.menu.sections}
          activeSection={this.state.activeSection}
          handleSetActive={(section) => this.setState({ activeSection: section })}
          handleSectionSelect={(section) => this.setState({ activeSection: section, sectionItems: this.state.groupedItems[section] })}
          toggleSearch={() => this.setState({
            isSearching: !this.state.isSearching,
            isFiltering: false,
          })}
          toggleFilter={() => this.setState({
            isFiltering: !this.state.isFiltering,
            isSearching: false,
          })}/>
        <Scroller>
          <PoseGroup preEnterPose="preEnter">
            {this.state.isSearching &&
              <SearchContainer key='0'>
                <SearchInput
                  type="search"
                  placeholder={`Search ${this.state.items.length} items`}
                  autoFocus
                  value={this.state.term}
                  onChange={(e) => this.setState({ term: e.target.value})}/>
              </SearchContainer>
            }
          </PoseGroup>
          <PoseGroup preEnterPose="preEnter">
            {this.state.isFiltering &&
              <SearchContainer key="1">
                <Filter handleSort={(sortBy) => this.handleSort(sortBy)}/>
              </SearchContainer>
            }
          </PoseGroup>
          <PoseGroup>
            {this.state.isLoading && this.state.groupedItems
              ?
                <Loading key="0">
                  <span style={{ margin: 'auto'}}> Loading </span>
                </Loading>
              :
                <Test key="1">
                  {this.state.isSearching && this.state.term !== ''
                    ?
                    <ItemsList items={results} onItemClick={(id) => this.handleItemView(id)}/>
                    :
                    <PoseGroup preEnterPose="preEnter">
                      <Test key="2">
                        {Object.keys(this.state.menu).length == 0
                          ?
                          <MenuPicker menus={this.props.restaurant.menus} handleMenuSelect={(menu) => this.setState({ menu })}/>
                          :
                          <Menu sections={this.state.menu.sections} items={this.state.items} onItemClick={(id) => this.handleItemView(id)}/>
                        }
                      </Test>
                    </PoseGroup>
                  }
                </Test>
            }
          </PoseGroup>
        </Scroller>
        <div style={{position: 'fixed', top: '0', zIndex: '888'}}>
          <PoseGroup>
            {this.state.activeItem !== "" &&
              <StyledSwiperContainer key="0">
                <Swiper
                  item={this.state.activeItem}
                  restaurant={this.props.restaurant}
                  items={this.state.groupedItems[this.state.activeSection]}
                  itemIndex={_.findIndex(this.state.groupedItems[this.state.activeSection], { id: this.state.activeItem })}
                  title={this.state.activeSection}
                  isVisible={this.state.activeItem !== ""}
                  handleCollapse={() => this.setState({ activeItem: "", overlayVisible: false })}/>
              </StyledSwiperContainer>
            }
          </PoseGroup>
        </div>
      </RestaurantWrapper>
    );
  }
}

export default Restaurant;
