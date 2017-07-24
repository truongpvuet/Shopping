import {
  StackNavigator
} from 'react-navigation';
import React from 'react';
import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

const HomeStack = StackNavigator(
    {
      ProductDetail_Display: {
        screen: ProductDetail
      },
      ListProduct_Display: {
        screen: ListProduct
      },
      Home_Display: {
        screen: HomeView
      }
    },
    {
      initialRouteName: 'Home_Display',
      headerMode: 'none'
    }
);

export default class Home extends React.Component {
  render() {
    return (
      <HomeStack />
    );
  }
}

// <TouchableOpacity onPress={this.props.onOpen}>
//   <Text> Click to open Drawer </Text>
// </TouchableOpacity>
// ProductDetail_Display
