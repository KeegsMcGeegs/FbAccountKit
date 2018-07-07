import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import {createBottomTabNavigator,
        createStackNavigator,
        createMaterialTopTabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import UserScreen from './src/screens/UserScreen';
import DeckScreen from './src/screens/DeckScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import FacebookScreen from './src/screens/FacebookScreen';
import AccountKitScreen from './src/screens/AccountKitScreen';

export default class App extends React.Component {

  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      authMain: { screen: createStackNavigator({
          auth: { screen: AuthScreen,
             navigationOptions:{
               header: null
             }
           },
          facebook: {screen: FacebookScreen },
          accountKit: {screen: AccountKitScreen}
        })
      },
      main: {
        screen: createMaterialTopTabNavigator({
          Deck:{screen: DeckScreen,
            navigationOptions:{
              tabBarLabel:'Deck',
              tabBarIcon: ({tintColor}) => (
                <Icon name="book" type="font-awesome" color={tintColor} size={24} />
              )
            }
          },
          UserMain: {screen: createStackNavigator({
            User: {screen: UserScreen,
              navigationOptions: {
                header: null
              }
            },
            Settings: {screen: SettingsScreen}
          }),
          navigationOptions:{
            tabBarLabel:'User',
            tabBarIcon: ({tintColor}) => (
              <Icon name="user" type="font-awesome" color={tintColor} size={24} />
            )
          }},
          Review: {screen: ReviewScreen,
            navigationOptions:{
              tabBarLabel:'Review',
              tabBarIcon: ({tintColor}) => (
                <Icon name="heart" type="font-awesome" color={tintColor} size={24} />
              )
            }
          }
        },
        {
          initialRouteName: 'UserMain',
          order: ['UserMain', 'Deck', 'Review' ],
          swipeEnabled: false,
          tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
            style: {
              backgroundColor: '#ffffff',
              borderBottomWidth: -1

            },
            indicatorStyle: {
              height: 0
            },
            showIcon: true,
            showLabel: false
          }

        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: true
      }
    });

    return (
      <SafeAreaView style={styles.container}>
          <MainNavigator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});