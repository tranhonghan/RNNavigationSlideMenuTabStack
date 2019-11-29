import React, {Component} from 'react'
import { View } from 'react-native'
import {Button, Text, Content } from 'native-base'
import {CustomHeader} from '../../CustomHeader'

export class Feed extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>
        <CustomHeader isHome={true} title="Feed" navigation={this.props.navigation}/>
        <Content>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text> Feed Screen </Text>
          <Button light onPress={() => this.props.navigation.navigate('FeedDetail')}>
            <Text> Go to Feed Detail</Text>
          </Button>
          </View>
        </Content>      
        </View>
      );
    }
  }