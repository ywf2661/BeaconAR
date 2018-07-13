import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { Scene, Router, Actions, Stack, Tabs, ActionConst } from 'react-native-router-flux';

import MainScene from './components/scene/MainScene';
import loginscene from './components/scene/LoginScene';
import Scan from './components/scene/Scan';
import Record from './components/scene/record';


import Navbar from '../src/components/Navbar/Navbar';



const RouterComponent = () => {
  return (
    
  
    <Router>
    <Scene hideNavBar="true">

    
      <Scene key="root">
      
        <Scene
          key="MainScene"
          component={MainScene}
          navBar={Navbar}
        />

        <Scene
          key="Record"
          component={Record}
          navBar={Navbar}
        />

        <Scene
          key="Scan"
          component={Scan}
          navBar={Navbar}
        />

        <Scene
          key="login"
          component={loginscene}
          hideNavBar='true'
          initial
          
        />


      </Scene>
      </Scene>

    </Router> 
    
  );
};



export default RouterComponent;
