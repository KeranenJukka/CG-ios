import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';

import * as Animatable from 'react-native-animatable';

import * as Font from 'expo-font';

import moon from '../assets/pictures/moon4.png'
import moon2 from '../assets/pictures/moon5.png'

import { Audio } from 'expo-av';

import { AdMobBanner } from 'expo-ads-admob';

import GestureRecognizer from 'react-native-swipe-gestures';



var a0 = new Audio.Sound(), a1 = new Audio.Sound(), a2 = new Audio.Sound(), a3 = new Audio.Sound(), a4 = new Audio.Sound(), a5 = new Audio.Sound(), a6 = new Audio.Sound(), a7 = new Audio.Sound(), a8 = new Audio.Sound(), a9 = new Audio.Sound(), a10 = new Audio.Sound(), a11 = new Audio.Sound();


var soundBank = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11];

var arr1, arr2, arr3, arr4;

var card, card2;

export default class TheGame extends Component {


  constructor() {
    super ()

    this.state = {
      fontLoaded: false,
      current: [],
      last: [],
      ready: []
      
    }
    
    this.isRendered = "false";

  }



  bannerError = (e) => {
    
  }

  receivedAd = (e) => {
    
  }


  onSwipeLeft = (e) => {

    var quit = this.refs.quitscreen; 

    if (e === "on") {

      var right = {
        from: {
          right: -100+"%",
        },
        to: {
          right: 0+"%",
        },
      };
  
      quit.animate(right);


    }

    else if (e === "off") {

      var but = this.refs.buttonno;
      but.animate("bounceIn")

      var right = {
        from: {
          right: 0+"%",
        },
        to: {
          right: -100+"%",
        },
      };
  
      setTimeout(() => {
        quit.animate(right);
      }, 650);
      

    }




  }

  
  okButton = () => {

    var but = this.refs.buttonyes;
    var but2 = this.refs.buttonok;


    but.animate("bounceIn");
    but2.animate("bounceIn")

    setTimeout(() => {
      
      if (this.state.last.length !== 0) {
    
        var temp = this.state.last[1];
    
        soundBank[temp].stopAsync().catch(error => {
          
        })
    
      }
  
      this.props.history.push("/frontpage");

    }, 650);


  }


  finished = () => {

    var finish = this.refs.finishscreen;
    var right = {
      from: {
        right: -100+"%",
      },
      to: {
        right: 0+"%",
      },
    };

    finish.animate(right);

  }


  playSound = (x) => {


  if (this.state.last.length !== 0) {
    
    var temp = this.state.last[1];

    soundBank[temp].stopAsync().catch(error => {
      
    })

  }
 
   soundBank[x].replayAsync();

  }


  animate = (button, status) => {

    var ref = "card"+button;
    var ref2 = "cardb"+button;
        
    card = this.refs[ref];
    card2 = this.refs[ref2];


    if (status === "first") {


      card.animate("bounceIn");
      card2.animate("bounceIn");
      
      var opacity = {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 0.7,
        },
      };
  
    card2.animate(opacity);
    
    }


    else if (status === "yes") {
      card.animate("bounceIn");
      card2.animate("bounceIn");
      
      var opacity = {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 0.7,
        },
      };
  
      var opacity2 = {
        from: {
          opacity: 0.7,
        },
        to: {
          opacity: 0,
        },
      }

    var ref3 = "cardb"+this.state.current[0];
    var card3 = this.refs[ref3];
    card2.animate(opacity2);
    card3.animate(opacity2);

