import React, {Fragment} from 'react';
import styled from 'styled-components';
import _ from 'lodash'
import { Link } from 'react-scroll'
import posed, {PoseGroup} from 'react-pose'
import Select from 'react-select'

const ProfileCardWrapper = styled.div`
  width: calc(100vw - 40px);
  padding: 8px 16px 0 16px;
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
  top: ${props => props.isSticky ? '-105px' : '95px'};
  z-index: 87;
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
  margin: 0 0 8px 0;

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
  background: #1f1f1f;
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 8px;
  margin-right: 8px;
  text-decoration: none;
`;

const ProfileCardLower = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const ProfileCardIcons = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  height: 24px;
  border-right: 1px solid #1f1f1f;
  margin-right: 8px;
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
  width: 100%;
  height: 24px;
  display: flex;
  align-items: flex-start;

  & .profileCardFilterSelect__menu {
    z-index: 88;
  }

  & .profileCardFilterSelect__value-container {
    width: ${props => props.width}px;
    min-width: 60px;
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
`;

const sortOptions = [
  {
    label: 'Price ($ to $$$)',
    value: 'priceAsc',
  },
  {
    label: 'Price ($$$ to $)',
    value: 'priceDsc',
  },
  {
    label: 'Name (A to Z)',
    value: 'nameAsc',
  },
  {
    label: 'Name (Z to A)',
    value: 'nameDsc',
  },
]

const ProfileCard = ({
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
  }) => (
  <ProfileCardWrapper isSticky={isSticky}>
    <ProfileCardUpper>
      <ProfileCardTitle>
        {restaurant.name}
      </ProfileCardTitle>
      <ProfileCardSubtitle>
        {restaurant.cuisine} · {restaurant.price} · <a href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.address.street}`} target="blank">{restaurant.address.street}.</a>
      </ProfileCardSubtitle>
      <div>
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
    <ProfileCardLower>
      <ProfileCardIcons>
        <ProfileCardIcon className="material-icons" onClick={() => toggleSearching()}>
          {isSearching
            ?
            'close'
            :
            'search'
          }
        </ProfileCardIcon>
        <ProfileCardIcon className="material-icons" onClick={() => toggleFiltering()}>
          {isFiltering
            ?
            'close'
            :
            'filter_list'
          }
        </ProfileCardIcon>
      </ProfileCardIcons>
      {!isSearching && !isFiltering
        ?
        <div style={{ overflow: 'hidden' }}>
          <ProfileCardSections>
            <PoseGroup key="1" preEnterPose='preEnter'>
              {sections.map((section) =>
                <ProfileCardSection key={section}  active={activeSection === section}>
                  <Link
                    activeClass="active"
                    onClick={() => handleSectionSelect(section)}
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-52}
                    duration={500}
                    onSetActive={() => handleSetActive(section)}
                  >
                      {section}
                    </Link>
                </ProfileCardSection>
              )}
            </PoseGroup>
            <div style={{ width: 16, display: 'inline-flex', minWidth: 16 }}>
            </div>
          </ProfileCardSections>
        </div>

        :
        <Fragment>
          {isSearching &&
            <ProfileCardSearchContainer>
              <ProfileCardSearchInput type="search" placeholder="Search dishes" autoFocus onChange={(e) => handleSearch(e.target.value)}/>
            </ProfileCardSearchContainer>
          }
          {isFiltering &&
            <ProfileCardFilterContainer width={(8*sortOptions[0].label.length)}>
              <Select options={sortOptions} classNamePrefix="profileCardFilterSelect"/>
            </ProfileCardFilterContainer>
          }
        </Fragment>
      }
    </ProfileCardLower>
  </ProfileCardWrapper>
);

export default ProfileCard;
