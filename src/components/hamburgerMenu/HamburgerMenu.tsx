import React, { Component } from 'react'
import './hamburgerMenu.scss'
import { Button } from "antd";


interface IProps {
    handleChangeVisible: React.MouseEventHandler<HTMLButtonElement>;
    check: boolean;
}
export default class HamburgerMenu extends Component<IProps> {
    render() {
        return (
            <div className="hamburger-menu ">
                <div className={`${this.props.check ? "show-menu" : "hide-menu"}`}>

                    <div className="menu-nav">
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                    <div className="line"></div>
                    <div className="kanan">
                        <p className="login">Login</p>
                        <Button className="menu-sign-up" shape="round">Sign Up</Button>
                    </div>
                </div>
            </div>
        )

    }
}
