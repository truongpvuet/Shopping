import React from 'react';
import {
  StatusBar,
  View,
  Text
} from 'react-native';

StatusBar.setHidden(true);

export default class ChangeInfor extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'burlywood' }}>
        <Text> Authentication Display </Text>
      </View>
    );
  }
}
