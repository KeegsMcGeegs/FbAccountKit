import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon, Button } from 'react-native-elements';

class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Button
          title="LOG IN WITH FACEBOOK"
          buttonStyle={styles.button}
          onPress={() => {this.props.navigation.navigate('facebook')}}
          icon={{name: 'facebook', type: 'font-awesome', color: 'white', size: 20}}
        />
        <Button
          title="LOG IN WITH PHONE NUMBER"
          buttonStyle={styles.button}
          onPress={() => {this.props.navigation.navigate('accountKit')}}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple'
  },
  button: {
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor: 'gray',
    borderColor: 'cyan',
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    width: 300
  }
}

export default AuthScreen;