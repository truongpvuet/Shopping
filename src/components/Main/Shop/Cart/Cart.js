import {
  StackNavigator
} from 'react-navigation';
import React from 'react';
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';

const CartStack = StackNavigator(
    {
      ProductDetail_Display: {
        screen: ProductDetail
      },
      Cart_Display: {
        screen: CartView
      }
    },
    {
      initialRouteName: 'Cart_Display',
      headerMode: 'none'
    }
);

export default class Cart extends React.Component {
  render() {
    return (
      <CartStack />
    );
  }
}
