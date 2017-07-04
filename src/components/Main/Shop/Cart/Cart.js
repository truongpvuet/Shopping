import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import cartIconS from '../../../../media/appIcon/cart.png';
// import cartIcon from '../../../../media/appIcon/cart0.png';

export default class Cart extends React.Component {
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

  render() {
    return (
      <View>
        <Text> Cart </Text>
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
