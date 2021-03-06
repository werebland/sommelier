import React, { Fragment } from 'react';
import styled from 'styled-components';
import _ from 'lodash'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import posed from 'react-pose'

import ItemsList from './ItemsList'

const PosedMenuContainer = posed.article({
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -16,
  },
  preEnter: {
    opacity: 0,
    y: -16,
  }
})

const MenuContainer = styled(PosedMenuContainer)`
  padding-top: 12px;
`;

const Section = styled(Element)`
  padding-bottom: 12px;
`;

const SectionHeader = styled.h3`
  font-size: .875rem;
  font-weight: 700;
  padding-left: 20px;
  box-sizing: border-box;
  margin: 0;
  color: #1f1f1f;
`;

const Menu = ({ items, sections, onItemClick, tag, handleTag, isLoading }) => (
  <MenuContainer>
    {isLoading
      ?
        <span>Loading...</span>
      :
        <Fragment>
          {sections.map((section) =>
            <Section name={section} key={section}>
              <SectionHeader>
                {section}
              </SectionHeader>
              <ItemsList
                items={section === 'Results' ? items : _.filter(items, ['section', section])}
                onItemClick={(id) => onItemClick(id)}
                tag={tag}
                handleTag={(tag) => handleTag(tag)}/>
            </Section>
          )}
        </Fragment>
    }
  </MenuContainer>
);

export default Menu;
