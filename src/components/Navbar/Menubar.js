import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  TouchableOpacity,
  ToastAndroid,
  ViewPropTypes,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Axios from 'axios';

class Menubar extends Component {
  onPress() {
    Actions.MainScene();
    }
  onPress2() {
    Actions.Favorite();
    }
  onPress3() {
    Actions.Mypage();
    }
  onPress4() {
    Actions.Setting();
    }
  onPress5() {
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
  onPress6() {
    Actions.Attendance();
    }
    render() {
      return (
        <View style={styles.notice}>
                <TouchableOpacity onPress={this.onPress}>
                  <View style={{width: 240, height: 53, borderWidth: 1,borderColor: '#FFFAFA',  flexDirection: 'row' }} >
                  <View style={{width: 66, height: 53, justifyContent: 'center',alignItems: 'center'}} >
                  
                  <FontAwesome style={{ color: '#FFFAFA', fontSize: 45, textAlign: 'center' }}>{Icons.home}</FontAwesome>
                  </View>
                  <View style={{width: 174, height: 53, justifyContent: 'center'}} >
                  
                  <Text style={styles.notice2Text}>
                  메인으로
                  </Text>
                  </View>
                  </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress2}>
                <View style={{width: 240, height: 53, borderWidth: 1, borderColor: '#FFFAFA', flexDirection: 'row' }} >
                <View style={{width: 66, height: 53, justifyContent: 'center', alignItems: 'center'}} >
                
                <FontAwesome style={{ color: '#FFFAFA', fontSize: 45, textAlign: 'center' }}>{Icons.star}</FontAwesome>
                </View>

                
                <View style={{width: 174, height: 53, justifyContent: 'center'}} >
                
                <Text style={styles.notice2Text}>
               즐겨찾기
                </Text>
                </View>
                            
                
                </View>
                </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress3}>

                <View style={{width: 240, height: 53, borderWidth: 1, borderColor: '#FFFAFA', flexDirection: 'row' }} >
                <View style={{width: 66, height: 53, justifyContent: 'center',alignItems: 'center'}} >
                
                <FontAwesome style={{ color: '#FFFAFA', fontSize: 45, textAlign: 'center' }}>{Icons.user}</FontAwesome>
                </View>
                <View style={{width: 174, height: 53, justifyContent: 'center'}} >
                
                <Text style={styles.notice2Text}>
                마이페이지
                </Text>
                </View>
                
                </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPress4}>
                <View style={{width: 240, height: 53, borderWidth: 1, borderColor: '#FFFAFA', flexDirection: 'row' }} >
                <View style={{width: 66, height: 53, justifyContent: 'center',alignItems: 'center'}} >
                
                <FontAwesome style={{ color: '#FFFAFA', fontSize: 45, textAlign: 'center' }}>{Icons.cog}</FontAwesome>
                </View>
                <View style={{width: 174, height: 53, justifyContent: 'center'}} >
                
                <Text style={styles.notice2Text}>
                환경설정
                </Text>
                </View>
                </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPress6}>
                <View style={{width: 240, height: 53, borderWidth: 1, borderColor: '#FFFAFA', flexDirection: 'row' }} >
                <View style={{width: 66, height: 53, justifyContent: 'center',alignItems: 'center'}} >
                
                <FontAwesome style={{ color: '#FFFAFA', fontSize: 45, textAlign: 'center' }}>{Icons.clipboard}</FontAwesome>
                </View>
                <View style={{width: 174, height: 53, justifyContent: 'center'}} >
                
                <Text style={styles.notice2Text}>
                전자 출석
                </Text>
                </View>
                </View>
        </TouchableOpacity>

                <View style={{width: 240, height: 442, borderWidth: 1, borderColor: '#FFFAFA'}} >
                
                
                </View>
        <TouchableOpacity onPress={this.onPress5}>
                <View style={{width: 240, height: 50, borderWidth: 1, borderColor: '#FFFAFA', justifyContent: 'center',  alignItems: 'center',}} >
                <Text style={styles.notice2Text}>
                로그아웃
                </Text>

                
                </View>
        </TouchableOpacity>

        </View>
      )
    }
  }


const styles = StyleSheet.create({
    container: {
      width: 240,
      height: 663,
      flexDirection: 'column',
      borderWidth: 2,
      borderColor: '#FFFAFA',
    },
    navBar: {
      height: 61,
      backgroundColor: 'white',
      justifyContent: 'center',
        alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1 
    },
    navBarText: {
      fontSize: 20,
      color: 'white',
    },
    navBarText2: {
      fontSize: 18,
      color: 'black',
    },
    noticeText: {
      fontSize: 18,
      color: 'black',
      
    },
    notice2Text: {
      fontSize: 21,
      color: '#FFFAFA',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
  
    },
    notice: {
      flex: 1,
      backgroundColor: '#708090',
      borderWidth: 2,
      borderColor: '#FFFAFA',
    },
  
  
  });


export default Menubar;
