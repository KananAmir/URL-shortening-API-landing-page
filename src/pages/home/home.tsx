import { inject, observer } from "mobx-react";
import React from "react";
import "./home.scss";
import AppStore from "../../Store";
import  AdvancedStatistics from "../../components/advanced_statistics/AdvancedStatistics";
import  Introduction from "../../components/introduction/Introduction";
import { Input, Button } from 'antd';
@inject("appStore")
@observer
export default class HomePage extends React.Component<{
  appStore: AppStore;
}> {
  // componentDidMount() {
  //   http
  //     .get("/user?ID=12345")
  //     .then(function(response: any) {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch(function(error: any) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function() {
  //       // always executed
  //     });
  // }

  render(){
    return (  
      <div className="home">
        <Introduction/>
        <div className="shorten-link">
          <Input
              className="shorten-link-input"
              placeholder="Shorten a link here.."
          />
          <Button className="shorten-it" >Shorten It!</Button>
        </div>
        <AdvancedStatistics/>

        <div className="boost-links">
             <h1>Boost your links today</h1>
            <Button className="get-started"  shape="round">Get Started</Button>
        </div>
      </div>
    );
  }
}