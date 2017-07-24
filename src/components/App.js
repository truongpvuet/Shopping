import React from 'react';
import {
  StatusBar,
} from 'react-native';

import { Drawer } from './Drawer/Drawer';
// <Drawer />
// import { StackProductDetail } from './StackMain/StackProductDetail';

StatusBar.setHidden(true);

export default class App extends React.Component {
  render() {
    return (
      <Drawer />
    );
  }
}
