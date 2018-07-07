import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Ripple from './ripple';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const CENTER_WIDTH = .5 * SCREEN_WIDTH;
const CENTER_HEIGHT = .5 * SCREEN_HEIGHT;

class Loader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Ripple />
        <View>
          <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 60,
            borderColor: 'white',
            borderWidth: 2,
            bottom: 60}}
          source={require('./load.png')} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 100

  }
};

export default Loader;