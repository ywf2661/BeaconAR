import React, { Component } from 'react';
import { Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  AsyncStorage,
  Keyboard,
  TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import { drawer } from '../../actions';
import Axios from 'axios';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.drawer();
  }
  onPress2() {
    Actions.MainScene();
  }
  onPress3() {
    AsyncStorage.clear();
    Actions.login();


    Axios.post('http://10.70.24.183:3090/login2',
      {
       autos: 0, 
       column: global.column1,
       username: global.id,
       login: global.login,
       logout: new Date()
  
      })
       .then(function (response) {
          console.log(response);
         //Actions.MainScene();
        })
        .catch(function (error) {
          console.log(error);
        });

  }

   render() {
      return (
        <View>               
          <View style={styles.navBar}>
          
            <View style={{ width: 70, height: 73.8 }} />
            <Text>"{global.id}"님{"\n"}환영합니다!</Text>
            <View style={{ width: 30 }}/>
          <TouchableOpacity onPress={this.onPress2}>
          <Image style={{ width: 182, height: 52 }} source={require('../../../img/logo.png')} />
          </TouchableOpacity>
          
            <View style={{ width: 90, height: 73.8, alignItems: 'center', justifyContent: 'center'}} >
            <TouchableOpacity onPress={this.onPress3}>
            <Image style={{ width: 52, height: 52 }} source={require('../../../img/back.png')} />
           </TouchableOpacity>
            
            </View>
          
          </View>    
          <View >
          
          </View>
        </View>  
      );
   }
}

/*<Image source={require('./img/menu.png')} style={{width: 30, height: 30}}/>*/


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      borderWidth: 1
    },
    navBar: {
      height: 73.8,
      backgroundColor: 'white',
      justifyContent: 'center',
        alignItems: 'center',
      flexDirection: 'row',
     },
    navBarText: {
      fontSize: 22,
      color: 'black',
    }
  });

  export default connect(null, { drawer })(Navbar);
