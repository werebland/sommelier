import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import posed, { PoseGroup } from 'react-pose';
import _ from 'lodash'
import Sharer from './Sharer'

const SwiperWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: #0f0f0f;
  display: flex;
  flex-flow: column nowrap;
  color: #fff;
  padding-top: 40px;
  box-sizing: border-box;
`;

const SwiperCollapse = styled.i`
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;
  display: block;
  position: absolute;
  top: 16px;
  left: 16px;
`;

const SwiperShare = styled.i`
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;
  display: block;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const SwiperHeader = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const SwiperTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

const SwiperStatus = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  display: flex;
  align-items: center;

  & strong {
    font-weight: 700;
  }
`;

const SwiperSlick = styled.div`
  width: 100%;
`;

const DishSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const DishSlideImage = styled.div`
  width: 100vw;
  height: calc(100vw/1.7777);
  display: block;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const DishSlideContent = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  padding: 16px;
  box-sizing: border-box;
`;

const DishSlideTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const DishSlideSubtitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 8px;
`;

const DishSlideDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const SharerContainer = posed.div({
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

const StyledSharerContainer = styled(SharerContainer)`
  width: 100vw;
  height: 240px;
  position: fixed;
  transform: translateY(100vw);
  bottom: 0;
  z-index: 8888;
`;

class Swiper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: this.props.dishIndex,
      isSharing: false,
      activeDish: {}
    }
  }

  componentWillUnmount() {
    document.body.style.overflowY = 'auto'
  }

  handleShare() {
    const slideIndex = this.state.slideIndex
    console.log(this.state.slideIndex);
    console.log(slideIndex);
    const dish = this.props.dishes[slideIndex]
    console.log(dish);
    this.setState({
      isSharing: true,
      activeDish: dish
    })
  }

  hasShared(medium) {
    this.setState({
      isSharing: false,
    })
  }

  render() {
    if (this.props.isVisible) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }

    const settings = {
      dots: false,
      arrows: false,
      initialSlide: this.props.dishIndex,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: current => this.setState({ slideIndex: current }),
    };

    return (
      <SwiperWrapper>
        <SwiperCollapse className="material-icons" onClick={() => this.props.handleCollapse()}>
          close
        </SwiperCollapse>
        <SwiperShare className="material-icons" onClick={() => this.handleShare()}>
          open_in_new
        </SwiperShare>
        <SwiperHeader>
          <SwiperTitle>
            {this.props.title === "popular" &&
              "Popular"
            }
            {this.props.title === "results" &&
              "Results"
            }
            {this.props.title !== "popular" && this.props.title !== "results" &&
              _.upperFirst(this.props.title) + "s"
            }
          </SwiperTitle>
          <SwiperStatus>
            <i className="material-icons" onClick={() => this.slider.slickGoTo(this.state.slideIndex - 1)}>chevron_left</i>
            <strong>{this.state.slideIndex + 1}</strong>
            <i className="material-icons" onClick={e => this.slider.slickGoTo(this.state.slideIndex + 1)}>chevron_right</i>
            of {this.props.dishes.length}
          </SwiperStatus>
        </SwiperHeader>
        <SwiperSlick>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {this.props.dishes.map((dish) =>
              <DishSlide key={dish.id}>
                <DishSlideImage image={dish.image}/>
                <DishSlideContent>
                  <DishSlideTitle>
                    {dish.name}
                    <span>${dish.price}</span>
                  </DishSlideTitle>
                  <DishSlideSubtitle>
                    {dish.section} · {dish.type}
                  </DishSlideSubtitle>
                  <DishSlideDescription>
                    {dish.description}
                  </DishSlideDescription>
                </DishSlideContent>

              </DishSlide>
            )}
          </Slider>
        </SwiperSlick>
        <PoseGroup>
          {this.state.isSharing &&
            <StyledSharerContainer key="0">
              <Sharer
                onShare={(medium) => this.hasShared(medium)}
                dish={this.state.activeDish}
                restaurant={this.props.restaurant}/>
            </StyledSharerContainer>
          }
        </PoseGroup>
      </SwiperWrapper>
    );
  }

}

export default Swiper;
