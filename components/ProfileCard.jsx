import React, {Fragment} from 'react';
import styled from 'styled-components';
import _ from 'lodash'
import posed, {PoseGroup} from 'react-pose'
import Select from 'react-select'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import SectionsMenu from './SectionsMenu'
import Timings from './Timings'

const ProfileCardWrapper = styled.div`
  width: calc(100vw - 40px);
  padding: 8px 16px 0;
  box-sizing: border-box;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 16px -2px rgba(31,31,31,0.32);
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  position: ${props => props.isSticky ? 'fixed' : 'absolute'};
  left: 20px;
  top: ${props => props.isSticky ? `-${props.height - 40}px` : `${240 - props.height}px`};
  z-index: 87;
  transition: 0.2s ease-out all;

  @media only screen and (max-width: 320px) {
    width: calc(100vw - 16px);
    left: 8px;
    padding: 8px 8px 0;
  }
`;

const ProfileCardUpper = styled.div`
  width: 100%;
  display: block;
  flex-flow: column nowrap;
  border-bottom: 1px solid #1f1f1f;
  margin: 0;
`;

const ProfileCardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f1f1f;
  margin: 0;
`;

const ProfileCardSubtitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: #1f1f1f;
  margin: 0;

  & a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 400;
    color: #1f1f1f;
  }
`;

const ProfileCardButton = styled.a`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #000;
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 8px;
  margin-right: 8px;
  text-decoration: none;
  border: 1px solid #000;
  transition: background 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, border-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

  &:hover {
    background: transparent;
    border-color: rgba(0,0,0,1);
    color: rgba(0,0,0,1);
  }

`;

const ProfileCardLower = styled.div`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  padding: 8px 0 0;
  box-sizing: border-box;
  transition: 0.2s ease-out all;
`;

const ProfileCardIcons = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  height: 24px;
`;

const ProfileCardIcon = styled.i`
  width: 24px;
  height: 24px;
  font-size: 24px;
  color: #1f1f1f;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 8px;
`;

const PosedProfileCardSections = posed.div({
  enter: {
    staggerChildren: 300
  }
})

const ProfileCardSections = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: -50px;
  padding-bottom: 50px;
  overflow-y: hidden;
  overflow-x: scroll;
`;

const PosedProfileCardSection = posed.span({
  enter: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -16,
    opacity: 0,
  },
  preEnter: {
    x: -16,
    opacity: 0,
  }
})

const ProfileCardSection = styled(PosedProfileCardSection)`
  margin-right: 8px;
  font-size: 1rem;
  font-weight: 400;
  color: ${props => props.active ? '#1f1f1f' : '#9f9f9f'};
  cursor: pointer;
  white-space: pre;

  & a {
    color: ${props => props.active ? '#1f1f1f' : '#9f9f9f'};

    &.active {
      color: #1f1f1f;
    }
  }
`;

const ProfileCardActions = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const ProfileCardSearchContainer = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: flex-start;
`;

const ProfileCardSearchInput = styled.input`
  display: flex;
  flex: 1;
  height: 100%;
  border: 0;
  border-bottom: 1px solid hsl(0,0%,80%);
  outline: 0;
  box-shadow: none;
  font-size: 1rem;
  font-weight: 400;
  color: #1f1f1f;
  box-sizing: border-box;
  border-radius: 0 !important;
  appearance: none;

  &::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: #9f9f9f;
  }

  &:focus, &:hover, &:active {
    border-color: #1f1f1f;
  }
`;

const ProfileCardFilterContainer = styled.div`
  height: 24px;
  display: inline-flex;
  align-items: flex-start;
  box-sizing: border-box;
  margin-right: 8px;

  & .profileCardFilterSelect__menu {
    z-index: 88;
  }

  & .profileCardFilterSelect__value-container {
    width: ${props => props.width}px;
    min-width: 60px;
    height: 24px;
    box-sizing: border-box;
  }

  & .profileCardFilterSelect__control {
    border: 0;
    border-bottom: 1px solid hsl(0, 0%, 80%);
    border-radius: 0;
    height: 24px;
    min-height: 24px !important;
  }

  & .profileCardFilterSelect__control.profileCardFilterSelect__control--is-focused {
    border: 0;
    border-bottom: 1px solid #1f1f1f;
    border-color: #1f1f1f;
    box-shadow: none;
        height: 24px;
        min-height: 24px !important;
  }

  & .profileCardFilterSelect__control.profileCardFilterSelect__control--is-focused:hover {
    border: 0;
    border-bottom: 1px solid #1f1f1f;
    border-color: #1f1f1f;
  }

  & .profileCardFilterSelect__single-value {
    font-weight: 400;
    color: #1f1f1f;
    font-size: .875rem;
  }

  & .profileCardFilterSelect__placeholder {
    font-weight: 400;
    color: #9f9f9f;
    font-size: 1rem;
  }

  & .profileCardFilterSelect__option--active {
    background-color: #1f1f1f;
  }

  & .profileCardFilterSelect__indicators {
    height: 24px;
  }
