import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';
import Home from './Shop/Home/Home';
import Header from './Shop/Header';
import homeIconS from '../../media/appIcon/home.png';
// import homeIcon from '../../media/appIcon/home0.png';

export default class Main extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Header
          onOpen={() => navigation.navigate('DrawerOpen')}
        />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={homeIconS}
          style={style.icon}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.gotoAuthentication = this.gotoAuthentication.bind(this);
    this.gotoChangeInfo = this.gotoChangeInfo.bind(this);
    this.gotoOrderHistory = this.gotoOrderHistory.bind(this);
    this.drawerOpen = this.drawerOpen.bind(this);
    this.drawerClose = this.drawerClose.bind(this);
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
  drawerOpen() {
    this.props.navigation.navigate('DrawerOpen');
  }
  drawerClose() {
    this.props.navigation.navigate('DrawerClose');
  }

  render() {
    return (
      <Home />
    );
  }
}

const style = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  }
});

// <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
//   <Text> Main Display </Text>
//   <TouchableOpacity onPress={this.gotoAuthentication}>
//     <Text> Go to Authentication Display </Text>
//   </TouchableOpacity>
//   <TouchableOpacity onPress={this.gotoChangeInfo}>
//     <Text> Go to ChangeInfo Display </Text>
//   </TouchableOpacity>
//   <TouchableOpacity onPress={this.gotoOrderHistory}>
//     <Text> Go to OrderHistory Display </Text>
//   </TouchableOpacity>
// </View>
