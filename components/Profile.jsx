import React from 'react';
import styled from 'styled-components';

import ProfileCard from './ProfileCard'

const ProfileWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: #f0f0f0;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
    background: rgba(0,0,0,.32);
  }
`;

const ProfileContent = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex-flow: column nowrap;
  text-align: right;
  z-index: 4;
`;

const ProfileTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  display: inline-flex;
`;

const ProfileSubtitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;

  & a {
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
  }
`;

const Profile = ({name, cuisine, priceRange, image, address}) => (
  <ProfileWrapper image={image}>
  </ProfileWrapper>
);

export default Profile;
