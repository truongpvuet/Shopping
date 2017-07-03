import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { height } = Dimensions.get('window');

export default class Header extends React.Component {

  render() {
    return (
      <View style={{ height: height / 8 }}>
      <TouchableOpacity onPress={this.props.onOpen}>
        <Text> Open Menu </Text>
      </TouchableOpacity>
      </View>
    );
  }
}
