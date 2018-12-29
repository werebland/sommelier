import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose'
import ReactSlider from 'react-slider'

const FilterSubBarContainer = styled.div`
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

  & .handle.active {
      background-color: grey;
  }
  .vertical-slider .handle {
      left: 1px;
      width: 48px;
      line-height: 50px;
  }
  .vertical-slider .bar {
      left: 20px;
      width: 10px;
  }
  #horizontal-0,
  #horizontal-1, #horizontal-2, #horizontal-3,
  #vertical {
      margin: 20px 10px;
  }
  #horizontal-2 .bar.bar-2 {
      background: #ddd;
  }
`;

const PosedFilterSubBarSortOptions = posed.div({

})

const FilterSubBarSortOptions = styled(PosedFilterSubBarSortOptions)`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const FilterSubBarSortOption = styled.div`
  display: inline-flex;

`;

const StyledReactSlider = styled(ReactSlider)`
  width: 100%;
  max-width: calc(100vw - 32px - 16px);
  height: 24px;
  border: none;
  display: flex;
  align-items: center;

  & .handle {
    height: 16px;
    width: 16px;
    font-size: .875rem;
    color: #fff;
    background: #1f1f1f;
    border-radius: 50%;
  }

  & .bar {
    background: #9f9f9f;
    height: 4px;
    position: relative;
  }

  & .bar.bar-1 {
    background: #1f1f1f;
  }
`;

const FilterSubBar = ({ changingSort, changingPrice, changingTags, handleChangeSort, handleChangePrice, handleChangeTags  }) => (
  <FilterSubBarContainer>
    <PoseGroup>
      {changingSort &&
        <FilterSubBarSortOptions key="0">
          Sort
        </FilterSubBarSortOptions>
      }
      {changingPrice &&
        <FilterSubBarSortOptions key="1">
          <StyledReactSlider
            defaultValue={[0, 100]}
            withBars
            className="horizontal-slider" />
        </FilterSubBarSortOptions>
      }
    </PoseGroup>
  </FilterSubBarContainer>
);

export default FilterSubBar;
