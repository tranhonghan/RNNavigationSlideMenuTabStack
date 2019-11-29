import React, {Component} from 'react'
import {Text, View, StyleSheet, SafeAreaView, Image, ScrollView} from 'react-native'
import {List, ListItem} from 'native-base'

export class SideMenu extends Component {
    render() {
      let {container, imageUser} = styles;
      return (
        <SafeAreaView style={container}>
          <View style={imageUser}>
            <Image 
            source={require('../image/icon-user-default.png')} 
            style={{height: 120, width: 120, borderRadius: 60}}/>
          </View>
          <ScrollView>
            <List>                   
            <ListItem onPress={() => this.props.navigation.navigate('Setting')}>
              <Text>Setting</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('Profile')}>
              <Text>Profile</Text>
            </ListItem> 
          </List>

          </ScrollView>

            <List>                   
            <ListItem noBorder onPress={() => this.props.navigation.navigate('auth')}>
              <Text>Logout</Text>
            </ListItem> 
          </List>

        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageUser: {
      height: 150, 
      alignItems: 'center', 
      justifyContent: 'center'
    }
})