`;

const PriceInput = styled(MaskedInput)`
  position: relative;
  display: inline-flex;
  flex: 1;
  height: 100%;
  min-height: 24px;
  border: 0;
  border-bottom: 1px solid hsl(0,0%,80%);
  outline: 0;
  box-shadow: none;
  font-size: 1rem;
  font-weight: 400;
  color: #1f1f1f;
  box-sizing: border-box;
  padding-left: 8px;
  min-width: 64px;
  width: ${props => `calc(100% - ${props.filterwidth}px)`};
  border-radius: 0 !important;
  appearance: none;

  &::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: #9f9f9f;
  }

  &:focus, &:hover, &:active {
    border-color: #1f1f1f;
  }
`;

const PosedIcon = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
})

const ProfileCardTagSelect = styled.div`
    width: 100%;
    height: 24px;
    display: inline-flex;
    align-items: flex-start;
    box-sizing: border-box;
    margin-top: 8px;

    & .profileCardTagSelect {
      width: 100%;
    }

    & .profileCardTagSelect__menu {
      z-index: 88;
    }

    & .profileCardTagSelect__value-container {
      width: 100%;
      min-width: 60px;
      height: 24px;
      box-sizing: border-box;
    }

    & .profileCardTagSelect__control {
      width: 100%;
      border: 0;
      border-bottom: 1px solid hsl(0, 0%, 80%);
      border-radius: 0;
      height: 24px;
      min-height: 24px !important;
    }

    & .profileCardTagSelect__control.profileCardTagSelect__control--is-focused {
      border: 0;
      border-bottom: 1px solid #1f1f1f;
      border-color: #1f1f1f;
      box-shadow: none;
          height: 24px;
          min-height: 24px !important;
    }

    & .profileCardTagSelect__control.profileCardTagSelect__control--is-focused:hover {
      border: 0;
      border-bottom: 1px solid #1f1f1f;
      border-color: #1f1f1f;
    }

    & .profileCardTagSelect__single-value {
      font-weight: 400;
      color: #1f1f1f;
      font-size: .875rem;
    }

    & .profileCardTagSelect__placeholder {
      font-weight: 400;
      color: #9f9f9f;
      font-size: 1rem;
    }

    & .profileCardTagSelect__option--active {
      background-color: #1f1f1f;
    }

    & .profileCardTagSelect__indicators {
      height: 24px;
    }

    & .profileCardTagSelect__indicator {
      height: 36px;
      width: 36px;
    }

    & .profileCardTagSelect__value-container--is-multi {
      height: 24px;
      display: flex;
      flex-flow: row nowrap;
      overflow: scroll;
    }

    & .profileCardTagSelect__multi-value {
      background: #fff;
      border: 1px solid #1f1f1f;
      border-radius: 4px;
    }
`;

const ProfileCardInteractions = styled.div`
  width: calc(100vw - 32px - 24px - 24px - 16px);
  height: ${props => props.isFiltering ? 'auto' : '24px'};
  display: flex;
  flex: 1;
  border-left: 1px solid #1f1f1f;
  padding-left: 8px;
  margin-bottom: 8px;
