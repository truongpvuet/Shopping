import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.gobackHome = this.gobackHome.bind(this);
    this.gotoDetail = this.gotoDetail.bind(this);
  }
  gotoDetail() {
    const { navigate } = this.props.navigation;
    navigate('ProductDetail_Display');
  }
  gobackHome() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    return (
      <View >
        <Text> List product here. </Text>
        <TouchableOpacity
          onPress={() => this.gobackHome()}
        >
          <Text> GO BACK HOME </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.gotoDetail()}
        >
          <Text> GO TO DETAIL </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
