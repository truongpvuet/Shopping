import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import cartIconS from '../../../../media/appIcon/cart.png';
// import cartIcon from '../../../../media/appIcon/cart0.png';

export default class CartView extends React.Component {
  static navigationOptions = () => {
    return {
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={cartIconS}
          style={style.icon}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.gotoProductDetail = this.gotoProductDetail.bind(this);
  }

  gotoProductDetail() {
    const { navigate } = this.props.navigation;
    navigate('ProductDetail_Display');
  }

  render() {
    return (
      <View>
        <Text> Cart </Text>
        <TouchableOpacity onPress={() => this.gotoProductDetail()} >
          <Text> GO TO PRODUCT DETAIL</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  }
});
