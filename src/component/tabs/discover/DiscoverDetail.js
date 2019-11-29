import React, {Component} from 'react'
import { View } from 'react-native'
import {Text, Content, Button } from 'native-base'
import {CustomHeader} from '../../CustomHeader'

export class DiscoverDetail extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>
         <CustomHeader title="Discover Detail" navigation={this.props.navigation}/>
         <Content>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Discover Detail Screen</Text>
          </View>
        </Content> 
        </View>
      );
    }
  }