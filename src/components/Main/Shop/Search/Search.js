import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import searchIconS from '../../../../media/appIcon/search.png';

export default class Contact extends React.Component {
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

  render() {
    return (
      <View>
        <Text> Contact </Text>
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
