import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>SettingsScreen</Text>
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

export default SettingsScreen;