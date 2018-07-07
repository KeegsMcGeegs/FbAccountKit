import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Platform
} from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH= Dimensions.get('window').width;

class Slides extends Component {

  renderLastSlide(index) {
    if( index === this.props.data.length -1){
      return(
        <Button
          title="Sign Up Now"
          raised
          buttonStyle={styles.button}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return(
        <View
          key={slide.text}
          style={
            [styles.slide,
            {backgroundColor: slide.color}]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    })
  }

  render() {
    return (
      <ScrollView
        horizontal
        style= {{ flex: 1}}
        pagingEnabled
        showsHorizontalScrollIndicator= {false}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles= {
  slide: {
    width: SCREEN_WIDTH,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: Platform.OS === 'android' ? 3 : 0
  },
  slideText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 15
  },
  button: {
    backgroundColor: '#0288D1'
  }
};

export default Slides;