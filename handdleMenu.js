import React, { Component } from 'react';

this.state = {
    menuOpen: false
  };
export default class handleMenu extends Component {

    handleMenu() {
        const { menuOpen } = this.state;
        this.setState({
          menuOpen: !menuOpen
        });
      }
      
    }