    var ref4 = "cardc"+this.state.current[0];
    var ref5 = "cardc"+ button;
    var card4 = this.refs[ref4];
    var card5 = this.refs[ref5];
    card4.animate(opacity);
    card5.animate(opacity);

    }


    else if (status === "no") {

      var ref3 = "cardb"+this.state.current[0];
      var card3 = this.refs[ref3];

      card.animate("bounceIn");
      card2.animate("bounceIn");
     
      var opacity = {
        from: {
          opacity: 0.7,
        },
        to: {
          opacity: 0.7,
        },
      };
  
    card2.animate(opacity);

 
    var opacity2 = {
      from: {
        opacity: 0.7,
        
      },
      to: {
        opacity: 0,
        
      },
     
    };

    card2.animate(opacity2)
    card3.animate(opacity2)
    
    this.setState({
      current: []
    })
    
    }

  }


  press = (button, sound) => {
    


  this.playSound(sound);

  this.setState({
    last: [button, sound]
  })


  for (var k in this.state.ready) {
    
    if (this.state.ready[k] === button) {
      // console.log("found on ready!")
      return null
    }

  }

  if (this.state.current[0] === button && this.state.current[1] === sound) {
    //console.log("same!")
    return null
  }

  if (this.state.current.length === 0) {
    //console.log("first!")
    this.setState({
      current: [button, sound],
      })

    this.animate(button, "first")

  }

  else if (this.state.current.length === 2) {
   // console.log("second")
    if (this.state.current[1] === sound) {
     // console.log("match!")
      var temp = [...this.state.ready, button, this.state.current[0]]
      
      if (temp.length === 24) {this.finished()}

      this.setState({
        ready: temp,
        current: []
      })

      this.animate(button, "yes")

    }

    else {
     // console.log("no match!")
      this.animate(button, "no")

    }

  }

  // current, last, ready

}



  async componentDidMount() {
   
    
    await Font.loadAsync({
      'Mansalva': require('../assets/fonts/Mansalva-Regular.ttf'),
      'Archivo': require('../assets/fonts/Archivo-Regular.ttf'),
    });
 
   this.setState({
       fontLoaded: true
     })

    /*------------------------------------------------------------------------*/
    
    if (this.props.location.search === "?1") {

      await a0.loadAsync(require('../assets/bank1/1.mp3'));
      await a1.loadAsync(require('../assets/bank1/2.mp3'));
      await a2.loadAsync(require('../assets/bank1/3.mp3'));
      await a3.loadAsync(require('../assets/bank1/4.mp3'));
      await a4.loadAsync(require('../assets/bank1/5.mp3'));
      await a5.loadAsync(require('../assets/bank1/6.mp3'));
      await a6.loadAsync(require('../assets/bank1/7.mp3'));
      await a7.loadAsync(require('../assets/bank1/8.mp3'));
      await a8.loadAsync(require('../assets/bank1/9.mp3'));
      await a9.loadAsync(require('../assets/bank1/10.mp3'));
      await a10.loadAsync(require('../assets/bank1/11.mp3'));
      await a11.loadAsync(require('../assets/bank1/12.mp3'));

    }

    else if (this.props.location.search === "?2") {
      await a0.loadAsync(require('../assets/bank2/1.mp3'));
      await a1.loadAsync(require('../assets/bank2/2.mp3'));
      await a2.loadAsync(require('../assets/bank2/3.mp3'));
      await a3.loadAsync(require('../assets/bank2/4.mp3'));
      await a4.loadAsync(require('../assets/bank2/5.mp3'));
      await a5.loadAsync(require('../assets/bank2/6.mp3'));
      await a6.loadAsync(require('../assets/bank2/7.mp3'));
      await a7.loadAsync(require('../assets/bank2/8.mp3'));
      await a8.loadAsync(require('../assets/bank2/9.mp3'));
      await a9.loadAsync(require('../assets/bank2/10.mp3'));
      await a10.loadAsync(require('../assets/bank2/11.mp3'));
      await a11.loadAsync(require('../assets/bank2/12.mp3'));
    }

    else if (this.props.location.search === "?3") {
      await a0.loadAsync(require('../assets/bank3/1.mp3'));
      await a1.loadAsync(require('../assets/bank3/2.mp3'));
      await a2.loadAsync(require('../assets/bank3/3.mp3'));
      await a3.loadAsync(require('../assets/bank3/4.mp3'));
      await a4.loadAsync(require('../assets/bank3/5.mp3'));
      await a5.loadAsync(require('../assets/bank3/6.mp3'));
      await a6.loadAsync(require('../assets/bank3/7.mp3'));
      await a7.loadAsync(require('../assets/bank3/8.mp3'));
      await a8.loadAsync(require('../assets/bank3/9.mp3'));
      await a9.loadAsync(require('../assets/bank3/10.mp3'));
      await a10.loadAsync(require('../assets/bank3/11.mp3'));
      await a11.loadAsync(require('../assets/bank3/12.mp3'));
    }

    else if (this.props.location.search === "?4") {
      await a0.loadAsync(require('../assets/bank4/1.mp3'));
      await a1.loadAsync(require('../assets/bank4/2.mp3'));
      await a2.loadAsync(require('../assets/bank4/3.mp3'));
      await a3.loadAsync(require('../assets/bank4/4.mp3'));
      await a4.loadAsync(require('../assets/bank4/5.mp3'));
      await a5.loadAsync(require('../assets/bank4/6.mp3'));
      await a6.loadAsync(require('../assets/bank4/7.mp3'));
      await a7.loadAsync(require('../assets/bank4/8.mp3'));
      await a8.loadAsync(require('../assets/bank4/9.mp3'));
      await a9.loadAsync(require('../assets/bank4/10.mp3'));
      await a10.loadAsync(require('../assets/bank4/11.mp3'));
      await a11.loadAsync(require('../assets/bank4/12.mp3'));
    }

    else if (this.props.location.search === "?5") {
      await a0.loadAsync(require('../assets/bank5/1.mp3'));
      await a1.loadAsync(require('../assets/bank5/2.mp3'));
      await a2.loadAsync(require('../assets/bank5/3.mp3'));
      await a3.loadAsync(require('../assets/bank5/4.mp3'));
      await a4.loadAsync(require('../assets/bank5/5.mp3'));
      await a5.loadAsync(require('../assets/bank5/6.mp3'));
      await a6.loadAsync(require('../assets/bank5/7.mp3'));
      await a7.loadAsync(require('../assets/bank5/8.mp3'));
      await a8.loadAsync(require('../assets/bank5/9.mp3'));
      await a9.loadAsync(require('../assets/bank5/10.mp3'));
      await a10.loadAsync(require('../assets/bank5/11.mp3'));
      await a11.loadAsync(require('../assets/bank5/12.mp3'));
    }
     


  /*------------------------------------------------------------------------*/

    
  var loading = this.refs.loadingscreen2;

  var height = {
      from: {
        left: 0+"%",
      },
      to: {
        left: -100+"%",
      },
    };

   loading.animate(height);




     /*------------------------------------------------------------------------*/
   }

   
   componentWillUnmount () {

    
     a0 = new Audio.Sound(); a1 = new Audio.Sound(); a2 = new Audio.Sound(); a3 = new Audio.Sound(); a4 = new Audio.Sound(); a5 = new Audio.Sound(); a6 = new Audio.Sound(); a7 = new Audio.Sound(); a8 = new Audio.Sound(); a9 = new Audio.Sound(); a10 = new Audio.Sound(); a11 = new Audio.Sound();

     soundBank = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11];

    
   }


