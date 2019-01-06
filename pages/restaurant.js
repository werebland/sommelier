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
import DishCard from '../components/DishCard'
import Swiper from '../components/Swiper'
import Filter from '../components/Filter'
import DishesList from '../components/DishesList'

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
  min-height: 100vh;
  margin-top: 200px;
  background: transparent;
  padding-top: 40px;

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

const DishCards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
  box-sizing: border-box;
`;

const DishCardsFilters = styled.ul`
  width: 100%;
  max-width: 100vw;
  overflow: scroll;
  padding: 0 16px 0 16px;
  box-sizing: border-box;
  margin: 0 0 16px 0;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  z-index: 4;
`;

const DishCardsFilter = styled.li`
  list-style: none;
  margin-right: 8px;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${props => props.active ? '#0f0f0f' : '#9f9f9f'};
  cursor: pointer;
  white-space: pre;
`;

const DishCardContainer = posed.div({

})

const PosedDishCard = posed.article({
  pressable: true,
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  init: {
    scale: 1,
    boxShadow: '0px 2px 16px -2px rgba(0,0,0,0.32)',
  },
  press: {
    scale: 0.99,
    boxShadow: '0px 2px 8px -2px rgba(0,0,0,0.32)',
  },
})

const StyledPosedDishCard = styled(PosedDishCard)`
  margin-bottom: 16px;
  scale: 1;
  transform-origin: center !important;
  border-radius: 8px;
  background: transparent;
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
      activeDish: "",
      activeSection: '',
      sections: [],
      dishes: [],
      filteredDishes: [],
      groupedDishes: {},
      isSearching: false,
      sectionDishes: [],
      isFiltering: false,
      isLoading: true,
      isChangingFilter: false,
      overlayVisible: false,
      term: '',
      currentDishes: [],
      filters: {
        section: '',
        sortBy: '',
        priceMin: '',
        priceMax: '',
        tags: [],
      }
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
      this.fetchDishes()
      let date = moment().format('YYYYMMDD')
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
  }

  fetchDishes() {
    let restaurantId = this.props.restaurant.id
    base.get('items', {
      context: this,
      withIds: true,
      withRefs: true,
      query: (ref) => ref.where('restaurantId', '==', restaurantId),
    }).then(data => {
      this.processDishes(data)
    }).catch(err => {
      console.log(err);
    })
  }

  processDishes(dishes) {
    let sections = []
    _.each(dishes, function(dish) {
      let section = dish.section
      sections.push(section)
    })
    if (sections.length === dishes.length) {
      const uniqueSections = _.uniq(sections)
      const groupedDishes = _.groupBy(dishes, 'section')
      this.setState({
        sections: uniqueSections,
        groupedDishes: groupedDishes,
        dishes: dishes,
        sectionDishes: dishes,
        isLoading: false,
      })
    }
  }

  handleDishView(id, result) {
    if (result) {
      console.log(result);
      this.setState({
        activeDish: id,
        results: result,
        overlayVisible: true, })
    } else {
      this.setState({
        activeDish: id,
        overlayVisible: true,
      })
    }
    let dish = _.find(this.state.dishes, { id: id })
    let date = moment().format('YYYYMMDD')
    let views = dish.views
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

  handleSort(selectedSort) {
    const dishes = this.state.dishes
    const section = this.state.activeSection
    console.log(section);
    let sortedDishes = []
    console.log(selectedSort);
    switch (selectedSort) {
      case "priceAsc":
        sortedDishes = _.sortBy(dishes, ['price'])
        console.log(sortedDishes);
        break;
      case "priceDsc":
        sortedDishes = _.sortBy(dishes, ['price'])
        sortedDishes = _.reverse(sortedDishes)
        console.log(sortedDishes);
        break;
      case "nameAsc":
        sortedDishes = _.sortBy(dishes, ['name'])
        console.log(sortedDishes);
        break;
      case "nameDsc":
        sortedDishes = _.sortBy(dishes, ['name'])
        sortedDishes = _.reverse(sortedDishes)
        console.log(sortedDishes);
        break;
      default:
    }
    if (sortedDishes.length > 0 && section !== '') {
      const groupedDishes = _.groupBy(sortedDishes, 'section')
      console.log(groupedDishes);
      this.setState({
        groupedDishes,
        sectionDishes: groupedDishes[section],
      })
    } else if (sortedDishes.length > 0 && section == '') {
      const groupedDishes = _.groupBy(sortedDishes, 'section')
      console.log('section is null');
      console.log(groupedDishes);
      this.setState({
        dishes: sortedDishes,
        groupedDishes,
        sectionDishes: sortedDishes,
      })
    }
  }

  handlePrice(minPrice, maxPrice) {
    const {dishes, sectionDishes, activeSection} = this.state
    console.log(sectionDishes);
    if (activeSection === '') {
      const pricedDishes = _.filter(dishes, function(o) { return minPrice < o.price && o.price < maxPrice });
      console.log(pricedDishes);
      const groupedDishes = _.groupBy(pricedDishes, 'section')
      this.setState({
        groupedDishes,
        sectionDishes: pricedDishes,
      })
      console.log(pricedDishes);
    } else {
      console.log('active section');
      const pricedDishes = _.filter(dishes, function(o) { return minPrice < o.price && o.price < maxPrice });
      const groupedDishes = _.groupBy(pricedDishes, 'section')
      const sectionDishes = groupedDishes[activeSection]
      console.log(pricedDishes);
      this.setState({
        groupedDishes,
        sectionDishes,
      })
    }
  }

  handleTags(tags) {

  }

  filterDishes(type, value) {
    let { dishes, groupedDishes, filteredDishes } = this.state
    if (filteredDishes.length !== dishes.length) {
      switch (type) {
        case 'section':
          if (value === '') {
            filteredDishes = dishes
            this.setState({ filteredDishes })
          } else {
            filteredDishes = groupedDishes[value]
            this.setState({ filteredDishes })
          }
          break;
        case 'sort':

          break;
        default:
      }
    } else {

    }
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

    var fuse = new Fuse(this.state.sectionDishes, options); // "list" is the item array

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
          sections={this.state.sections}
          activeSection={this.state.activeSection}
          handleSectionSelect={(section) => section === "" ? this.setState({ activeSection: section, sectionDishes: this.state.dishes }) : this.setState({ activeSection: section, sectionDishes: this.state.groupedDishes[section] })}
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
                  placeholder={`Search ${this.state.sectionDishes.length} dishes`}
                  autoFocus
                  value={this.state.term}
                  onChange={(e) => this.setState({ term: e.target.value})}/>
              </SearchContainer>
            }
          </PoseGroup>
          <PoseGroup preEnterPose="preEnter">
            {this.state.isFiltering &&
              <SearchContainer key="1">
                <Filter />
              </SearchContainer>
            }
          </PoseGroup>
          <PoseGroup>
            {this.state.isLoading && this.state.groupedDishes
              ?
                <Loading key="0">
                  <span style={{ margin: 'auto'}}> Loading </span>
                </Loading>
              :
                <Test key="1">
                  {this.state.isSearching && this.state.term !== ''
                    ?
                    <DishesList dishes={results} onDishClick={(id) => this.handleDishView(id)}/>
                    :
                    <React.Fragment>
                      {this.state.sections && this.state.sections.map((section) => (
                        <Section name={section} key={section}>
                          <SectionTitle>{section}</SectionTitle>
                          <DishesList dishes={this.state.groupedDishes[section]} />
                        </Section>
                      ))}
                    </React.Fragment>
                  }
                </Test>
            }
          </PoseGroup>
        </Scroller>
        <div style={{position: 'fixed', top: '0', zIndex: '888'}}>
          <PoseGroup>
            {this.state.activeDish !== "" &&
              <StyledSwiperContainer key="0">
                <Swiper
                  dish={this.state.activeDish}
                  restaurant={this.props.restaurant}
                  dishes={this.state.sectionDishes}
                  dishIndex={_.findIndex(this.state.sectionDishes, { id: this.state.activeDish })}
                  title={this.state.activeSection}
                  isVisible={this.state.activeDish !== ""}
                  handleCollapse={() => this.setState({ activeDish: "", overlayVisible: false })}/>
              </StyledSwiperContainer>
            }
          </PoseGroup>
        </div>
      </RestaurantWrapper>
    );
  }
}

export default Restaurant;
