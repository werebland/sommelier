import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose'
import _ from 'lodash'

const DishCardWrapper = posed.article({
  pressable: true,
  enter: {
    y: -20,
    opacity: 1,
  },
  exit: {
    y: 20,
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

const StyledDishCardWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background: #FFFFFF;
  display: flex;
  flex-flow: column nowrap;
  scale: 1;
`;

const DishCardImage = styled.div`
  width: 100%;
  height: 164px;
  display: flex;
  background: #9f9f9f;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const DishCardContent = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  padding: 16px;
  box-sizing: border-box;
`;

const DishCardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #0f0f0f;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const DishCardSubtitle = styled.span`
  font-size: .875rem;
  font-weight: 400;
  color: #9f9f9f;
`;

class DishCard extends Component {

  render() {
    return (
      <StyledDishCardWrapper onPressEnd={() => this.props.handleDishCardClick('af3efdssdfgergvds')}>
        <DishCardImage image={this.props.dish.image}/>
        <DishCardContent>
          <DishCardTitle>
            {this.props.dish.title}
            <span>
              ${this.props.dish.price}
            </span>
          </DishCardTitle>
          <DishCardSubtitle>
            {_.upperFirst(this.props.dish.family)} · {_.upperFirst(this.props.dish.type)}
          </DishCardSubtitle>
        </DishCardContent>
      </StyledDishCardWrapper>
    );
  }

}

export default DishCard;
