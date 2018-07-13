import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import Drawer from 'react-native-drawer';
import Router from './src/router';
import Drawer from 'react-native-drawer';
import reducers from './src/reducers';
//import drawer from './src/components/drawer';
import Menubar from './src/components/Navbar/Menubar';

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.onPress = this.onPress.bind(this);
  // }

  render() {
    const store = createStore(reducers, {}, applyMiddleware());
    // console.log(this.props);
    
    return (
      
        
        
        
      <Provider store={store}>
          <Router >
                       
          </Router >   
      </Provider>
      
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     drawer: state.selectedLibraryId
//   };
// }

// export default connect(mapStateToProps)(App);
export default App;

/*
import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { OffCanvasReveal } from 'react-native-off-canvas-menu'

import Menu1 from './menuScenes/menu1';
import Menu2 from './menuScenes/menu2';
import Menu3 from './menuScenes/menu3';
import Menu4 from './menuScenes/menu4';
import Menu5 from './menuScenes/menu5';
import Menu6 from './menuScenes/menu6';
import Menu7 from './menuScenes/menu7';

class OffCanvasMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false
    }
  }

  render() {
    const statusBar = this.state.menuOpen ?
      <StatusBar
        backgroundColor="#222222"
        animated={true}
      />
    : null

    return (
      <View style={{flex: 1}}>

        {statusBar}

        <OffCanvasReveal
        active={this.state.menuOpen}
        onMenuPress={this.handleMenu.bind(this)}
        backgroundColor={'#222222'}
        menuTextStyles={{color: 'white'}}
        handleBackPress={true}
        menuItems={[
          {
            title: 'Menu 1',
            icon: <Icon name="camera" size={35} color='#ffffff' />,
            renderScene: <Menu1 handleMenu={this.handleMenu.bind(this)}/>
          },
          {
            title: 'Menu 2',
            icon: <Icon name="bell" size={35} color='#ffffff' />,
            renderScene: <Menu2 handleMenu={this.handleMenu.bind(this)}/>
          },
          {
            title: 'Menu 3',
            icon: <Icon name="calendar" size={35} color='#ffffff' />,
            renderScene: <Menu3 handleMenu={this.handleMenu.bind(this)}/>
          },
          {
            title: 'Menu 4',
            icon: <Icon name="cart" size={35} color='#ffffff' />,
            renderScene: <Menu4 handleMenu={this.handleMenu.bind(this)}/>
          },
          {
            title: 'Menu 5',
            icon: <Icon name="chart" size={35} color='#ffffff' />,
            renderScene: <Menu5 handleMenu={this.handleMenu.bind(this)}/>
          },
          {
            title: 'Menu 6',
            icon: <Icon name="heart" size={35} color='#ffffff' />,
            renderScene: <Menu6 handleMenu={this.handleMenu.bind(this)}/>
          },
          {
            title: 'Menu 7',
            icon: <Icon name="gear" size={35} color='#ffffff' />,
            renderScene: <Menu7 handleMenu={this.handleMenu.bind(this)}/>
          }
        ]}/>

      </View>
    )
  }

  handleMenu() {
    const {menuOpen} = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }
}

AppRegistry.registerComponent('OffCanvasMenu', () => OffCanvasMenu)
*/