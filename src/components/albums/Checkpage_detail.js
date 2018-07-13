import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity, WebView, Linking } from 'react-native';

import { Card, CardSection } from '../common';

// import Card from '../common/card';
// import CardSection from '../common/card_section';


const CheckDetail = ({ check }) => {
  const { A_DATE, ATTEND } = check;
  const {  
    headerTextStyle, dateTextStyle,
    } = styles;


    return ( 
        
      <Card> 
      <CardSection> 
              <View>
                <Text style={headerTextStyle}>  {A_DATE}                                  {ATTEND}하였습니다.</Text>  
                                   
              </View> 
      </CardSection>
    
</Card>
        
  );

};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 20
  },
  dateTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default CheckDetail;