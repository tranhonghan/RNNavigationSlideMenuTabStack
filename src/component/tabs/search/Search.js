import React, {Component} from 'react'
import { View } from 'react-native'
import {Text, Content, Button } from 'native-base'
import {CustomHeader} from '../../CustomHeader'

export class Search extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>
        <CustomHeader isHome={true} title="Search" navigation={this.props.navigation}/>
        <Content>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text> Search Screen </Text>
          <Button light onPress={() => this.props.navigation.navigate('SearchDetail')}>
            <Text> Go to Search Detail</Text>
          </Button>
          </View>
        </Content>   
        </View>
      );
    }
  }