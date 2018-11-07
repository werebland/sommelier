import React, { Component } from 'react';
import styled from 'styled-components';
import Head from 'next/head'
import base from '../config'
import firestore from 'firebase/firestore'

const PageWrapper = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 16px;
  box-sizing: border-box;
`;

const ItemWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #f7f7f7;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
`;

const ItemImage = styled.div`
  width: 100%;
  height: calc((100vw - 32px)/1.77777);
  display: flex;
  background: #9f9f9f;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const ItemContent = styled.div`
  padding: 16px;
  box-sizing: border-box;
`;

const ItemTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f0f0f;
  margin: 0 0 4px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ItemSubtitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #9f9f9f;
  margin: 0 0 16px 0;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #9f9f9f;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

class Item extends Component {

  static async getInitialProps({ query }) {
    const { username, itemId } = query
    console.log('items/2tyhLli5kEi2RZjAJNou');
    let item = await base.get('items/2tyhLli5kEi2RZjAJNou', {
      context: this,
      withIds: true,
    }).then(data => {
      console.log(data);
      return data
    }).catch(err => {
      console.log(err);
    })
    return { item,  query }
  }

  render() {
    return (
      <PageWrapper>
        <Head>
          <title>{this.props.item.name}</title>
          <meta property="og:url" content={`https://bland-sommelier.herokuapp.com/${this.props.item.restaurantUsername}/${this.props.item.id}`} />
          <meta property="og:title" content={this.props.item.name} />
          <meta property="og:description" content={this.props.item.description} />
          <meta property="og:image" content={this.props.item.image} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <ItemWrapper>
          <ItemImage image={this.props.item.image}/>
          <ItemContent>
            <ItemTitle>
              {this.props.item.name}
              <span>${this.props.item.price}</span>
            </ItemTitle>
            <ItemSubtitle>
              {this.props.item.section} · {this.props.item.type}
            </ItemSubtitle>
            <ItemDescription>
              {this.props.item.description}
            </ItemDescription>
          </ItemContent>
        </ItemWrapper>
      </PageWrapper>
    );
  }

}

export default Item;