render () {
  
  if (this.isRendered === "false") {
  
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  var array = [];
  
  for (var k = 0; k < 24; k++) {
  
   var temp =  Math.floor(Math.random() * Math.floor(numbers.length));
  
   var temp2 = numbers.splice(temp, 1);
  
   array.push(temp2[0]);
    
  }


  var buttons = [];

  for (var k = 0; k < 24; k++) {

    buttons.push(k)

  }

  buttons = buttons.map((x) => {

    return (
    <TouchableWithoutFeedback key={x} onPress={()=> this.press(x, array[x])}>

          
      <View style={styles.press}>

      <Animatable.View duration={1000} ref={"card"+x} style={styles.pressfront}>
      </Animatable.View>

      <Animatable.View duration={1000} ref={"cardb"+x} style={styles.pressback}>
      <Image style={styles.thepic} source={moon2}></Image>
      </Animatable.View>

      <Animatable.View duration={1000} ref={"cardc"+x} style={styles.pressback2}>
      <Image style={styles.thepic} source={moon}></Image>
      </Animatable.View>

      </View>
      
    </TouchableWithoutFeedback>
    )

    

  })

 arr1 = buttons.splice(0,6)
 arr2 = buttons.splice(0,6)
 arr3 = buttons.splice(0,6)
 arr4 = buttons.splice(0,6)

 this.isRendered = "true";

}

/*-----------------------------------------------------------------*/ 

  return (

    <GestureRecognizer onSwipeLeft={() => this.onSwipeLeft("on")}>

        
    <View style={styles.wrapper}>
    
    {this.state.fontLoaded ? (

    <Animatable.View duration={800} ref= "loadingscreen2" style={styles.loadingscreen2}>
    <Text style={styles.loadingtext2}>Loading</Text>
    </Animatable.View>
    ) : null}



    {this.state.fontLoaded ? (
    <View style={[styles.container]}>
    
    
 
    <View style={styles.container2}>


    <View style={styles.column}>
    
    {arr1}

    </View>


    <View style={styles.column}>
    
    {arr2}
    
    </View>

    <View style={styles.column}>
    
    {arr3}
    
    </View>

    <View style={styles.column}>
    
    {arr4}
    
    </View>


     </View>


    
    </View>

    ) : null}

{/*-----------------------------------------------------------------------------------*/}

<Animatable.View duration={800} ref="finishscreen" style={styles.finishscreen} >

{this.state.fontLoaded ? (

<Animatable.View >
  
  <Text style={styles.finishtext}>Great!</Text>
  
  <Text style={styles.finishtext2}>Are you feeling more relaxed?</Text>
  <Text style={styles.finishtext2}>Maybe try another level!</Text>
    

 </Animatable.View>

 ) : null}

 {this.state.fontLoaded ? (

      <TouchableWithoutFeedback onPress={this.okButton}>
      <Animatable.View ref="buttonok" duration={800} style={styles.okbutton} >
      <Text style={styles.okbutton2}>OK</Text>
      </Animatable.View>
      </TouchableWithoutFeedback>


  ) : null}


</Animatable.View>

{/*-----------------------------------------------------------------------------------*/}

<Animatable.View duration={800} ref="quitscreen" style={styles.quitscreen} >

{this.state.fontLoaded ? (

<Animatable.View >
  
  <Text style={styles.finishtext}>Quit level?</Text>
  

 </Animatable.View>

 ) : null}

 {this.state.fontLoaded ? (

  <View style={styles.quitbuttons}>

      <TouchableWithoutFeedback onPress={this.okButton}>
      <Animatable.View ref="buttonyes" duration={800} style={styles.okbutton} >
      <Text style={styles.okbutton2}>YES</Text>
      </Animatable.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => this.onSwipeLeft("off")}>
      <Animatable.View ref="buttonno" duration={800} style={styles.okbutton} >
      <Text style={styles.okbutton2}>NO</Text>
      </Animatable.View>
      </TouchableWithoutFeedback>


  </View>
  ) : null}


</Animatable.View>

{/*-----------------------------------------------------------------------------------*/}

    <View style={styles.bannercont}>
    <AdMobBanner style={styles.banner}
    bannerSize="banner"
    adUnitID="ca-app-pub-3940256099942544/2934735716" 
    testDeviceID="EMULATOR"

    servePersonalizedAds={true}
    onAdViewDidReceiveAd={(e) => this.receivedAd(e)}
    onDidFailToReceiveAdWithError={(e) => this.bannerError(e)} />
    
    </View>

{/*-----------------------------------------------------------------------------------*/}

    </View>
    </GestureRecognizer>
    
  );
}

}

