import {
  StackNavigator
} from 'react-navigation';
import React from 'react';
import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';

const SearchStack = StackNavigator(
    {
      ProductDetail_Display: {
        screen: ProductDetail
      },
      Search_Display: {
        screen: SearchView
      }
    },
    {
      initialRouteName: 'Search_Display',
      headerMode: 'none'
    }
);

export default class Search extends React.Component {
  render() {
    return (
      <SearchStack />
    );
  }
}
