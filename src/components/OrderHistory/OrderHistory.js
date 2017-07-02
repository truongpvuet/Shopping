import React from 'react';
import {
  StatusBar,
  View,
  Text
} from 'react-native';

StatusBar.setHidden(true);

export default class OrderHistory extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <Text> Order History Display </Text>
      </View>
    );
  }
}
