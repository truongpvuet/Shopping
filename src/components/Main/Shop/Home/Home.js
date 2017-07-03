import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'palegreen' }}>
        <Text> Tab Shop -> Home </Text>
        <TouchableOpacity onPress={this.props.onOpen}>
          <Text> Click to open Drawer </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
