import React from 'react';
import styled from 'styled-components';
import _ from 'lodash'

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
  position: absolute;
  left: 20px;
  top: 95px;
  z-index: 88;
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

const ProfileCardSections = styled.div`
  display: flex;
  flex: 1;
  overflow: scroll;
  flex-flow: row nowrap;
  align-items: center;
`;

const ProfileCardSection = styled.span`
  margin-right: 8px;
  font-size: 1rem;
  font-weight: 400;
  color: ${props => props.active ? '#0f0f0f' : '#9f9f9f'};
  cursor: pointer;
  white-space: pre;
`;

const ProfileCard = ({restaurant, sections, activeSection, handleSectionSelect}) => (
  <ProfileCardWrapper>
    <ProfileCardUpper>
        <ProfileCardTitle>
          {restaurant.name}
        </ProfileCardTitle>
        <ProfileCardSubtitle>
          {restaurant.cuisine} · {restaurant.price} · <a href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.address.street}`} target="blank">{restaurant.address.street}</a>
        </ProfileCardSubtitle>
        <ProfileCardButton
          target="blank"
          href={restaurant.action === "call" ? `tel: ${restaurant.phone}` : restaurant[restaurant.action]}
        >
          {_.upperFirst(restaurant.action)}
        </ProfileCardButton>
    </ProfileCardUpper>
    <ProfileCardLower>
      <ProfileCardIcons>
        <ProfileCardIcon className="material-icons">
          search
        </ProfileCardIcon>
        <ProfileCardIcon className="material-icons">
          filter_list
        </ProfileCardIcon>
      </ProfileCardIcons>
      {sections &&
        <ProfileCardSections>
          <ProfileCardSection onClick={() => handleSectionSelect('')} active={activeSection === ''}>
            All
          </ProfileCardSection>
          {sections.map((section) =>
            <ProfileCardSection key={section} onClick={() => handleSectionSelect(section)} active={activeSection === section}>
              {section}
            </ProfileCardSection>
          )}
          <div style={{ width: 16, display: 'inline-flex', minWidth: 16 }}>
          </div>
        </ProfileCardSections>
      }


    </ProfileCardLower>
  </ProfileCardWrapper>
);

export default ProfileCard;
