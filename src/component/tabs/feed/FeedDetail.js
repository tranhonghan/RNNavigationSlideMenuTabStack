import React, {Component} from 'react'
import { View } from 'react-native'
import {Text, Content, Button } from 'native-base'
import {CustomHeader} from '../../CustomHeader'

export class FeedDetail extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>
        <CustomHeader title="Feed Detail" navigation={this.props.navigation}/>
        <Content>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Feed Detail Screen</Text>
          </View>
        </Content>      
        </View>
      );
    }
  }
