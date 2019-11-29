import React, {Component} from 'react'
import { Dimensions, Image } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import {
  Feed, FeedDetail, Search, SearchDetail, Discover, 
  DiscoverDetail, Profile, Register, Login, Setting, SideMenu} from './src/component'

const navOptionHandler = (navigation) => ({
    header: null
    // gesturesEnabled: false
})

  const FeedStack = createStackNavigator({
    Feed: {
      screen: Feed,
      navigationOptions: navOptionHandler
    },
    FeedDetail: {
      screen: FeedDetail,
      navigationOptions: navOptionHandler
    }
  });
  
  const SearchStack = createStackNavigator({
    Search: {
      screen: Search,
      navigationOptions: navOptionHandler
    },
    SearchDetail: {
      screen: SearchDetail,
      navigationOptions: navOptionHandler
    }
  });
  
  const DiscoverStack = createStackNavigator({
    Discover: {
      screen: Discover,
      navigationOptions: navOptionHandler
    },
    DiscoverDetail: {
      screen: DiscoverDetail,
      navigationOptions: navOptionHandler
    }
  });

  const MainTabs = createBottomTabNavigator({
    Feed: {
      screen: FeedStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./src/image/icon-picture.png')}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
        )
      }
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Image
              source={require('./src/image/icon-picture.png')}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
        )
      }
    },
    Discover: {
      screen: DiscoverStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./src/image/icon-picture.png')}
            resizeMode="contain"
            style={{width: 20, height: 20}}
        />
        )
      }
    }
  });

  const authStack = createStackNavigator({
      Login: {
          screen: Login,
          navigationOptions: navOptionHandler
      },
      Register: {
          screen: Register,
          navigationOptions: navOptionHandler
      }
  })

  const MainStack = createStackNavigator({
    Home: {
        screen: MainTabs,
        navigationOptions: navOptionHandler
    },
    Setting: {
        screen: Setting,
        navigationOptions: navOptionHandler
      },
    Profile: {
        screen: Profile,
        navigationOptions: navOptionHandler
      }
  },
  {
    initialRouteName: 'Home'
  });
  
  const appDrawer = createDrawerNavigator(
    {
        drawer: MainStack
    },
    {
        contentComponent: SideMenu,
        drawerWidth: (Dimensions.get('window').width) * 3/4
    });

    const app = createSwitchNavigator(
    {
        app: appDrawer,
        auth: authStack
    }, 
    {
        initialRouteName: 'auth'
    })

    export default class App extends Component {
      render() {
        const AppNavigator = createAppContainer(app);
        return (
            <AppNavigator/>
        )
      }
    }
