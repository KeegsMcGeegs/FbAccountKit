import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/slides';

const SLIDE_DATA= [
{ text: 'Welcome to this app', color: '#03A9F4'},
{ text: 'this text will be changed', color: '#009688'},
{ text: 'this one too', color: '#03FA62'},
{ text: 'click the button', color: '#03A9F4'}
];

class WelcomeScreen extends Component {

  onSlidesComplete= () => {
    this.props.navigation.navigate('authMain');
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    );

  }

}

export default WelcomeScreen;


