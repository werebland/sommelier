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

const FilterOptions = styled.div`
  width: calc(100vw - 32px - 40px);
  min-width: calc(100vw - 32px - 40px);
  height: 40px;
  display: flex;
  box-sizing: border-box;
  padding: 8px 8px 8px 0;
`;

const FilterOptionWrapper = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  position: relative;
`;

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

const FilterOptionDropdown = posed.div({
  enter: {
    y: 40,
    opacity: 1,
  },
  exit: {
    y: 0,
    opacity: 0,
  },
  init: {
    y: 0,
    opacity: 0,
  }
})

const StyledFilterOptionDropdown = styled(FilterOptionDropdown)`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  padding: 8px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  z-index: 7;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 16px -2px rgba(0,0,0,0.32);
`;

const FilterOptionDropdownOptions = styled.ul`
  padding: 0;
  margin: 0;
  display: inline-flex;
  flex-flow: column nowrap;
`;

const FilterOptionDropdownOption = styled.li`
  list-style: none;
  cursor: pointer;
  border-radius: 4px;
  background: #fff;
  color: ${props => props.active ? '#0f0f0f' : '#9f9f9f'};
  padding: 4px;
  white-space: pre;
  margin-bottom: 4px;
  transition: 0.3s ease-out all;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const FilterOptionDropdownInputWrapper = styled.label`
  display: inline-flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  font-size: 0.875rem;
  font-weight: 400;
  color: #9f9f9f;
  margin-bottom: 8px
`;

const FilterOptionDropdownInput = styled.input`
  border-radius: 4px;
  background: #f7f7f7;
  color: #0f0f0f;
  padding: 4px;
  font-size: 1rem;
  display: inline-flex;
  appearance: none;
  box-shadow: none;
  border: 0;
  margin-top: 4px;
  width: 80px;
`;

const FilterOptionDropdownButton = styled.div`
  display: inline-flex;
  float: right;
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
        pose={this.state.isFiltering ? 'expanded' : 'collapsed'}
        expanded={this.state.isFiltering}
        onClick={() => this.state.isFiltering === false && this.setState({ isFiltering: true })}>
        <FilterToggleIconWrapper>
          <PoseGroup>
            {this.state.isFiltering
              ?
              <StyledFilterToggleIcon key="0">
                <i className="material-icons" onClick={() => this.setState({ isFiltering: false, isChangingSort: false, isChangingPrice: false, isChangingTags: false, })}>close</i>
              </StyledFilterToggleIcon>

              :
              <StyledFilterToggleIcon key="1">
                <i className="material-icons">filter_list</i>
                {this.state.hasFilters && <FilterIndicator />}
              </StyledFilterToggleIcon>
            }
          </PoseGroup>
        </FilterToggleIconWrapper>
        {this.state.isFiltering &&
            <FilterOptions>
              <FilterOptionWrapper>
                <FilterOptionToggle active={this.state.activeSort !== ''} onClick={() => this.setState({ isChangingSort: !this.state.isChangingSort })}>
                  Sort by
                </FilterOptionToggle>
                <PoseGroup>
                  {this.state.isChangingSort &&
                    <StyledFilterOptionDropdown key="0">
                      <FilterOptionDropdownOptions>
                        <FilterOptionDropdownOption
                          active={this.state.activeSort === "priceAsc"}
                          onClick={() => this.handleSort("priceAsc")}>
                          Price ($-$$$)
                        </FilterOptionDropdownOption>
                        <FilterOptionDropdownOption
                          active={this.state.activeSort === "priceDsc"}
                          onClick={() => this.handleSort("priceDsc")}>
                          Price ($$$-$)
                        </FilterOptionDropdownOption>
                        <FilterOptionDropdownOption
                          active={this.state.activeSort === "nameAsc"}
                          onClick={() => this.handleSort("nameAsc")}>
                          Name (A-Z)
                        </FilterOptionDropdownOption>
                        <FilterOptionDropdownOption
                          active={this.state.activeSort === "nameDsc"}
                          onClick={() => this.handleSort("nameDsc")}>
                          Name (Z-A)
                        </FilterOptionDropdownOption>
                      </FilterOptionDropdownOptions>
                    </StyledFilterOptionDropdown>
                  }
                </PoseGroup>
              </FilterOptionWrapper>
              <FilterOptionWrapper>
                <FilterOptionToggle onClick={() => this.setState({ isChangingPrice: !this.state.isChangingPrice })}>
                  Price Range
                </FilterOptionToggle>
                <PoseGroup>
                  {this.state.isChangingPrice &&
                    <StyledFilterOptionDropdown key="1">
                      <FilterOptionDropdownInputWrapper>
                        Min
                        <FilterOptionDropdownInput type="number" value={this.state.minPrice} onChange={(e) => this.setState({ minPrice: e.target.value })} step="0.01"/>
                      </FilterOptionDropdownInputWrapper>
                      <FilterOptionDropdownInputWrapper>
                        Max
                        <FilterOptionDropdownInput type="number" value={this.state.maxPrice} onChange={(e) => this.setState({ maxPrice: e.target.value })} step="0.01"/>
                      </FilterOptionDropdownInputWrapper>
                      <span onClick={() => this.handlePrice()}>Done</span>
                    </StyledFilterOptionDropdown>
                  }
                </PoseGroup>
              </FilterOptionWrapper>
              <FilterOptionWrapper>
                <FilterOptionToggle onClick={() => this.setState({ isChangingTags: !this.state.isChangingTags })}>
                  Tags
                </FilterOptionToggle>
                <PoseGroup>
                  {this.state.isChangingTags &&
                    <StyledFilterOptionDropdown key="2">
                    </StyledFilterOptionDropdown>
                  }
                </PoseGroup>
              </FilterOptionWrapper>
            </FilterOptions>
        }
      </StyledFilterWrapper>
    );
  }

}

export default Filter;
