import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.gobackHome = this.gobackHome.bind(this);
  }
  gobackHome() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    return (
      <View >
        <Text> Product detail here. </Text>
        <TouchableOpacity
          onPress={() => this.gobackHome()}
        >
          <Text> GO BACK HOME </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
