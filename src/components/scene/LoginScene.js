import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  KeyboardAvoidingView,
  ToastAndroid,
  Keyboard,
  Alert,
  ScrollView,
  WebView
        } from 'react-native';
import CheckBox from 'react-native-modest-checkbox';
import { Actions } from 'react-native-router-flux';
import Axios from 'axios';
import FontAwesome, { Icons } from 'react-native-fontawesome';




function Right(Str, Num) {

  if(Num <= 0)
    return "";
  else if(Num > String(Str).length)
  return Str;
  else {
    var iLen = String(Str).length;
  return String(Str).substring(iLen, iLen - Num);
  }

}



export default class loginscene extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      login: '',
      autologin: '',
      autologin2: '',
      results: '', 
      abc: 0,
      check: false,
    };
  }


  checkBoxTest()
  {

    this.setState({
      check: !this.state.check
    })


    if (!this.state.check === true)
    {
      this.saveData();
       global.check = true;
       global.id = this.state.username;

    }
    else
    {
     AsyncStorage.clear()
      global.check = false;
    }

   }


  componentWillMount() {

    this.displayData();

  }

  componenetDidMount()
{
  this._loadInitialState().done();

}
_loadInitialState = async() =>{

  var value = await AsyncStorage.getItem("user");
}
login2() {
  Actions.forget();
  }

  render(){

    if (this.state.password.length >= 4){

      if (this.state.abc === 0)
      {
           this.login();
      }
    
    
   }

    return (
      
     <KeyboardAvoidingView behavior = "padding" style={styles.container}>
    
      <View style={{ width: 320, height: 20, alignItems: 'center' }} >
      </View>
      <View style={{ width: 320, height: 100, alignItems: 'center' }} >
 <FontAwesome style={{ fontSize: 100, textAlign: 'center' }}>{Icons.lock}</FontAwesome>
     </View>
  
    <TextInput

  
      style={styles.textInput} placeholder='  학번(교번)'
      onChangeText={ (username) => this.setState({username})}
      username={this.state.username}
      underlineColorAndroid='transparent'
      placeholderTextColor='gray'
      
    />

<TextInput
style={styles.textInput} placeholder='  비밀번호'
onChangeText={(password) => this.setState({ password })}
underlineColorAndroid='transparent'
placeholderTextColor='gray'
secureTextEntry= {true}
/>
<View style={{ flexDirection: 'row' , marginTop: 3}}>
      <CheckBox
        value = {false}
        label="자동로그인"
        onChange={() => this.checkBoxTest()}
      />
    <View style={{ width: 100, alignItems: 'center' }} />
    <TouchableOpacity
    //  style={styles.btn}
      onPress={this.login2}>
        <Text style={{ color: 'gray', fontWeight: 'bold' }}> 계정 찾기 </Text>
    </TouchableOpacity>
  </View>

<View style={{height: 15, alignItems: 'center' }} />

  
<TouchableOpacity
      style={styles.btn2}
      onPress={this.loginclick} >

<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}> 로그인 </Text>

</TouchableOpacity>



 </KeyboardAvoidingView>
  );
  }
  saveData = () => {
    AsyncStorage.setItem('user', this.state.username);

  }

  displayData = async () => {
    try {
      let value = await AsyncStorage.getItem('user');
    if(value !== null){
      Actions.MainScene();
      global.id = value;
    }
    
    }
    catch(error) {
      //alert(error);
    }
    
     }



  login = () => {
    Axios.post('http://10.70.24.183:3090/login',
      {
       username: this.state.username,
       password: this.state.password,
       
      })
      .then(response => this.setState({ login: response.data }));

      if (this.state.login.length > 0)
      {
        this.setState({ abc: 2 });

      }

  
        global.column1 = Right(this.state.username, 2);
        global.id = this.state.username;
        global.login = new Date();
  
    }

  loginclick = () => {
  //if (this.state.login === '') {
    if (this.state.abc === 0){
  Alert.alert('학번과 비밀번호을 다시 확인해주세요');
 

  }if (this.state.abc === 2) {

    Actions.MainScene();
  Keyboard.dismiss();
  
  }
}

}

const styles = StyleSheet.create({

container: {
  flex: 1,
  alignItems: 'flex-start',
  backgroundColor: '#F8F8FF',
  paddingLeft: 40,
  paddingRight: 40
  
},
header: {
  alignItems: 'center',
  fontSize: 30,
  marginBottom: 10,
  color: 'black',

},
textInput: {
  color: 'gray',
  fontWeight: 'bold',
  alignSelf: 'stretch',

  height: 60,
  marginBottom: 15,
  borderColor: 'gray',
  borderWidth: 1
  },

btn: {
  alignSelf: 'stretch',
  padding: 10,
  
  alignItems: 'center',
  
  
  backgroundColor: "#F8F8FF",
},

btn2: {
  alignSelf: 'stretch',
  padding: 10,
  //fontSize: 40,
  //color: 'black',
  //fontWeight: 'bold',
  
  alignItems: 'center',
  

 
  backgroundColor: "orange",
},

tail: {


  fontSize: 15,
  color: 'blue',
  fontWeight: 'bold',
  textAlign: 'center',
  textDecorationLine: 'underline',
  alignItems: 'center'

}

});