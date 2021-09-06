import { inject, observer } from "mobx-react";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/home";
import AppStore from "./Store";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

@inject("appStore")
@observer
export default class App extends React.Component<{
  appStore?: AppStore;
}> {
  render() {
    return (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      <Footer/>
      </BrowserRouter>
    );
  }
}
