import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
//import VolumeBalok from './src/latihan/VolumeBalok.js';
import Header from  './src/cuaca/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={style.containerMain}>
        <Header HeaderText={'PrakiraanCuaca'}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  containerMain: {
    flex: 1,
  }
});
