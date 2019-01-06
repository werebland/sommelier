import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose'
import ellipsize from 'ellipsize'

const PosedDishesListContainer = posed.div({
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -16,
  }
})

const DishesListContainer = styled(PosedDishesListContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 12px 20px 0;
  box-sizing: border-box;
  background: #fff;
  position: relative;
  z-index: 8;
`;

const PosedDishCardContainer = posed.article({
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -16,
  },
  preEnter: {
    opacity: 0,
    y: -16,
  }
})

const DishCardContainer = styled(PosedDishCardContainer)`
  width: 100%;
  height: 72px;
  display: flex;
  flex-flow: row nowrap;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-of-type {
    border-bottom: none;
    padding: 8px 0 0;
  }
`;

const DishCardImage = styled.div`
  width: 72px;
  height: 72px;
  display: inline-flex;
  background: #9f9f9f;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.image});
  border-radius: 8px;
  margin-right: 8px;
`;

const DishCardContent = styled.div`
  height: 72px;
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
`;

const DishCardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #1f1f1f;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const DishCardSubtitle = styled.h5`
  font-size: .875rem;
  font-weight: 400;
  color: #9f9f9f;
  margin: 0 0 4px 0;
`;

const DishCardDescription = styled.p`
  font-size: .875rem;
  font-weight: 400;
  color: #9f9f9f;
  margin: 0;
  padding: 0;
`;

const DishCard = ({ dish, onDishClick }) => (
  <DishCardContainer onClick={() => onDishClick(dish.id)}>
    <DishCardImage image={dish.image}/>
    <DishCardContent>
      <DishCardTitle>
        {dish.name}
        <span>
          ${dish.price}
        </span>
      </DishCardTitle>
      <DishCardSubtitle>
        {dish.section} · {dish.type}
      </DishCardSubtitle>
      <DishCardDescription>
        {ellipsize(dish.description, 60)}
      </DishCardDescription>
    </DishCardContent>
  </DishCardContainer>
);

const DishesList = ({ dishes, onDishClick }) => (
  <PoseGroup>
    <DishesListContainer key="1">
        {dishes.map((dish) => (
          <DishCard dish={dish} key={dish.id} onDishClick={(id) => onDishClick(id)}/>
        ))}
    </DishesListContainer>
  </PoseGroup>

);

export default DishesList;