`;

const sortOptions = [
  {
    label: '$ to $$$',
    value: 'priceAsc',
  },
  {
    label: '$$$ to $',
    value: 'priceDsc',
  },
  {
    label: 'A to Z',
    value: 'nameAsc',
  },
  {
    label: 'Z to A',
    value: 'nameDsc',
  },
]

const timings = [
{  Wednesday: {
    start: '8:00 am',
    end: '5:00 pm'
  }}
]

const ProfileCard = React.forwardRef((props, ref) => {

    const {
        restaurant,
        isSticky,
        sections,
        activeSection,
        handleSectionSelect,
        toggleSearch,
        toggleFilter,
        handleSetActive,
        isSearching,
        toggleSearching,
        isFiltering,
        toggleFiltering,
        handleSearch,
        handleSort,
        handlePrice,
        handleTags,
        sortOption,
        height,
        price,
        tags,
        tagOption,
      } = props

    const numberMask = createNumberMask({
      prefix: '$',
      suffix: '' // This will put the dollar sign at the end, with a space.
    })

    const tagOptions = tags.map(v => ({
      label: v,
      value: v
    }));

    return (
    <ProfileCardWrapper isSticky={isSticky} ref={ref} height={height}>
      <ProfileCardUpper>
        <ProfileCardTitle>
          {restaurant.name}
        </ProfileCardTitle>
        <ProfileCardSubtitle>
          {restaurant.cuisine} · {restaurant.price} · <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.address.street}`}
              target="blank">{restaurant.address.street}.</a>
        </ProfileCardSubtitle>
        {restaurant.timings &&
          <Timings timings={restaurant.timings} offset={180}/>
        }
        <div style={{ marginTop: '8px'}}>
          {restaurant.phone &&
            <ProfileCardButton
              target="blank"
              href={`tel: ${restaurant.phone}`}
            >
              Call
            </ProfileCardButton>
          }
          {restaurant.reserve &&
            <ProfileCardButton
              target="blank"
              href={restaurant.reserve}
            >
              Reserve
            </ProfileCardButton>
          }
          {restaurant.order &&
            <ProfileCardButton
              target="blank"
              href={restaurant.order}
            >
              Order
            </ProfileCardButton>
          }
        </div>
      </ProfileCardUpper>
      <ProfileCardLower height={isFiltering ? 'auto' : '40px'}>
        <ProfileCardIcons>
          <PoseGroup>
            {isSearching
              ?
              <PosedIcon key="0">
                <ProfileCardIcon className="material-icons" onClick={() => toggleSearching()}>
                  close
                </ProfileCardIcon>
              </PosedIcon>
              :
              <PosedIcon key="2">
                <ProfileCardIcon className="material-icons" onClick={() => toggleSearching()}>
                  search
                </ProfileCardIcon>
              </PosedIcon>
            }
          </PoseGroup>
          <PoseGroup>
            {isFiltering
              ?
              <PosedIcon key="3">
                <ProfileCardIcon className="material-icons" onClick={() => toggleFiltering()}>
                  close
                </ProfileCardIcon>
              </PosedIcon>
              :
              <PosedIcon key="4">
                <ProfileCardIcon className="material-icons" onClick={() => toggleFiltering()}>
                  filter_list
                </ProfileCardIcon>
              </PosedIcon>
            }
          </PoseGroup>
        </ProfileCardIcons>
        <ProfileCardInteractions isFiltering={isFiltering}>
          <SectionsMenu
            sections={sections}
            activeSection={activeSection}
            handleSetActive={(section) => handleSetActive(section)}
            visible={!isSearching && !isFiltering}/>
          <ProfileCardActions>
            {isSearching &&
              <ProfileCardSearchContainer>
                <ProfileCardSearchInput type="search" placeholder="Search dishes" autoFocus onChange={(e) => handleSearch(e.target.value)}/>
              </ProfileCardSearchContainer>
            }
            {isFiltering &&
              <Fragment>
                <div style={{display: 'inline-flex', flexFlow: 'row wrap', width: '100%'}}>
                  <ProfileCardFilterContainer width={(8*sortOptions[0].label.length) + 16}>
                    <Select
                      options={sortOptions}
                      classNamePrefix="profileCardFilterSelect"
                      placeholder="Sort"
                      onChange={(option) => handleSort(option)}
                      value={sortOption}
                      />
                  </ProfileCardFilterContainer>
                  <PriceInput
                    filterwidth={(8*sortOptions[0].label.length)}
                    placeholder="$ (max)"
                    onChange={(e) => handlePrice(e.target.value)}
                    value={price}
                    mask={numberMask}
                    type="search"/>
                </div>
                {tags.length > 0 &&
                  <ProfileCardTagSelect>
                    <Select
                      options={tagOptions}
                      isClearable
                      classNamePrefix="profileCardTagSelect"
                      className="profileCardTagSelect"
                      placeholder="Tags"
                      onChange={(option) => handleTags(option)}
                      value={tagOption}
                      style={{
                        width: '100%'
                      }}
                      />
                  </ProfileCardTagSelect>
                }
              </Fragment>
            }
          </ProfileCardActions>
        </ProfileCardInteractions>

      </ProfileCardLower>
    </ProfileCardWrapper>
  )
}) ;

export default ProfileCard;
