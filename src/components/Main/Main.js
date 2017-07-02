import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
import Shop from './Shop/Shop';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.gotoAuthentication = this.gotoAuthentication.bind(this);
    this.gotoChangeInfo = this.gotoChangeInfo.bind(this);
    this.gotoOrderHistory = this.gotoOrderHistory.bind(this);
  }

  gotoAuthentication() {
    this.props.navigation.navigate('Authentication_Display');
  }
  gotoChangeInfo() {
    this.props.navigation.navigate('ChangeInfo_Display');
  }
  gotoOrderHistory() {
    this.props.navigation.navigate('OrderHistory_Display');
  }

  render() {
    return (
      <Shop />
    );
  }
}

// <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
//   <Text> Main Display </Text>
//   <TouchableOpacity onPress={this.gotoAuthentication}>
//     <Text> Go to Authentication Display </Text>
//   </TouchableOpacity>
//   <TouchableOpacity onPress={this.gotoChangeInfo}>
//     <Text> Go to ChangeInfo Display </Text>
//   </TouchableOpacity>
//   <TouchableOpacity onPress={this.gotoOrderHistory}>
//     <Text> Go to OrderHistory Display </Text>
//   </TouchableOpacity>
// </View>
