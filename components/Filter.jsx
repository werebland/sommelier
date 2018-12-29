import React, { Component } from 'react';
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose'

const FilterWrapper = posed.div({
  expanded: {
    width: 'calc(100vw - 32px)',
  },
  collapsed: {
    width: '40px',
  },
})

const StyledFilterWrapper = styled(FilterWrapper)`
  position: fixed;
  top: 16px;
  left: 16px;
  height: 40px;
  width: 40px;
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
  padding: 0 0 0 40px;
  box-sizing: border-box;
  overflow: visible;
`;

const FilterToggleIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const FilterToggleIcon = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
  init: {
    scale: 0,
    opacity: 0,
  }
})

const StyledFilterToggleIcon = styled(FilterToggleIcon)`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  scale: 1;
  opacity: 1;
  color: #0f0f0f;
  position: relative;
`;

const FilterIndicator = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #f94343;
  display: block;
  position: absolute;
  right: -4px;
  top: -4px;
`;

const PosedFilterOptions = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    staggerChildren: 50,
  },
  exit: {
    opacity: 0,
    x: -16
  }
})

const FilterOptions = styled(PosedFilterOptions)`
  width: calc(100vw - 32px - 40px);
  min-width: calc(100vw - 32px - 40px);
  height: 40px;
  display: flex;
  box-sizing: border-box;
  padding: 8px 8px 8px 0;
`;

const FilterOptionWrapper = posed.div({
  enter: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -16,
  },
  preEnter: {
    opacity: 0,
    x: -16,
  }
});

const FilterOptionToggle = styled.div`
  height: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background:${props => props.active ? '#0f0f0f' : '#9f9f9f'};
  margin-right: 8px;

  &:hover, &:active, &:focus {
    background: #0f0f0f;
  }
`;

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFiltering: false,
      hasFilters: false,
      isChangingSort: false,
      isChangingPrice: false,
      isChangingTags: false,
      activeSort: '',
      minPrice: 0,
      maxPrice: 999,
    }
  }

  handleSort(selectedSort) {
    let activeSort = this.state.activeSort
    console.log(activeSort)
    console.log(selectedSort);
    if (selectedSort === activeSort) {
      this.setState({ activeSort: "", isChangingSort: false, hasFilters: false, })
    } else {
      this.setState({ activeSort: selectedSort, isChangingSort: false, hasFilters: true, })
    }
    this.props.onSort(selectedSort)
  }

  handlePrice() {
    let { minPrice, maxPrice } = this.state
    console.log(minPrice);
    this.props.onPrice(minPrice, maxPrice)
    this.setState({
      isChangingPrice: false
    })
  }

  render() {
    return (
      <StyledFilterWrapper
        pose={this.props.filtering ? 'expanded' : 'collapsed'}
        expanded={this.props.filtering}
        onClick={() => this.props.filtering === false && this.props.startFilter()}>
        <FilterToggleIconWrapper>
          <PoseGroup>
            {this.props.filtering
              ?
              <StyledFilterToggleIcon key="0">
                <i
                  className="material-icons"
                  onClick={() => this.props.endFilter()}>close</i>
              </StyledFilterToggleIcon>

              :
              <StyledFilterToggleIcon key="1">
                <i className="material-icons">filter_list</i>
                {this.state.hasFilters && <FilterIndicator />}
              </StyledFilterToggleIcon>
            }
          </PoseGroup>
        </FilterToggleIconWrapper>
        <PoseGroup>
          {this.props.filtering &&
            <FilterOptions key="0">
              <FilterOptionWrapper key="1">
                <FilterOptionToggle
                  active={this.state.activeSort !== ''}
                  onClick={() => this.props.startChangingSort()}>
                  Sort by
                </FilterOptionToggle>
              </FilterOptionWrapper>
              <FilterOptionWrapper key="2">
                <FilterOptionToggle onClick={() => this.props.startChangingPrice()}>
                  Price Range
                </FilterOptionToggle>
              </FilterOptionWrapper>
              <FilterOptionWrapper key="3">
                <FilterOptionToggle onClick={() => this.props.startChangingTags()}>
                  Tags
                </FilterOptionToggle>
              </FilterOptionWrapper>
            </FilterOptions>
          }
        </PoseGroup>
      </StyledFilterWrapper>
    );
  }

}

export default Filter;
