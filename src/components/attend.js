import React, { Component } from 'react'
import { Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  TouchableOpacity } from 'react-native'

  import FontAwesome, { Icons } from 'react-native-fontawesome';
  import { Actions } from 'react-native-router-flux';
class attend extends Component {
  onPress() {
    Actions.Attendance();
    }
    render() {
      return (
        <View style={{ borderWidth: 1, borderColor: 'white', backgroundColor:'sandybrown', height: 153, width: 138, justifyContent: 'center', alignItems: 'center' }} >
          <TouchableOpacity onPress={this.onPress}>
            
            <FontAwesome style={{ fontSize: 74, textAlign: 'center' }}>{Icons.clipboard}</FontAwesome>
            <Text style={{ margin: 10, fontSize: 23, textAlign: 'center', color: 'white' }}>
                      전자출석부
            </Text>
            
          </TouchableOpacity>
        </ View>
      )
    }
  }
  //violet
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      borderWidth: 1
    },
    navBar: {
      height: 73.8,
      backgroundColor: 'orange',
      justifyContent: 'center',
        alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1
    },
    navBarText: {
      fontSize: 20,
      color: 'white',
    },
    noticeText: {
      fontSize: 18,
      color: 'black',
      
    },
    notice2Text: {
      fontSize: 15,
      color: 'black',
      
  
    },

 
    jobs: {
      height: 128,
      backgroundColor: 'white',
      borderWidth: 1,
      backgroundColor: '#F5DEB3',
    }
  
  });
  
  export default attend;

  