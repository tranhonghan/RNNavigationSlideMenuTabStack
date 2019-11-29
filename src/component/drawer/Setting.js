import React, {Component} from 'react'
import { View } from 'react-native'
import {Text, Content } from 'native-base'
import {CustomHeader} from '../CustomHeader'

export class Setting extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>
        <CustomHeader title="Settings" navigation={this.props.navigation}/>
         <Content>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Settings Screen</Text>
          </View>
        </Content> 
        </View>
      );
    }
  }