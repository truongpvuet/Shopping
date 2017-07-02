/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './src/components/App.js';

class Shopping extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <App />
      </View>
    );
  }
}

export default Shopping;
AppRegistry.registerComponent('Shopping', () => Shopping);
