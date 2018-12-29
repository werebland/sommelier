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
  background: transparent;
  display: flex;
  flex-flow: column nowrap;
  color: #fff;
  box-sizing: border-box;
`;

const SwiperHeader = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 10px;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const SwiperCollapse = styled.i`
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;
  display: block;
  position: relative;
`;

const SwiperTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  width: 100vw;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: -1;
  box-sizing: border-box;
  padding-left: 32px;
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

const DishSlideWrapper = styled.div`
  width: calc( 100vw - 10px );
  height: 100%;
  min-height: 100vh;
  background: transparent;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-sizing: border-box;
  padding-right: 10px;
  color: #1f1f1f;
`;

const DishSlide = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  background: #fff;
`;

const DishSlideImage = styled.div`
  width: 100%;
  height: calc(100vw/1.7777);
  display: block;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  color: #1f1f1f;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const DishSlideSubtitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #1f1f1f;
  margin-bottom: 8px;
`;

const DishSlideDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #1f1f1f;
  padding: 0;
  margin: 0 0 8px 0;
  box-sizing: border-box;
`;

const DishSlideLabel = styled.span`
  font-size: .875rem;
  font-weight: 400;
  color: #9f9f9f;
  margin-bottom: 4px;
`;

const DishSlideOptions = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 0;
  margin: 0 0 8px 0;
`;

const DishSlideOption = styled.li`
  width: 100%;
  list-style: none;
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  color: #1f1f1f;

  & strong {
    font-weight: 700;
  }
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
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: current => this.setState({ slideIndex: current }),
      centerMode: true,
      centerPadding: '10px'
    };

    return (
      <SwiperWrapper>
        <SwiperHeader>
          <SwiperCollapse className="material-icons" onClick={() => this.props.handleCollapse()}>
            close
          </SwiperCollapse>
          <SwiperTitle>
            {this.props.title === "" ? 'All' : _.upperFirst(this.props.title)}
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
              <DishSlideWrapper key={dish.id}>
                <DishSlide>
                  <DishSlideImage image={dish.image}/>
                  <DishSlideContent>
                    <DishSlideTitle>
                      {dish.name}
                      <span>${dish.price}</span>
                    </DishSlideTitle>
                    <DishSlideSubtitle>
                      {dish.section} · {dish.type}
                    </DishSlideSubtitle>
                    <DishSlideLabel>
                      Description
                    </DishSlideLabel>
                    <DishSlideDescription>
                      {dish.description}
                    </DishSlideDescription>
                    {dish.options &&
                      <React.Fragment>
                        <DishSlideLabel>
                          Options
                        </DishSlideLabel>
                        <DishSlideOptions>
                          {dish.options.map((option, i) =>
                            <DishSlideOption key={i}>
                              {option.name}
                              <strong>
                                ${option.price}
                              </strong>
                            </DishSlideOption>
                          )}
                        </DishSlideOptions>
                      </React.Fragment>
                    }
                  </DishSlideContent>
                </DishSlide>
              </DishSlideWrapper>
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
