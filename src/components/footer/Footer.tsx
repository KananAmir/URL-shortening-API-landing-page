import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assests/images/logo.svg'
import './footer.scss'
import fb from '../../assests/images/icon-facebook.svg'
import twitter from '../../assests/images/icon-twitter.svg'
import pinterest from '../../assests/images/icon-pinterest.svg'
import instagram from '../../assests/images/icon-instagram.svg'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row">
                    <div className="col col-12 col-md-3 col-lg-3">
                        <NavLink exact to="/"><img className="logo-footer" src={logo} alt='Shortly' /> </NavLink>
                    </div>
                    <div className="col col-12 col-md-5 col-lg-6">
                        <div className="row">
                            <div className="col col-12 col-md-4">
                                <h2>Features</h2>
                                <ul>
                                    <li>Link Shortening</li>
                                    <li>Branded Links</li>
                                    <li>Analytics</li>
                                </ul>
                            </div>
                            <div className="col col-12 col-md-4 text-center">
                                <h2>Resources</h2>
                                <ul>
                                    <li>Blog</li>
                                    <li>Developers</li>
                                    <li>Support</li>
                                </ul>
                            </div>
                            <div className="col col-12 col-md-4">
                                <h2>Company</h2>
                                <ul>
                                    <li>About</li>
                                    <li>Our Team</li>
                                    <li>Careers</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-md-4 col-lg-3 text-right">
                        <div className="social-icons">
                            <img className="icons" src={fb} alt="fb" />
                            <img className="icons" src={twitter} alt="twit" />
                            <img className="icons" src={pinterest} alt="pin" />
                            <img className="icons" src={instagram} alt="insta" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
