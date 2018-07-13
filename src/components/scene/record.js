import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import CheckPagelist from '../albums/Checkpage_list';
import axios from 'axios';

export default class record extends Component {

      
  componentWillMount() {

      const date = new Date().getDate();
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();

      Alert.alert(year + '-0' + month + '-' + date , '출석처리 되었습니다.');

    axios.post('http://10.70.24.183:3090/AttUpdate',
  {
    ID: global.id,
    CLASS: global.qrcode,
    A_DATE: year + '-0' + month + '-' + date 
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

    return(
      <View>
        <CheckPagelist />
      
      </View>
    )

  }

 
}