const styles = StyleSheet.create({

  wrapper: {
    height: "100%",
    width: "100%",
  },

  loadingscreen2: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1000,
    top: 0,
    backgroundColor: '#181726',
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },

  loadingtext2: {
    width: "100%",
    textAlign: "center",
    color: '#abe1fa',
    fontFamily: "Mansalva",
    fontSize: 35,
  },

 
  container: {
    position: "relative",
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: "2%",
    paddingRight: "2%",
    
    height: "100%",
    width: "100%",
    flex: 1,
    flexDirection: "column"
  },

  container2: {
    position: "relative",
    height: "100%",
    width: "100%",
    
    flex: 1,
    flexDirection: "row"
  },

 column: {
   flex: 1,
   position: "relative",
 },

  press: {
    position: "relative",
    flex: 1, 
    margin: 4,             
    
    borderRadius: 5,
    transform: [{ rotateY: "0deg"}],
  },

  pressfront: {
    flex: 1,
    position: "relative",
    top: 0,
    backgroundColor: 'rgba(171, 225, 250, 0.3)',
    borderRadius: 5,
    zIndex: 20,
    
  },

  pressback: {
    flex: 1,
    position: "absolute",
    top: 0,
    
    width: "100%",
    height: "100%",
    borderRadius: 5,
    padding: 12,
    zIndex: 30,
    opacity: 0,
  },

  pressback2: {
    flex: 1,
    position: "absolute",
    top: 0,
    
    width: "100%",
    height: "100%",
    borderRadius: 5,
    padding: 12,
    zIndex: 40,
    opacity: 0,
  },

  thepic: {
    
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
    opacity: 1,
    
  },

  finishscreen: {
    flex: 1,
    backgroundColor: "#181726",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1000,
    width: '100%',
    height: '100%',
    right: -100+"%",
    padding: 10,
  },



  finishtext: {
    color: '#abe1fa',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: 'Mansalva'
  },

  finishtext2: {
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
    marginTop: 23,
    marginLeft: 7,
    marginRight: 7,
  },

  okbutton2: {
    color: "#F2F3EE",
    fontSize: 20,
    fontWeight: 'bold'
  },


  quitscreen: {
    flex: 1,
    backgroundColor: "#181726",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1000,
    width: '100%',
    height: '100%',
    right: -100+"%",
    padding: 10,
  },

  quitbuttons: {
    
    flexDirection: "row"
  },

  bannercont: {
    backgroundColor: "#181726",
    
  },

  banner: {
    alignSelf: "center",
    width: 320,
    height: 50
  }

});