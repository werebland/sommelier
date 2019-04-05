import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose'
import ellipsize from 'ellipsize'
import _ from 'lodash'

const PosedItemsListContainer = posed.div({
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -16,
  }
})

const ItemsListContainer = styled(PosedItemsListContainer)`
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

const PosedItemCardContainer = posed.article({
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

const ItemCardContainer = styled(PosedItemCardContainer)`
  width: 100%;
  height: 100%;
  min-height: 72px;
  display: flex;
  flex-flow: row nowrap;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;

  &:first-of-type {
    padding: 0 0 8px;
  }

  &:last-of-type {
    border-bottom: none;
    padding: 8px 0 0;
  }

  &:only-of-type {
    padding: 0;
  }
`;

const ItemCardImage = styled.div`
  width: 72px;
  height: 72px;
  display: inline-flex;
  background: #9f9f9f;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.image});
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
`;

const ItemCardContent = styled.div`
  height: 100%;
  min-height: 72px;
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const ItemCardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #1f1f1f;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  cursor: pointer;

  & span {
    margin-left: 4px;
  }
`;

const ItemCardSubtitle = styled.h5`
  font-size: .875rem;
  font-weight: 400;
  color: #9f9f9f;
  margin: 0;
  display: flex;
  justify-content: space-between;

  & span {
    color: #1f1f1f;
  }
`;

const ItemCardDescription = styled.p`
  font-size: .875rem;
  font-weight: 400;
  color: #9f9f9f;
  margin: 0;
  padding: 0;
`;

const ItemCard = ({ item, onItemClick, handleTag }) => (
  <ItemCardContainer>
    {item.image !== "" &&
      <ItemCardImage image={item.image} onClick={() => onItemClick(item.id)}/>
    }
    <ItemCardContent>
      <ItemCardTitle onClick={() => onItemClick(item.id)}>
        {item.name}
        <span>
          ${item.price.toFixed(2)}
        </span>
      </ItemCardTitle>
      <ItemCardSubtitle>
        {item.section} · {item.type}
        <span onClick={() => handleTag(item.tag)}>
          {item.tag}
        </span>
      </ItemCardSubtitle>
      <ItemCardDescription>
        {item.image === "" &&
          <React.Fragment>
            {item.name.length > 30 ? ellipsize(item.description, 45) : ellipsize(item.description, 75)}
          </React.Fragment>
        }
        {item.image !== "" &&
          <React.Fragment>
            {item.name.length > 21 ? ellipsize(item.description, 25) : ellipsize(item.description, 55)}
          </React.Fragment>
        }
      </ItemCardDescription>
    </ItemCardContent>
  </ItemCardContainer>
);

const ItemsList = ({ items, onItemClick, tag, handleTag }) => (
  <PoseGroup>
    <ItemsListContainer key="1">
      {tag
        ?
        _.filter(items, ['tag', tag]).map((item) => (
          <ItemCard item={item} key={item.id} onItemClick={(id) => onItemClick(id)} handleTag={(tag) => handleTag(tag)}/>
        ))
        :
        items.map((item) => (
          <ItemCard item={item} key={item.id} onItemClick={(id) => onItemClick(id)} handleTag={(tag) => handleTag(tag)}/>
        ))
      }

    </ItemsListContainer>
  </PoseGroup>

);

export default ItemsList;
