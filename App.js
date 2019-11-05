import React, { Component } from 'react';
import { StyleSheet, Image, View, StatusBar } from 'react-native';

import { NativeRouter, Route } from "react-router-native";

import Intro from './components/intro'
import Frontpage from './components/frontpage'

import TheGame from './components/thegame'

import sky from './assets/pictures/graphic9.png'

export default class App extends Component {

render() {

  return (
    <NativeRouter>
    <View style={styles.cont}>

    <StatusBar barStyle="light-content" />

    <View style={styles.background}>
      <Image style={styles.backgroundimage} source={sky}></Image>
    </View>


    <Route exact path="/" component={Intro} />
    <Route exact path="/" component={Frontpage} />

    <Route path="/frontpage" component={Frontpage} />

    <Route path="/thegame" component={TheGame} />

    </View>
    </NativeRouter>
  );
}

}

const styles = StyleSheet.create({

  cont: {
    height: 896,
    width: 414,
  },

  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    backgroundColor: "#181726",
  },

  backgroundimage: {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -200,
    opacity: 1,
    resizeMode: "cover",
    opacity: 0.2,
  }

 })
