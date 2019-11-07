import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

import * as Animatable from 'react-native-animatable';

import * as Font from 'expo-font';



const animLeft = {
  from: {
    left: 0+"%",
  },
  to: {
    left: -100+"%",
    
  },

  
};


export default class Intro extends Component {

  constructor() {
    super ()

    this.state = {
      fontLoaded: false,
      left: 0
    }

    

  }

okButton = () => {
  
  var container = this.refs.container;
  var button = this.refs.button;

  button.animate("bounceIn");

  setTimeout(() => {
    container.animate(animLeft)
  }, 650);

  

}




 async componentDidMount() {

   await Font.loadAsync({
      'Mansalva': require('../assets/fonts/Mansalva-Regular.ttf'),
      'Archivo': require('../assets/fonts/Archivo-Regular.ttf'),
    });

    this.setState({
      fontLoaded: true
    })
    


  }

  render() {

  return (

    

    <Animatable.View duration={800} ref="container" style={styles.container} >

    {this.state.fontLoaded ? (

    <Animatable.View duration={800} animation="fadeIn">
      
      <Text style={styles.welcome}>Welcome!</Text>
      

      <Text style={styles.introtext}>Headphones are recommended.</Text>
      <Text style={styles.introtext}>ASMR Memory Game is free because of ads!</Text>
      <Text style={styles.introtext}>Please enjoy!</Text>
      

     </Animatable.View>

     ) : null}

     {this.state.fontLoaded ? (

      <TouchableWithoutFeedback onPress={this.okButton}>
      <Animatable.View animation="fadeIn" ref="button" duration={800} style={styles.okbutton} >
      <Text style={styles.okbutton2}>OK</Text>
      </Animatable.View>
      </TouchableWithoutFeedback>

      ) : null}



    </Animatable.View>

    

  );
}

}

var number = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181726',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    height: '100%',
    padding: 10,
  },

  welcome: {
    color: '#abe1fa',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: 'Mansalva'
  },

  introtext: {
    color: '#abe1fa',
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 15,
    fontFamily: 'Archivo',
    lineHeight: 20
  },

  okbutton: {
    backgroundColor: "#ed6062",
    
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 5,
    marginTop: 20
  },

  okbutton2: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold'
  }


});