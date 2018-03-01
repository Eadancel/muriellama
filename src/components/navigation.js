import React, { Component } from "react";
import { navigateTo } from "gatsby-link";
import { slide as Menu } from 'react-burger-menu';

var styles_menu = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '12px',
      top: '12px'
    },
    bmBurgerBars: {
      background: '#FFFFFF'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#aa6da3',
      // padding: '2.5em 1.5em 0',
      // fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      paddingTop:"30px"
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

class Navigation extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        menuOpen: false
      }
    };



    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
      this.setState({menuOpen: false})
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu () {
      this.setState({menuOpen: !this.state.menuOpen})
    }


    render () {
      return (

                <Menu right width={ 200 }
                    styles={styles_menu}
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                >
                        <ul style={{marginBottom:"0px", marginLeft:"0px"}} >
                            <li style={{ display: `inline-block`, marginRight: `1rem`,marginBottom:"0px" }} >
                                <a onClick={() => {
                                            navigateTo("/");
                                            this.closeMenu();
                                            }}>INICIO</a>
                            </li>
                            <li style={{ display: `inline-block`, marginRight: `1rem`,marginBottom:"0px" }} >
                                <a onClick={() => {
                                            navigateTo("/actuaciones/");
                                            this.closeMenu();
                                            }}>ACTUACIONES</a>
                            </li>

                            <li style={{ display: `inline-block`, marginRight: `1rem`,marginBottom:"0px" }} >
                                <a onClick={() => {
                                            navigateTo("/discografia/");
                                            this.closeMenu();
                                            }}>DISCOGRAFIA</a>
                            </li>
                            <li style={{ display: `inline-block`, marginRight: `1rem`,marginBottom:"0px" }} >
                                <a onClick={() => {
                                            navigateTo("/clases/");
                                            this.closeMenu();
                                            }}>CLASES</a>
                            </li>
                            <li style={{ display: `inline-block`, marginRight: `1rem`,marginBottom:"0px" }} >
                            <a onClick={() => {
                                        navigateTo("/galleria/");
                                        this.closeMenu();
                                        }}>GALERIA</a>
                        </li>
                            <li style={{ display: `inline-block`, marginRight: `1rem`,marginBottom:"0px" }} >
                                <a onClick={() => {
                                            navigateTo("/contacto/");
                                            this.closeMenu();
                                            }}>CONTACTO</a>
                            </li>
                        </ul>
                </Menu>


            // <a onClick={() => this.closeMenu()}>About</a>
            // <a onClick={() => this.closeMenu()}>Contact</a>
            // <a onClick={() => this.closeMenu()}>Settings</a>

      )
    }
  }
  export default Navigation;