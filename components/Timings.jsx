import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import moment from 'moment'

const TimingsWrapper = styled.div`
  position: relative;
  display: inline-flex;
  padding: 8px 0 0;
`;

const TimingsCaption = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const TimingsExpandIcon = styled.i`
  display: inline-flex;
`;

const TimingsExpander = styled.div`
  background: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
`;

const TimingsList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  width: 100%;
  list-style: none;
`;

const TimingsListItem = styled.div`
  display: inline-flex;
  font-size: .875rem;
  font-weight: ${props => props.active ? '700' : '500'};
  justify-content: space-between;

  & span:first-of-type {
    margin-right: 24px;
  }
`;

class Timings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    }
  }

  render() {

    const { timings } = this.props
    const now = moment()
    const day = now.format('dddd')
    const timing = timings[day]
    const open = moment(timing.open, ['h:mm A'])
    const close = moment(timing.close, ['h:mm A'])

    return (
      <TimingsWrapper expanded={this.state.expanded}>
        {
          this.state.expanded
          ?
          <TimingsExpander onClick={() => this.setState({ expanded: false })}>
            <TimingsList>
              <TimingsListItem active>
                <span>{day}</span> <span>{timings[day].open} - {timings[day].close}</span>
              </TimingsListItem>
              <TimingsListItem>
                <span>{moment().add(1, 'days').format('dddd')}</span> <span>{timings[moment().add(1, 'days').format('dddd')].open} - {timings[moment().add(1, 'days').format('dddd')].close}</span>
              </TimingsListItem>
              <TimingsListItem>
                <span>{moment().add(2, 'days').format('dddd')}</span> <span>{timings[moment().add(2, 'days').format('dddd')].open} - {timings[moment().add(2, 'days').format('dddd')].close}</span>
              </TimingsListItem>
              <TimingsListItem>
                <span>{moment().add(3, 'days').format('dddd')}</span> <span>{timings[moment().add(3, 'days').format('dddd')].open} - {timings[moment().add(3, 'days').format('dddd')].close}</span>
              </TimingsListItem>
              <TimingsListItem>
                <span>{moment().add(4, 'days').format('dddd')}</span> <span>{timings[moment().add(4, 'days').format('dddd')].open} - {timings[moment().add(4, 'days').format('dddd')].close}</span>
              </TimingsListItem>
              <TimingsListItem>
                <span>{moment().add(5, 'days').format('dddd')}</span> <span>{timings[moment().add(5, 'days').format('dddd')].open} - {timings[moment().add(5, 'days').format('dddd')].close}</span>
              </TimingsListItem>
              <TimingsListItem>
                <span>{moment().add(6, 'days').format('dddd')}</span> <span>{timings[moment().add(6, 'days').format('dddd')].open} - {timings[moment().add(6, 'days').format('dddd')].close}</span>
              </TimingsListItem>
            </TimingsList>
            <TimingsExpandIcon style={{transform: 'rotateX(180deg)'}}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                <path fill="none" d="M0 0h24v24H0V0z"/>
              </svg>
            </TimingsExpandIcon>
          </TimingsExpander>
          :
          <Fragment>
            {moment(now).isBetween(open, close)
              ?
              <TimingsCaption onClick={() => this.setState({ expanded: true })}>
                <span><strong>Open</strong> until {timing.close}</span>
                <TimingsExpandIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                    <path fill="none" d="M0 0h24v24H0V0z"/>
                  </svg>
                </TimingsExpandIcon>
              </TimingsCaption>
              :
              <TimingsCaption onClick={() => this.setState({ expanded: true })}>
                <span><strong>Closed</strong> until {timing.open}</span>
                <TimingsExpandIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                    <path fill="none" d="M0 0h24v24H0V0z"/>
                  </svg>
                </TimingsExpandIcon>
              </TimingsCaption>
            }
          </Fragment>
        }
      </TimingsWrapper>
    );
  }

}

export default Timings;
