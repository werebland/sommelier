import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose'

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
`;

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFiltering: false
    }
  }

  render() {
    return (
      <StyledFilterWrapper pose={this.state.isFiltering ? 'expanded' : 'collapsed'} expanded={this.state.isFiltering}>
        {this.state.isFiltering
          ?
          <span>filters</span>
          :
          <i className="material-icons" onClick={() => this.setState({ isFiltering: true })}>filter_list</i>
        }
      </StyledFilterWrapper>
    );
  }

}

export default Filter;
