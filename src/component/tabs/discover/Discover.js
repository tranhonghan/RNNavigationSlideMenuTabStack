import React, {Component} from 'react'
import { View } from 'react-native'
import {Text, Content, Button } from 'native-base'
import {CustomHeader} from '../../CustomHeader'

export class Discover extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>
        <CustomHeader isHome={true} title="Discover" navigation={this.props.navigation}/>
        <Content>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text> Discover Screen </Text>
          <Button light onPress={() => this.props.navigation.navigate('DiscoverDetail')}>
            <Text> Go to Discover Detail</Text>
          </Button>
          </View>
        </Content>   
        </View>
      );
    }
  }