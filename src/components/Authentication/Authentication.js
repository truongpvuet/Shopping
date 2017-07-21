import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

StatusBar.setHidden(true);

export default class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: false
    };
    this.goBackToMain = this.goBackToMain.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  goBackToMain() {
    this.props.navigation.goBack();
  }
  signIn() {
    this.setState({ isSignIn: true });
  }
  signUp() {
    this.setState({ isSignIn: false });
  }

  render() {
    const { row1, iconStyle, titleStyle, container, activeStyle,
      controlStyle, signInStyle, signUpStyle, inactiveStyle,
      inputStyle, bigButton, buttonText
    } = styles;

    const signinJSX = (
      <View>
        <TextInput
          style={inputStyle}
          placeholder='Enter your email'
          underlineColorAndroid='transparent'
          placeholderTextColor='#a9a9a9'
        />
        <TextInput
          style={inputStyle}
          placeholder='Enter your password'
          underlineColorAndroid='transparent'
          placeholderTextColor='#a9a9a9'
        />
        <TouchableOpacity style={bigButton}>
          <Text style={buttonText}> SIGN IN NOW </Text>
        </TouchableOpacity>
      </View>
    );
    const signupJSX = (
      <View>
        <TextInput
          style={inputStyle}
          placeholder='Enter your name'
          underlineColorAndroid='transparent'
          placeholderTextColor='#a9a9a9'
        />
        <TextInput
          style={inputStyle}
          placeholder='Enter your email'
          underlineColorAndroid='transparent'
          placeholderTextColor='#a9a9a9'
        />
        <TextInput
          style={inputStyle}
          placeholder='Enter your password'
          underlineColorAndroid='transparent'
          placeholderTextColor='#a9a9a9'
        />
        <TextInput
          style={inputStyle}
          placeholder='Re-enter your password'
          underlineColorAndroid='transparent'
          placeholderTextColor='#a9a9a9'
        />
        <TouchableOpacity style={bigButton}>
          <Text style={buttonText}> SIGN UP NOW </Text>
        </TouchableOpacity>
      </View>
    );
    const { isSignIn } = this.state;
    const mainJSX = isSignIn ? signinJSX : signupJSX;
    const ActiveStyle = isSignIn ? activeStyle : inactiveStyle;
    const InactiveStyle = isSignIn ? inactiveStyle : activeStyle;

    return (
      <View style={container}>
        <View style={row1} >
          <TouchableOpacity onPress={this.goBackToMain}>
            <Image source={icBack} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}> Wearing a Dress </Text>
          <Image source={icLogo} style={iconStyle} />
        </View>

        {mainJSX}

        <View style={controlStyle}>
          <TouchableOpacity style={signInStyle} onPress={this.signIn}>
            <Text style={ActiveStyle}> SIGN IN </Text>
          </TouchableOpacity>
          <TouchableOpacity style={signUpStyle} onPress={this.signUp}>
            <Text style={InactiveStyle}> SIGN UP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EBA77',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  row1: { flexDirection: 'row', justifyContent: 'space-between' },
  titleStyle: { color: '#FFF', fontFamily: 'sans-serif', fontSize: 28, marginHorizontal: 8 },
  iconStyle: { width: 30, height: 30 },
  controlStyle: {
    flexDirection: 'row',
    width: 300
  },
  inactiveStyle: {
    color: '#D7D7D7'
  },
  activeStyle: {
    color: '#3EBA77'
  },
  signInStyle: {
    backgroundColor: '#FFF',
    flex: 1,
    marginRight: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  },
  signUpStyle: {
    backgroundColor: '#FFF',
    flex: 1,
    marginLeft: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20
  },
  inputStyle: {
    height: 50,
    width: 300,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 30
  },
  bigButton: {
    height: 50,
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'sans-serif',
    color: '#FFF',
    fontWeight: '400'
  }
});
// <TouchableOpacity onPress={() => this.goBackToMain()} >
//   <Text> Click to go back </Text>
// </TouchableOpacity>
