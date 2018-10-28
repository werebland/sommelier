import React, { Component } from 'react';
import styled from 'styled-components';

const SharerWrapper = styled.div`
  width: 100vw;
  height: 240px;
  padding: 16px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  display: flex;
  flex-flow: column nowrap;
`;

const SharerCaption = styled.div`
  width: 100%;
  height: 128px;
  max-height: 128px;
  background: #f7f7f7;
  border-radius: 4px;
  display: flex;
  margin-bottom: 16px;
`;

const SharerCaptionImage = styled.div`
  width: 128px;
  height: 128px;
  background: #9f9f9f;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const SharerCaptionText = styled.p`
  width: 100%;
  height: 128px;
  display: flex;
  flex: 1;
  box-sizing: border-box;
  padding: 8px;
  font-size: .875rem;
  font-weight: 400;
  color: #9f9f9f;
  margin: 0;
`;

const SharerSocialSlider = styled.div`
  width: 100%;
  height: 64px;
  overflow: scroll;
  display: flex;
  flex-flow: row nowrap;
`;

const SharerSocialSlide = styled.a`
  width: 64px;
  height: 64px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: ${props => props.color};
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  margin-right: 16px;

  & svg {
    fill: #fff;
  }
`;

class Sharer extends Component {

  render() {
    return (
      <SharerWrapper>
        <SharerCaption>
          <SharerCaptionImage image={this.props.dish.image} />
          <SharerCaptionText>
            Check out the {this.props.dish.title} at {this.props.restaurant.title}!
          </SharerCaptionText>
        </SharerCaption>
        <SharerSocialSlider>
          <SharerSocialSlide
            onClick={() => this.props.onShare('facebook')}
            href="https://www.facebook.com/dialog/share?app_id=180483749550921&display=popup"
            color='#3B5998'>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </SharerSocialSlide>
          <SharerSocialSlide
            onClick={() => this.props.onShare('twitter')}
            href={`https://twitter.com/intent/tweet?text=Check out the ${this.props.dish.title} at ${this.props.restaurant.title}&url=https%3A%2F%2Fgetsommelier.com%2F${this.props.dish.restaurantUsername}%2F${this.props.dish.id}&via=${this.props.restaurant.twitter}`}
            target="blank"
            color='#00aced'>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </SharerSocialSlide>
          <SharerSocialSlide
            onClick={() => this.props.onShare('email')}
            href={`mailto:`}
            target="blank"
            color='#9f9f9f'>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
            </svg>
          </SharerSocialSlide>
        </SharerSocialSlider>
      </SharerWrapper>
    );
  }

}

export default Sharer;
