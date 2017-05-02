import React, { Component } from 'react';
import {
  View,
  Animated
} from 'react-native';

export class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 20, y: 50 }
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()} >
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 30,
    width: 30,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
};