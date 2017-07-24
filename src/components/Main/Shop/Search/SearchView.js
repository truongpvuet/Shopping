import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import searchIconS from '../../../../media/appIcon/search.png';

export default class SearchView extends React.Component {
  static navigationOptions = () => {
    return {
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={searchIconS}
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
        <Text> Search </Text>
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
