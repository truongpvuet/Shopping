import React from 'react';
import {

} from 'react-native';
import Home from './Shop/Home/Home';

import Header from './Shop/Header';

export default class Main extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Header
          onOpen={() => navigation.navigate('DrawerOpen')}
        />
      ),
    };
  };
  // static navigationOptions = {
  //   headerTitle: <Text> Main Display </Text>,
  //   headerStyle: {
  //     backgroundColor: '#00ffff',
  //     height: height / 8,
  //   },
  //   headerLeft: (
  //     <TouchableOpacity
  //       onPress={() => this.props.navigation.navigate('DrawerOpen')}
  //     >
  //       <Text> Open Drawer </Text>
  //     </TouchableOpacity>
  //   ),
  // }

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
      <Home onOpen={() => this.drawerOpen()} />
    );
  }
}

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
