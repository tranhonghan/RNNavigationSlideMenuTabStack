import React, {Component} from 'react'
import { View } from 'react-native'
import {Text, Content } from 'native-base'
import {CustomHeader} from '../../CustomHeader'

export class SearchDetail extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>
        <CustomHeader title="Search Detail" navigation={this.props.navigation}/>
        <Content>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Search Detail Screen</Text>
          </View>
        </Content> 
        </View>
      )
    }
  }