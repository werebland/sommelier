import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose'

const PosedFilterContainer = posed.div({
  enter: {
    opacity: 1,
    height: 40,
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

const FilterContainer = styled(PosedFilterContainer)`
  width: 100%;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
`;

const FilterOption = styled.div`
  display: inline-flex;
  padding: 0 8px;
  border-right: 1px solid #f0f0f0;
  font-size: .875rem;
  font-weight: 700;
  color: ${props => props.active ? '#1f1f1f' : '#9f9f9f'};
`;

const Filter = ({handleSort}) => (
  <FilterContainer>
    <FilterOption onClick={() => handleSort('nameAsc')}>
      Sort (A to Z)
    </FilterOption>
    <FilterOption>
      Price ($0 to $99)
    </FilterOption>
  </FilterContainer>
);

export default Filter;
