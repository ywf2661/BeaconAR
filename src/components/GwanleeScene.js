import React, { Component } from 'react';
import {Select, Option} from "react-native-chooser";
import { 
  StyleSheet,
  View,
  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Gwanleelist from '../albums/Gwanlee_list';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class GwanleeScene extends Component {

    render() {
        return (
          <View>

             <Gwanleelist />

          </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'white',
    },
    header: {
        alignItems: 'center',
        fontSize: 30,
        marginBottom: 50,
        color: 'black',
        fontWeight: 'bold',
    },
    textInput: {
        color: 'gray',
        fontWeight: 'bold',
        alignSelf: 'stretch',
        fontSize: 22,
        height: 48,
        width: 314,
        marginLeft: 20,
        marginTop: 14,
        borderColor: 'black',
        borderWidth: 1
    },

    btn: {
        width: 50,
        height: 50,
        alignSelf: 'stretch',
        padding: 10,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 25,
        backgroundColor: 'orange',
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

