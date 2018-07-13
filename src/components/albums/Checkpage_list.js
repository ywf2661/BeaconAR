import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  ScrollView,
       } from 'react-native';
import axios from 'axios';
import { Spinner } from '../common';
import CheckDetail from './Checkpage_detail';

class CheckPage extends Component {

    state = { checklist: [] };

    componentWillMount() {
        axios.post('http://10.70.24.183:3090/Check',
    {
        id: global.id,
        lecid: global.qrcode
    })
      .then(response => this.setState({ checklist: response.data }));
    }



    renderchecklist() {
        return this.state.checklist.map(check =>
          <CheckDetail key={check.A_DATE} check={check} />
        );
      }
    
      render() {
        console.log(this.state);

        if (this.state.checklist.length === 0) {
          return <Spinner size="large" />;
            
          
        }

        return (
        <ScrollView style={{ marginBottom: 20 }}>

           <View style={styles.container}>
              <Text style={{ fontSize: 16 }}>{global.id}님 {"\n"}수업명 : "{global.qrcode}"{"\n"} 출석기록 입니다.</Text>
           </View>

          <View style={{ flex: 1, backgroundColor: 'white' }}>

           {this.renderchecklist()}

          </View>  

        </ScrollView>

        );
      }
}
export default CheckPage;

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

