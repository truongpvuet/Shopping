import React from 'react';
import {
  ScrollView
  // Text,
  // TouchableOpacity
} from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class Home extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#DBDBDB' }}>
        <Collection />
        <Category />
        <TopProduct />
      </ScrollView>
    );
  }
}
// <TouchableOpacity onPress={this.props.onOpen}>
//   <Text> Click to open Drawer </Text>
// </TouchableOpacity>
