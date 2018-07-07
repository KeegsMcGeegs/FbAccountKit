import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class UserScreen extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>UserScreen</Text>
        <Button
          onPress={() => {this.props.navigation.navigate('Settings')}}
          title="Settings"
        />
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

export default UserScreen;