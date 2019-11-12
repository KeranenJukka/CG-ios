import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Linking} from 'react-native';


import * as Font from 'expo-font';

import * as Animatable from 'react-native-animatable';



export default class Frontpage extends Component {


  constructor() {
    super ()

    this.state = {
      fontLoaded: false,
      
    }

    this.working = "no"
    this.working2 = "no";

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



   info = (e) => {

    

    var button = this.refs.info;
    var screen = this.refs.infoscreen;
    

    if (e === "on") {

    if (this.working === "on") {return null}
    this.working = "on";

    button.animate("bounceIn")

    var right = {
        from: {
          right: -100+"%",
        },
        to: {
          right: 0+"%",
        },
      };

      setTimeout(() => {
        screen.animate(right);
      }, 650);

    }

    else if (e === "off") {

      this.working = "off";

      var but = this.refs.infobutton;

      but.animate("bounceIn");

      var left = {
        from: {
          right: 0+"%",
        },
        to: {
          right: -100+"%",
        },
      };

     setTimeout(() => {
      screen.animate(left);
     }, 650);

    
      

    }

   }

   instructions  = (e) => {
      
    

      var button = this.refs.instructions;
      var screen = this.refs.instructionsscreen;


      if (e === "on") {

        if (this.working === "on") {return null}
        this.working = "on";

        button.animate("bounceIn");

        var right = {
          from: {
            right: -100+"%",
          },
          to: {
            right: 0+"%",
          },
        };

        setTimeout(() => {
          screen.animate(right);
        }, 650);

      }

      else if (e === "off") {

        this.working = "off";

        var but = this.refs.instructionsbutton;

        but.animate("bounceIn");

        var left = {
          from: {
            right: 0+"%",
          },
          to: {
            right: -100+"%",
          },
        };

       setTimeout(() => {
        screen.animate(left);
       }, 650);

      
        

      }

   }


   level = (e) => {
     
    if (this.working === "on") {return null};

    this.working = "on";

    var ref = "level"+e;

    var button = this.refs[ref];
    var screen = this.refs.loadingscreen;

    var right = {
      from: {
        right: -100+"%",
      },
      to: {
        right: 0+"%",
      },
    };

    button.animate("bounceIn")

    setTimeout(() => {
      screen.animate(right);
    }, 650);
    

    
    setTimeout(() => {
      this.props.history.push("/thegame?"+e);
    }, 1550);
   }


render () {

  return (
    <View style={[styles.container]}>

    {this.state.fontLoaded ? (
    <Animatable.View duration={800} ref= "loadingscreen" style={styles.loadingscreen}>
    <Text style={styles.loadingtext}>Loading</Text>
 
    </Animatable.View>
    
    ) : null}

    {this.state.fontLoaded ? (
    <Animatable.View duration={800} ref= "instructionsscreen" style={styles.instructionsscreen}>
    <Text style={styles.welcome}>Instructions</Text>

    <Text style={styles.text}>Try to find matching sounds on every level.</Text>
    <Text style={styles.text}>Swipe left to quit the level.</Text>
    <Text style={styles.text}>And most importantly, relax!</Text>

    <TouchableWithoutFeedback onPress={() => this.instructions("off")}>
    <Animatable.View duration={800} ref="instructionsbutton" style={styles.okbutton} >
      <Text style={styles.okbutton2}>OK</Text>
    </Animatable.View>
    </TouchableWithoutFeedback>
 
    </Animatable.View>
    ) : null}

    {this.state.fontLoaded ? (
    <Animatable.View duration={800} ref= "infoscreen" style={styles.infoscreen}>
    <Text style={styles.welcome}>Information</Text>

    <Text style={styles.text}>App version: 1.0.0</Text>
    <Text style={styles.text}>Contact:</Text>
    <Text style={styles.text}>stable.software.solutions@gmail.com</Text>
    <TouchableOpacity onPress={() => Linking.openURL('https://stablesoftwaresolutions.github.io/asmr-memory-game/')}>
    <Text style={styles.linktext}>https://stablesoftwaresolutions.github.io/asmr-memory-game/</Text>
    </TouchableOpacity>

    <TouchableWithoutFeedback onPress={() => this.info("off")}>
    <Animatable.View duration={800} ref="infobutton" style={styles.okbutton} >
      <Text style={styles.okbutton2}>OK</Text>
    </Animatable.View>
    </TouchableWithoutFeedback>
 
    </Animatable.View>
    ) : null}



    {this.state.fontLoaded ? (
    <ScrollView style={styles.container2}>

    <Text style={styles.title}>ASMR Memory Game</Text>
   
    <View style={styles.levels}>

    <TouchableWithoutFeedback onPress={() => this.instructions("on")}>
          <Animatable.View duration={800} ref="instructions" style={[styles.level]}>
          <Text style={styles.leveltext1}>Instructions</Text>
          
          </Animatable.View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => this.level(1)}>
          <Animatable.View duration={800} ref="level1" style={[styles.level]}>
          <Text style={styles.leveltext1}>Level 1</Text>
          <Text style={styles.leveltext2}>Random Sounds</Text>
          </Animatable.View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => this.level(2)} >
          <Animatable.View duration={800} ref="level2" style={[styles.level]}>
          <Text style={styles.leveltext1}>Level 2</Text>
          <Text style={styles.leveltext2}>Scratching and Tapping</Text>
          </Animatable.View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => this.level(3)} >
          <Animatable.View duration={800} ref="level3" style={[styles.level]}>
          <Text style={styles.leveltext1}>Level 3</Text>
          <Text style={styles.leveltext2}>Water Sounds</Text>
          </Animatable.View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => this.level(4)} >
          <Animatable.View duration={800} ref="level4" style={[styles.level]}>
          <Text style={styles.leveltext1}>Level 4</Text>
          <Text style={styles.leveltext2}>Random sounds 2</Text>
          </Animatable.View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={() => this.level(5)} >
          <Animatable.View duration={800} ref="level5" style={[styles.level]}>
          <Text style={styles.leveltext1}>Level 5</Text>
          <Text style={styles.leveltext2}>Words</Text>
          </Animatable.View>
    </TouchableWithoutFeedback>
    

    <TouchableWithoutFeedback onPress={() => this.info("on")}>
          <Animatable.View duration={800} ref="info" style={[styles.level]}>
          <Text style={styles.leveltext1}>App Info</Text>
          
          </Animatable.View>
    </TouchableWithoutFeedback>

 
    </View>
    

    </ScrollView>
    ) : null
      }

     
    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    
    height: "100%",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },

  container2: {
    
  },

  loadingscreen: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1000,
    top: 0,
    right: -100+"%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#181726',
  },

  instructionsscreen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    height: '100%',
    top: 0,
    right: -100+"%",
    backgroundColor: '#181726',
  },

  infoscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    height: '100%',
    top: 0,
    right: -100+"%",
    backgroundColor: '#181726',
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

  text: {
    color: '#abe1fa',
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 15,
    fontFamily: 'Archivo',
    lineHeight: 20
  },

  linktext: {
    color: '#ed6062',
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
    marginTop: 23
  },

  okbutton2: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold'
  },

  loadingtext: {
    width: "100%",
    textAlign: "center",
    color: '#abe1fa',
    fontFamily: "Mansalva",
    fontSize: 35,
  },


  title: {
    marginTop: 40,
    color: '#ed6062',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 4,
    fontFamily: 'Mansalva',
    marginLeft: 5,
    marginRight: 5
  },

  levels: {
    marginTop: 15,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5
    
  },

  level: {
    
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 5,
    width: "100%",
    fontFamily: 'Archivo',
    
    flex: 1,
    alignItems: 'center',
    
  },

  leveltext1: {
    fontFamily: 'Mansalva',
    fontSize: 28,
    marginBottom: 5,
    color: '#abe1fa',
  },

  leveltext2: {
    fontFamily: 'Archivo',
    fontSize: 18,
    color: '#ed6062'
  }


});