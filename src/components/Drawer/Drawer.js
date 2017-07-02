import React from 'react';

import { DrawerNavigator } from 'react-navigation';
import { TabbarNavigation } from '../Main/Shop/TabNavigator/TabNavigator';
import Menu from '../Main/Menu';

export const Drawer = DrawerNavigator(
  {
    Home: {
      screen: TabbarNavigation
    }
  },
  {
    drawerWidth: 270,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
  }
);
