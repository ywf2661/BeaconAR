import React, { Component } from 'react';
import { Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry } from 'react-native';

  class Banner extends Component {
    render() {
      return(
        
                
                    <Image style={styles.banner} source={require('../../img/Banner.jpg')} />
                    
        
      )
    }
  }


  const styles = StyleSheet.create({
   
    banner: {
      flex: 1, 
      height: 200,
      borderWidth: 5,
      borderColor: 'white', 
      width: undefined,      
      justifyContent: 'center',
      alignItems: 'center',
    },
   
  
  });
  

  export default Banner;