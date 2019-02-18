import React, { Component } from 'react';
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose'
import { Link } from 'react-scroll'
import smoothscroll from 'smoothscroll-polyfill';

const PosedProfileCardSections = posed.div({
  enter: {
    staggerChildren: 300
  }
})

const ProfileCardSections = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  flex: 1;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: -50px;
  padding-bottom: 50px;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
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

class SectionsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.sectionsRef = React.createRef()
  }

  componentDidMount() {
    smoothscroll.polyfill();
  }

  processSetActive(section, i) {
    const container = this.sectionsRef.current
    const activeSection = this.refCollection[i].current
    const initialOffset = this.refCollection[0].current.offsetLeft
    container.scrollLeft = activeSection.offsetLeft - initialOffset
    this.props.handleSetActive(section)
  }

  refCollection = {}

  render() {
    const { sections, activeSection, handleSetActive, visible } = this.props

    return (
      <div style={{ overflow: 'hidden' }}>
        <ProfileCardSections ref={this.sectionsRef} visible={visible}>
          <PoseGroup key="1" preEnterPose='preEnter'>
            {sections.map((section, i) =>
              {
                this.refCollection[i] = React.createRef();
                return (
              <div key={section} ref={this.refCollection[i]}>
                <ProfileCardSection key={section} active={activeSection === section} >
                  <Link
                    activeClass="active"
                    onClick={() => handleSetActive(section)}
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-52}
                    duration={500}
                    onSetActive={() => this.processSetActive(section, i)}
                  >
                      {section}
                    </Link>
                </ProfileCardSection>
              </div>
            )
          }

            )}
          </PoseGroup>
          <div style={{ width: 16, display: 'inline-flex', minWidth: 16 }}>
          </div>
        </ProfileCardSections>
      </div>
    );
  }

}

export default SectionsMenu;
