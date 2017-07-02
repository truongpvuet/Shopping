import React from 'react';
import {
  Button,
  Text,
  Dimensions
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import Main from '../Main/Main';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';

const { height, width } = Dimensions.get('window');

export const StackMain = StackNavigator(
  {
    Main_Display: {
      screen: Main,
      navigationOptions: {
        headerTitle: <Text style={{ margin: 100 }}> Main Display </Text>,
        headerStyle: {
          backgroundColor: '#00ffff',
          height: height / 8,
          width
        },
        headerLeft: <Button title="Learn" color="#841584" />
      }
    },
    Authentication_Display: {
      screen: Authentication,
      navigationOptions: {
        title: 'Authentication Display',
        headerStyle: {
          backgroundColor: '#00ffff'
        }
      }
    },
    ChangeInfo_Display: {
      screen: ChangeInfo,
      navigationOptions: {
        title: 'ChangeInfo Display',
        headerStyle: {
          backgroundColor: '#00ffff'
        }
      }
    },
    OrderHistory_Display: {
      screen: OrderHistory,
      navigationOptions: {
        title: 'OrderHistory Display',
        headerStyle: {
          backgroundColor: '#00ffff'
        }
      }
    }
  }
);
