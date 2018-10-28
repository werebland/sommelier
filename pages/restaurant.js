import React, { Component } from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import _ from 'lodash'
import base from '../config'
import firestore from 'firebase/firestore'
import Profile from '../components/Profile'
import Search from '../components/Search'
import DishCard from '../components/DishCard'
import Swiper from '../components/Swiper'

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
  z-index: 8;
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
  position: fixed;
  transform: translateX(100vw);
  top: 0;
  z-index: 8888;
`;

class Restaurant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeDish: "",
      activeFilter: 'popular',
      families: [],
      dishes: [],
      filteredDishes: [],
      isSearching: false,
      isSticky: false,
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
      address: {

      }
    }
    if (restaurants) {
      restaurant = restaurants[0] || {}
    }
    return { restaurant,  query }
  }

  componentDidMount() {
    const actionButtonWidth = this.actionButton.current.offsetWidth
    this.fetchDishes()
    if (window) {
      window.addEventListener('scroll', this.handleScroll.bind(this));
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
    base.get('dishes', {
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
    let families = []
    _.each(dishes, function(dish) {
      let family = dish.family
      families.push(family)
    })
    if (families.length === dishes.length) {
      const uniqueFamiles = _.uniq(families)
      const groupedDishes = _.groupBy(dishes, 'family')
      this.setState({
        families: uniqueFamiles,
        groupedDishes: groupedDishes,
        dishes: dishes,
        filteredDishes: dishes,
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

    return (
      <RestaurantWrapper>
        <Head>
          <title>What to eat at {this.props.restaurant.title} - {this.props.restaurant.address.street}, {this.props.restaurant.address.city}</title>
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
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
          title={this.props.restaurant.title}
          cuisine={this.props.restaurant.cuisine}
          priceRange={this.props.restaurant.price}
          background={this.props.restaurant.image}
          address={this.props.restaurant.address.street} />
        <Scroller>
            <Search
              dishes={this.state.dishes}
              width={this.state.isSticky ? `calc(100vw - 32px - ${this.actionButton.current.offsetWidth}px - 16px)` : 'calc(100vw - 32px)'}
              handleExpandSearch={() => this.setState({ isSearching: true })}
              handleCollapseSearch={() => this.setState({ isSearching: false })}
              handleDishCardClick={(id, result) => this.setState({ activeDish: id, results: result })}/>
          <DishCardsFilters>
            <DishCardsFilter active={this.state.activeFilter === 'popular'} onClick={() => this.setState({ activeFilter: 'popular', filteredDishes: this.state.dishes })}>
              Popular
            </DishCardsFilter>
            {this.state.families.map((family) =>
              <DishCardsFilter
                key={family}
                active={this.state.activeFilter === _.lowerCase(family)}
                onClick={() => this.setState({ activeFilter: _.lowerCase(family), filteredDishes: this.state.groupedDishes[family] })}>
                  {_.upperFirst(family)}s
                </DishCardsFilter>)
            }
          </DishCardsFilters>
          <DishCards>
            <PoseGroup>
              {this.state.filteredDishes.map((dish) =>
                <StyledPosedDishCard key={dish.id} onClick={() => this.setState({ activeDish: dish.id })}><DishCard dish={dish}/></StyledPosedDishCard>)
              }
            </PoseGroup>
          </DishCards>

        </Scroller>
        <PoseGroup>
          {this.state.activeDish !== "" &&
            <StyledSwiperContainer key="0">
              <Swiper
                dish={this.state.activeDish}
                restaurant={this.props.restaurant}
                dishes={this.state.isSearching ? this.state.results : this.state.filteredDishes}
                dishIndex={this.state.isSearching ?  _.findIndex(this.state.results, { id: this.state.activeDish }) :  _.findIndex(this.state.filteredDishes, { id: this.state.activeDish })}
                title={this.state.isSearching ? 'results' : this.state.activeFilter}
                isVisible={this.state.activeDish !== ""}
                handleCollapse={() => this.setState({ activeDish: "" })}/>
            </StyledSwiperContainer>
          }
        </PoseGroup>
      </RestaurantWrapper>
    );
  }
}

export default Restaurant;
