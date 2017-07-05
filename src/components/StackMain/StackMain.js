import {
  StackNavigator
} from 'react-navigation';
import Main from '../Main/Main';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';


export const StackMain = StackNavigator(
  {
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
    },
    Main_Display: {
      screen: Main,
    },
  },
  {
    initialRouteName: 'Main_Display'
  }
);
