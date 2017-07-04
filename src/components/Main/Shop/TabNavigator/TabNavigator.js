import {
  TabNavigator
} from 'react-navigation';
// import { Image } from 'react-native';
import { StackMain } from '../../../StackMain/StackMain';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';
import Contact from '../Contact/Contact';
// import homeIcon from '../../../../media/appIcon/home0.png';

export const TabbarNavigation = TabNavigator(
  {
    Home: {
      screen: StackMain,
    },
    Cart: {
      screen: Cart
    },
    Search: {
      screen: Search
    },
    Contact: {
      screen: Contact
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'rgb(37,167,138)',
      inactiveTintColor: 'rgb(224,223,222)',
      labelStyle: {
        fontSize: 10,
        color: 'rgb(37,167,138)',
      },
      tabStyle: {
        height: 43,
      },
      style: {
        paddingTop: 15,
        backgroundColor: 'rgb(247,247,247)'
      }
    }
  }
);
