import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import contactIconS from '../../../../media/appIcon/contact.png';

export default class Contact extends React.Component {
  static navigationOptions = () => {
    return {
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={contactIconS}
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
