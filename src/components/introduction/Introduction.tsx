import React, { Component } from 'react'
import { Button } from "antd";
import ImgWorking from '../../assests/images/illustration-working.svg';
import './introduction.scss'
export default class Introduction extends Component {
    render() {
        return (
            <div className='introduction'>
                <div className='description'>
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <Button className="get-started" shape="round">Get Started</Button>
                </div>

                <div className='illustration'>
                    <img className="illustration-img" src={ImgWorking} alt='illustration of a person working' />
                </div>

            </div>

        )
    }
}
