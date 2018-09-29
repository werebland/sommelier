import React, { Component } from 'react';
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose'
import Fuse from 'fuse.js'
import DishCard from './DishCard'

const SearchWrapper = posed.div({
  expanded: {
    width: '100vw',
    height: '100vh',
    y: -36,
  },
  collapsed: {
    width: 'calc(100vw - 32px)',
    height: '40px',
    y: -20,
  }
})

const StyledSearchWrapper = styled(SearchWrapper)`
  width: calc(100vw - 32px);
  height: 40px;
  background: #FFFFFF;
  box-shadow: 0 2px 16px -2px rgba(0,0,0,0.32);
  border-radius: ${props => props.expanded ? '0' : '4px'};
  margin: auto;
  position: ${props => props.expanded ? 'fixed' : 'sticky'};
  transform: translateY(-20px);
  top: 36px;
  overflow: hidden;
  box-sizing: border-box;
  padding: ${props => props.expanded ? '16px' : 0};
  z-index: 8;
`;

const SearchInputWrapper = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  box-sizing: border-box;
  padding: 0 0 0 40px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  max-height: 40px;
  border-radius: 0;
  border: 0;
  box-shadow: none;
  appearance: none;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 8px;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  color: #0f0f0f;
  transition: 0.4s ease-out all;

  &::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: #9f9f9f;
  }

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.i`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.expanded ? '#0f0f0f' : '#9f9f9f'};
  transition: 0.4s ease-out all;
  cursor: ${props => props.expanded ? 'pointer' : 'default'};
`;

const SearchResults = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  overflow: scroll;
  margin-left: 16px;
  padding: 16px;
  box-sizing: border-box;
`;

const PosedDishCard = posed.article({
  pressable: true,
  enter: {
    opacity: 1,
  },
  exit: {
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

const StyledPosedDishCard = styled(PosedDishCard)`
  margin-bottom: 16px;
  scale: 1;
  transform-origin: center !important;
  border-radius: 4px;
  background: transparent;
`;

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      term: '',
    }
  }

  handleExpand() {
    this.setState({ expanded: true })
    this.props.handleExpandSearch()
  }

  handleCollapse() {
    this.setState({
      expanded: false,
      term: '',
    })
    this.props.handleCollapseSearch()
  }

  render() {

    var options = {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 80,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "title",
        "type",
        "family",
    ]
    };

    var fuse = new Fuse(this.props.dishes, options); // "list" is the item array

    var result = fuse.search(this.state.term);

    return (
      <StyledSearchWrapper pose={this.state.expanded ? 'expanded' : 'collapsed'} expanded={this.state.expanded} className="sticky-events">
        <SearchInputWrapper expanded={this.state.expanded}>
          <SearchIcon className="material-icons" onClick={() => this.state.expanded === true && this.handleCollapse()} expanded={this.state.expanded}>
            {this.state.expanded ? 'close' : 'search'}
          </SearchIcon>
          <SearchInput
            type="search"
            onFocus={() => this.state.expanded === false && this.handleExpand()}
            onChange={(e) => this.setState({ term: e.target.value })}
            placeholder="Search Dishes"/>
        </SearchInputWrapper>
        {this.state.expanded && this.state.term !== "" &&
          <SearchResults>
            <PoseGroup>
              {result && result.map((dish) =>
                <StyledPosedDishCard
                  key={dish.id}
                  onClick={() => this.props.handleDishCardClick(dish.id, result)}><DishCard dish={dish}/></StyledPosedDishCard>
              )}
            </PoseGroup>
          </SearchResults>
        }
      </StyledSearchWrapper>
    );
  }

}

export default Search;
