import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import moment from 'moment-timezone'

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
  align-items: flex-end;
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
      isOpen: true,
    }
  }

  componentDidMount() {
    this.handleStatus()
  }

  handleStatus() {
  const { timings, offset } = this.props
  const day = moment().format('dddd')
  const tmz = 'America/Halifax'
  const format = 'HH:mm a'
  const time = moment();
  const timing = timings[day]

  //it is simulated hour after midnight, but you can try with any time
  let now = new Date();
  let openTime = moment.tz(timing.open, format, tmz);
  let closeTime = moment.tz(timing.close, format, tmz);
  if (timing.isOpen) {
    if(openTime.isBefore(closeTime)) {
        //normal case
        let isOpen = moment().isBetween(openTime, closeTime, null, "[]");
        this.setState({
          isOpen
        })
    } else {
        /**
         * First: Note how open and close times switched places
         * Second: the ! in the boolean. If the time is between close and open time, it means the opposite, which is out of range.
         */
        let isOpen = !moment(now).isBetween(closeTime, openTime, null, "[]");
        this.setState({
          isOpen
        })
    }
  } else {
    this.setState({
      isOpen: false
    })
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
                <span>{day}</span>
                {timings[day].isOpen
                  ?
                  <span>{timings[day].open} - {timings[day].close}</span>
                  :
                  <span>Closed</span>
                }
              </TimingsListItem>
              <TimingsListItem>
                <span>{moment().add(1, 'days').format('dddd')}</span>
                {timings[moment().add(1, 'days').format('dddd')].isOpen
                  ?
                  <span>{timings[moment().add(1, 'days').format('dddd')].open} - {timings[moment().add(1, 'days').format('dddd')].close}</span>
                  :
                  <span>Closed</span>
                }
              </TimingsListItem>
              <TimingsListItem>
                <span>{moment().add(2, 'days').format('dddd')}</span>
                {timings[moment().add(2, 'days').format('dddd')].isOpen
                  ?
                  <span>{timings[moment().add(2, 'days').format('dddd')].open} - {timings[moment().add(2, 'days').format('dddd')].close}</span>
                  :
                  <span>Closed</span>
                }
              </TimingsListItem>
              <TimingsListItem>
                <span>{moment().add(3, 'days').format('dddd')}</span>
                {timings[moment().add(3, 'days').format('dddd')].isOpen
                  ?
                  <span>{timings[moment().add(3, 'days').format('dddd')].open} - {timings[moment().add(3, 'days').format('dddd')].close}</span>
                  :
                  <span>Closed</span>
                }
              </TimingsListItem>
              <TimingsListItem>
                <span>{moment().add(4, 'days').format('dddd')}</span>
                {timings[moment().add(4, 'days').format('dddd')].isOpen
                  ?
                  <span>{timings[moment().add(4, 'days').format('dddd')].open} - {timings[moment().add(4, 'days').format('dddd')].close}</span>
                  :
                  <span>Closed</span>
                }
              </TimingsListItem>
              <TimingsListItem>
                <span>{moment().add(5, 'days').format('dddd')}</span>
                {timings[moment().add(5, 'days').format('dddd')].isOpen
                  ?
                  <span>{timings[moment().add(5, 'days').format('dddd')].open} - {timings[moment().add(5, 'days').format('dddd')].close}</span>
                  :
                  <span>Closed</span>
                }
              </TimingsListItem>
              <TimingsListItem>
                <span>{moment().add(6, 'days').format('dddd')}</span>
                {timings[moment().add(6, 'days').format('dddd')].isOpen
                  ?
                  <span>{timings[moment().add(6, 'days').format('dddd')].open} - {timings[moment().add(6, 'days').format('dddd')].close}</span>
                  :
                  <span>Closed</span>
                }
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
            {this.state.isOpen
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
                <span><strong>Closed</strong> until {timings[moment().add(1, 'days').format('dddd')].open}</span>
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
