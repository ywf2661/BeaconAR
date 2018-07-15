import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  ScrollView,
  } from 'react-native';
import axios from 'axios';
import { Spinner } from '../common';
import GwanleeDetail from './Gwanlee_detail';

class Gwanlee extends Component {

    state = { gwanleelist: [] };


    componentWillMount() {

        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();


        axios.post('http://172.30.1.30:3090/Gwanlee',
    {
        P_ID: global.id,
        A_DATE: year + '-0' + month + '-' + date
    })
      .then(response => this.setState({ gwanleelist: response.data }));
    }



    rendergwanleelist() {
        return this.state.gwanleelist.map(gwanlee =>
            <GwanleeDetail key={gwanlee.A_DATE} gwanlee={gwanlee} />
          );
            }
    
    render() {

        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const adate = year+ '-0' + month + '-' + date;

        console.log(this.state);

        if (this.state.gwanleelist.length === 0) {
            return (
              <ScrollView style={{ marginBottom: 20 }}>


          <View style={{ flex: 1, backgroundColor: 'white' }}>

           <Text>관리자(교수) 아이디로 로그인 해주세요. </Text>

          </View>  

        </ScrollView>
          )
          
}

        return (
          <ScrollView style={{ marginBottom: 20 }}>

          <View style={styles.container}>
             <Text style={{ fontSize: 16 }}>{global.id}님 {"\n"} {adate} 학생 출결기록 입니다.</Text>
          </View>

         <View style={{ flex: 1, backgroundColor: 'white' }}>

{this.rendergwanleelist()}

</View>  

</ScrollView>

        );
}
}
export default Gwanlee;

const styles = StyleSheet.create({

    container: {
        borderWidth: 2,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: 'black',
        position: 'relative'
    },
    textstyle: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});

