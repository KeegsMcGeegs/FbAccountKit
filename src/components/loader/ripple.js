import React, { Component } from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const CENTER_WIDTH = .5 * SCREEN_WIDTH;
const CENTER_HEIGHT = .5 * SCREEN_HEIGHT;

class Ripple extends Component {

  state = {
    animated:new Animated.Value(0),
    opacityA:new Animated.Value(1),
  }

  componentDidMount() {
    const {animated, opacityA} = this.state;

    Animated.loop(
      Animated.parallel([
        Animated.timing(animated,{
          toValue: 3,
          duration:2000
        }),
        Animated.timing(opacityA,{
          toValue: 0,
          duration:2000
        })
      ])

    ).start()
  }

  render() {
    const {animated, opacityA} =this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          borderColor: 'cyan',
          borderWidth: 1,
          opacity: opacityA,
          backgroundColor: 'rgba(153,0,0,0.4)',
          transform: [
            {
              scale: animated
            }
          ]
        }}
        >
        </Animated.View>
      </View>

    );
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: CENTER_HEIGHT
  }
})

export default Ripple;