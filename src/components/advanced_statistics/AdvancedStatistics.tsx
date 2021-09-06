import React, { Component } from 'react'
import './advancedStatistics.scss'
import recognition from '../../assests/images/icon-brand-recognition.svg'
import detailed from '../../assests/images/icon-detailed-records.svg'
import customizable from '../../assests/images/icon-fully-customizable.svg'
export default class AdvancedStatistics extends Component {
    render() {
        return (
            <div className="advanced-statistics">
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                <div className="row">
                    <div className="col col-12 col-md-4">
                        <div className="stats">
                            <div className="advanced-icon">
                                <img src={recognition} alt="Brand Recognition" />
                            </div> 
                            <div className="advanced-content content-1">
                                <h1>Brand Recognition</h1>
                                <p>Boost your brand recognition with each click. Generic links don’t mean a thing. 
                                    Branded links help instil confidence in your content.</p>
                            </div>
                             <div className="linked-line"></div>
                        </div>
                    </div>
                   
                    <div className="col col-12 col-md-4">
                        <div className="stats content-2">
                            <div className="advanced-icon">
                                <img src={detailed} alt="Brand Recognition" />
                            </div> 
                            <div className="advanced-content">
                                  <h1>Detailed Records</h1>
                                  <p>Gain insights into who is clicking your links. 
                                      Knowing when and where people engage with your content helps inform better decisions.</p>
                            </div>
                        </div>
                        <div className="linked-line"></div>
                    </div>
                    <div className="col col-12 col-md-4">
                        <div className="stats content-3">
                            <div className="advanced-icon">
                                <img src={customizable} alt="Brand Recognition" />
                            </div> 
                            <div className="advanced-content">
                                 <h1>Fully Customizable</h1>
                                 <p>Improve brand awareness and content discoverability through customizable links, 
                                     supercharging audience engagement.</p>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}
