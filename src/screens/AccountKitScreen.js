import React, { Component } from 'react';
import { View, Text } from 'react-native';


class AccountKitScreen extends Component {

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Screen allows user to sign in with phone number using Facebook Account Kit</Text>
      </View>
    );

  }

}

const styles = {
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    textAlign: 'center',
    fontSize: 18
  }
}

export default AccountKitScreen;