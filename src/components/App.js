import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Drawer } from './Drawer/Drawer';
// <Drawer />
// import Authentication from './Authentication/Authentication';
// <Authentication />

StatusBar.setHidden(true);

export default class App extends React.Component {
  render() {
    return (
      <Drawer />
    );
  }
}
