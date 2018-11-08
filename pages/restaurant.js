import React, { Component } from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import _ from 'lodash'
import base from '../config'
import firestore from 'firebase/firestore'
import moment from 'moment'
import Profile from '../components/Profile'
import Search from '../components/Search'
import DishCard from '../components/DishCard'
import Swiper from '../components/Swiper'
import Filter from '../components/Filter'

const RestaurantWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #f7f7f7;
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
  border-radius: 4px;
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
  padding: 0 16px;
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
  border-radius: 4px;
  background: transparent;
`;

const SwiperContainer = posed.div({
  enter: {
    x: '0vw',
  },
  exit: {
    x: '100vw',
  },
  init: {
    x: '100vw',
  }
})

const StyledSwiperContainer = styled(SwiperContainer)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  transform: translateX(100vw);
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

class Restaurant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeDish: "",
      activeSection: '',
      sections: [],
      dishes: [],
      filteredDishes: [],
      isSearching: false,
      isSticky: false,
      sectionDishes: [],
    };
    this.actionButton = React.createRef()
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
      if (window) {
        window.addEventListener('scroll', this.handleScroll.bind(this));
      }
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

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    let scrollY = window.scrollY
    if (scrollY >= 160) {
      this.setState({ isSticky: true})
    } else {
      this.setState({
        isSticky: false
      })
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
      })
    }
  }

  handleDishView(id, result) {
    if (result) {
      this.setState({ activeDish: id, results: result })
    } else {
      this.setState({
        activeDish: id
      })
    }
    let dish = _.find(this.state.dishes, { id: id })
    let date = moment().format('YYYYMMDD')
    let views = dish.views
    if (_.has(views, date)) {
      // Has views, increment view by 1
      _.set(views, date, views[date] + 1)
    } else {
      // Doesn't have views for this date, add a view
      _.set(views, date, 1)
    }
    const data = {
      views
    }
    base.updateDoc('dishes/' + id, data)
      .then(() => {
      }).catch(err => {
      //handle error
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

  render() {

    if (typeof window !== 'undefined' && this.state.isSearching) {
      window.document.body.style.overflowY = 'hidden'
    } else if (typeof window !== 'undefined' && !this.state.isSearching) {
      window.document.body.style.overflowY = 'auto'
    } else {

    }

    if (Object.keys(this.props.restaurant).length === 0) {
      return (
        <ErrorWrapper>
          <ErrorContent>
          Whoops! There doesn't seem to be a restaurant with that username. This is likely a problem with the implementation of Sommelier on your site. Get in touch with us at <a href="mailto:support@getsommelier.com">support@getsommelier.com</a>.
          </ErrorContent>
        </ErrorWrapper>
      )
    }

    return (
      <RestaurantWrapper>
        <Head>
          <title>What to eat at {this.props.restaurant.name} - {this.props.restaurant.address.street}, {this.props.restaurant.address.city}</title>
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <Filter onSort={(selectedSort) => this.handleSort(selectedSort)} onPrice={(minPrice, maxPrice) => this.handlePrice(minPrice, maxPrice)}/>
        {this.props.restaurant.action === "call" &&
          <ActionButton innerRef={this.actionButton} href={`tel: ${this.props.restaurant.phone}`}>
            Call
          </ActionButton>
        }
        {this.props.restaurant.action === "reserve" &&
          <ActionButton innerRef={this.actionButton} target="black" href={this.props.restaurant.reserve}>
            Reserve
          </ActionButton>
        }
        {this.props.restaurant.action === "order" &&
          <ActionButton innerRef={this.actionButton} target="blank" href={this.props.restaurant.order}>
            Order
          </ActionButton>
        }
        <Profile
          name={this.props.restaurant.name}
          cuisine={this.props.restaurant.cuisine}
          priceRange={this.props.restaurant.price}
          background={this.props.restaurant.image}
          address={this.props.restaurant.address.street} />
        <Scroller>
            <Search
              dishes={this.state.dishes}
              sticky={this.state.isSticky}
              width={this.state.isSticky ? `calc(100vw - 32px - ${this.actionButton.current.offsetWidth}px - 16px - 56px)` : 'calc(100vw - 32px)'}
              handleExpandSearch={() => this.setState({ isSearching: true })}
              handleCollapseSearch={() => this.setState({ isSearching: false })}
              handleDishCardClick={(id, result) => this.handleDishView(id, result)}/>
          <DishCardsFilters>
            <DishCardsFilter active={this.state.activeSection === ''} onClick={() => this.setState({ activeSection: '', sectionDishes: this.state.dishes })}>
              All
            </DishCardsFilter>
            {this.state.sections && this.state.sections.map((section) =>
              <DishCardsFilter
                key={section}
                active={this.state.activeSection === section}
                onClick={() => this.setState({ activeSection: section, sectionDishes: this.state.groupedDishes[section] })}>
                  {_.upperFirst(section)}
                </DishCardsFilter>)
            }
          </DishCardsFilters>
          <DishCards>
            {this.state.sectionDishes && this.state.sectionDishes.length > 0
              ?
                <PoseGroup>
                  {this.state.sectionDishes.map((dish) =>
                    <StyledPosedDishCard
                      key={dish.id}
                      onClick={() => this.handleDishView(dish.id)}><DishCard
                      dish={dish}/>
                    </StyledPosedDishCard>)
                  }
                </PoseGroup>
              :
                <div>
                  No results
                </div>
            }

          </DishCards>

        </Scroller>
        <div style={{position: 'fixed', top: 0, zIndex: '888'}}>
          <PoseGroup>
            {this.state.activeDish !== "" &&
              <StyledSwiperContainer key="0">
                <Swiper
                  dish={this.state.activeDish}
                  restaurant={this.props.restaurant}
                  dishes={this.state.isSearching ? this.state.results : this.state.sectionDishes}
                  dishIndex={this.state.isSearching ?  _.findIndex(this.state.results, { id: this.state.activeDish }) :  _.findIndex(this.state.sectionDishes, { id: this.state.activeDish })}
                  title={this.state.isSearching ? 'results' : this.state.activeSection}
                  isVisible={this.state.activeDish !== ""}
                  handleCollapse={() => this.setState({ activeDish: "" })}/>
              </StyledSwiperContainer>
            }
          </PoseGroup>
        </div>

      </RestaurantWrapper>
    );
  }
}

export default Restaurant;
