import React, {Component} from 'react'
import { View } from 'react-native'
import {Text, Button} from 'native-base'

export class Login extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Login Screen</Text>
         <Button style={{marginTop: 10}} light onPress={() => this.props.navigation.navigate('app')}>
            <Text> Login</Text>
          </Button>
          <Button style={{marginTop: 10}} light onPress={() => this.props.navigation.navigate('Register')}>
            <Text> Register</Text>
          </Button>
        </View>
      );
    }
  }