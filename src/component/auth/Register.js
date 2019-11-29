import React, {Component} from 'react'
import { View } from 'react-native'
import {Text, Content } from 'native-base'
import {CustomHeader} from '../CustomHeader'

export class Register extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>
        <CustomHeader title="Register" navigation={this.props.navigation}/>
         <Content>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Register Screen</Text>
          </View>
        </Content> 
        </View>
      );
    }
  }