import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import profileIcon from '../../media/temp/profile.png';

// componentDidMount() {
//   this.props.navigation.navigate('DrawerOpen');
// }
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.gotoAuthentication = this.gotoAuthentication.bind(this);
    this.gotoChangeInfo = this.gotoChangeInfo.bind(this);
    this.gotoOrderHistory = this.gotoOrderHistory.bind(this);
    this.state = {
      isLoggedIn: false
    };
  }

  gotoAuthentication() {
    this.props.navigation.navigate('Authentication_Display');
  }
  gotoChangeInfo() {
    this.props.navigation.navigate('ChangeInfo_Display');
  }
  gotoOrderHistory() {
    this.props.navigation.navigate('OrderHistory_Display');
  }

  render() {
    const { container, profile, btnStyle, username,
      btnText, btnSignInStyle, btnTextSignIn, loginContainer
    } = styles;
    const logoutJSX = (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={btnStyle}
          onPress={() => { this.props.navigation.navigate('Authentication_Display') }}
        >
          <Text style={btnText}> SIGN IN </Text>
        </TouchableOpacity>
      </View>
    );
    const loginJSX = (
      <View style={loginContainer}>
        <Text style={username}>
          Truong Pham Van
        </Text>
        <View>
          <TouchableOpacity
            style={btnSignInStyle}
            onPress={() => { this.props.navigation.navigate('OrderHistory_Display') }}
          >
            <Text style={btnTextSignIn}> Order History </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={btnSignInStyle}
            onPress={() => { this.props.navigation.navigate('ChangeInfo_Display') }}
          >
            <Text style={btnTextSignIn}> Change Info </Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle} >
            <Text style={btnTextSignIn}> Sign out </Text>
          </TouchableOpacity>
        </View>
        <View />
      </View>
    );
    const checkJSX = this.state.isLoggedIn ? loginJSX : logoutJSX;
    return (
      <View style={container}>
        <Image source={profileIcon} style={profile} />
        { checkJSX }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    borderRightWidth: 3,
    borderColor: '#fff',
    alignItems: 'center'
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
    marginVertical: 30
  },
  btnStyle: {
    height: 50,
    paddingHorizontal: 70,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#34B089',
    fontFamily: 'Cochin',
    fontSize: 20
  },
  btnSignInStyle: {
    height: 50,
    width: 200,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10
  },
  btnTextSignIn: {
    color: '#34B089',
    fontFamily: 'Cochin',
    fontSize: 15
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  username: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Cochin'
  }
});
