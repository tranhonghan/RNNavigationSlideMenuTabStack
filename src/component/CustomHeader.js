import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base'

export class CustomHeader extends Component {
  render() {
      let {title, isHome} = this.props
    return (
      <Container>
        <Header>
          <Left>
          {
            isHome? 
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
            :
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          }
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>
            {/* <Button transparent>
              <Text>Cancel</Text>
            </Button> */}
          </Right>
        </Header>
      </Container>
    );
  }
}