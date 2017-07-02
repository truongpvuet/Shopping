import {
  TabNavigator
} from 'react-navigation';
import { StackMain } from '../../../StackMain/StackMain';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';
import Contact from '../Contact/Contact';

export const TabbarNavigation = TabNavigator(
  {
    Home: {
      screen: StackMain
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
    swipeEnabled: true,
    animationEnable: true,
    tabBarOptions: {
      activeTintColor: '#00ffff',
      labelStyle: {
        fontSize: 12
      },
      tabStyle: {
        height: 50
      },
      style: {
        backgroundColor: 'rebeccapurple'
      }
    }
  }
);
