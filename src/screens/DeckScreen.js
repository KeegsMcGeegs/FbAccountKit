import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Loader from '../components/loader/loader';

class DeckScreen extends Component {
  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <View >
          <Loader />
        </View>
        <View>
          <Text style={styles.text}>No more near you</Text>
        </View>
      </View>
    );

  }

}

const styles = {
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 50,
    paddingLeft: 20,
    color: 'steelblue',
    fontFamily: 'ChalkboardSE-Bold'
  }
};

export default DeckScreen;


