import React from 'react';
import {
  ScrollView
} from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
// import { StackProductDetail } from '../ProductDetail/StackProductDetail';

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.gotoListProduct = this.gotoListProduct.bind(this);
    this.gotoProductDetail = this.gotoProductDetail.bind(this);
  }

  gotoListProduct() {
    const { navigate } = this.props.navigation;
    navigate('ListProduct_Display');
  }
  gotoProductDetail() {
    const { navigate } = this.props.navigation;
    navigate('ProductDetail_Display');
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#DBDBDB' }}>
        <Collection />
        <Category openListProduct={() => this.gotoListProduct()} />
        <TopProduct openProductDetail={() => this.gotoProductDetail()} />
      </ScrollView>
    );
  }
}
// <TouchableOpacity onPress={this.props.onOpen}>
//   <Text> Click to open Drawer </Text>
// </TouchableOpacity>
