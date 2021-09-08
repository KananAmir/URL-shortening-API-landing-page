import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assests/images/logo.svg'
import menu from '../../assests/images/menu.svg'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import { Button } from "antd";
import './header.scss'
export default class Header extends Component {

  state = {
    visible: false,
  };

  handleChangeVisible = () => {
    if (this.state.visible === false) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  };
  render() {
    return (
      <div className="header">
        <div className='row'>
          <div className="col col-md-1 col-lg-1 col-10">
            <NavLink exact to="/"><img className="logo" src={logo} alt='Shortly' /> </NavLink>
          </div>
          <div className="menu-icon col col-2">
            <img src={menu} alt="icon" onClick={() => this.handleChangeVisible()} />
          </div>
          <div className='col col-md-8 col-lg-8'>
            <div className="main-nav ml-5">
              <ul>
                <p className="list-element">Features</p>
                <p className="list-element">Pricing</p>
                <p className="list-element">Resources</p>
              </ul>
            </div>
          </div>
          <div className="col col-md-2 col-lg-2 d-flex">
            <div className="login-signup">
              <p className="login list-element">Login</p>
              <Button className="sign-up" shape="round">Sign Up</Button>
            </div>
          </div>
          <HamburgerMenu
            handleChangeVisible={this.handleChangeVisible}
            check={this.state.visible} />
        </div>

      </div>
    );
  }
}
