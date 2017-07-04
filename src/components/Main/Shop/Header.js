import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet
} from 'react-native';
import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends React.Component {
  render() {
    const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
    return (
      <View style={wrapper}>

        <View style={row1} >
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image source={icMenu} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}> Wearing a Dress </Text>
          <Image source={icLogo} style={iconStyle} />
        </View>

        <TextInput
          style={textInput}
          underlineColorAndroid='transparent'
          placeholder="What do you want to buy"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height / 8,
    backgroundColor: '#34B089',
    padding: 10,
    justifyContent: 'space-around'
  },
  row1: { flexDirection: 'row', justifyContent: 'space-between' },
  textInput: { height: height / 23, backgroundColor: '#FFF', padding: 0, paddingHorizontal: 10 },
  titleStyle: { color: '#FFF', fontFamily: 'Cochin', fontSize: 20 },
  iconStyle: { width: 25, height: 25 }
});
// <TouchableOpacity onPress={this.props.onOpen}>
//   <Text> Open Menu </Text>
// </TouchableOpacity>
