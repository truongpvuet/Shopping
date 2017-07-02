import React from 'react';
import {
  StatusBar,
  View,
  Text
} from 'react-native';

StatusBar.setHidden(true);

export default class Authentication extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <Text> Authentication Display </Text>
      </View>
    );
  }
}
