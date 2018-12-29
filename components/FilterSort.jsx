import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose'

const FilterSortContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
  preEnter: {
    opacity: 0,
  }
})

const StyledFilterSortContainer = styled.div`
  height: 40px;
  width: calc(100vw - 32px);
  position: fixed;
  top: 72px;
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
  z-index: ${props => props.expanded ? '88' : '8'};
  padding: 8px;
  box-sizing: border-box;
  overflow: visible;
`;

const FilterSort = ({}) => (
  <StyledFilterSortContainer>
    Filter sort
  </StyledFilterSortContainer>
);

export default FilterSort;
