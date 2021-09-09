import { inject, observer } from "mobx-react";
import React from "react";
import "./home.scss";
import AppStore from "../../Store";
import AdvancedStatistics from "../../components/advanced_statistics/AdvancedStatistics";
import Introduction from "../../components/introduction/Introduction";
import { Input, Button } from 'antd';
import { ChangeEvent } from "react";
import { ShorteningLinkDto } from '../../core/interfaces/shorteningLinkDto'
import { ApiResultDto } from "../../core/interfaces/apiResultDto";
import ShortLinkService from '../../core/services/short_link_service'
import { Modal } from "antd";


interface MyState {
  shorteningLink?: ShorteningLinkDto;
  link: string;
  apiResult: ApiResultDto[];
  btnClicked: boolean;
  inputError: string;
  errorMessage: string;
  input: string;
  copied: boolean;
}
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

  private shortLinkService: ShortLinkService = new ShortLinkService();
  state: MyState = {
    shorteningLink: undefined,
    link: "",
    apiResult: [],
    btnClicked: false,
    inputError: "",
    errorMessage: "",
    input: "",
    copied: false,
  };

  private getLink = async (link: string) => {
    try {
      const shorteningLink = await this.shortLinkService.getLink(link);
      console.log(shorteningLink)
      this.setState({
        shorteningLink,
      });
    } catch (error) {
      console.error(error);
      Modal.error({
        title: "Please add a valiable link",
      });
    }
  }

  shorteningAddedLink = () => {
    this.setState({ btnClicked: true });

    if (this.state.link) {
      this.getLink(this.state.link);
      this.setState({ input: '' })
    }
    else {
      this.setState({ errorMessage: "error-message" })
      this.setState({ inputError: "input-error" })
    }
  }
  addingLink = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ link: event.target.value });
    this.setState({ input: event.target.value });
  };

  copyLink = () => {
    this.setState({ copied: true });
    navigator.clipboard.writeText(`${this.state.shorteningLink?.result.full_short_link}`);
  }

  render() {
    return (
      <div className="home">
        <Introduction />

        <div className="shorten-link">
          <Input
            className={`shorten-link-input ${this.state.btnClicked ? this.state.inputError : ""}`}
            placeholder="Shorten a link here.."
            onChange={this.addingLink}
            value={this.state.input}
          />
          <Button className="shorten-it" onClick={this.shorteningAddedLink}>Shorten It!</Button>
          <p className={`empty-error ${this.state.btnClicked ? `${this.state.errorMessage}` : ""}`}>Please add a link</p>
        </div>

        <div className="result-and-statistics">
          <div className={this.state.shorteningLink?.result.original_link ? "result" : "d-none"}>
            <div className="row m-0 pr-2">

              <p className="original col col-12 col-md-6 col-lg-7 mb-0 pr-0">{this.state.shorteningLink?.result.original_link}</p>
              <p className="shortened col col-12 col-md-3 col-lg-3 mb-0">{this.state.shorteningLink?.result.full_short_link}</p>
              <div className="col col-12 col-md-3 col-lg-2 m-0">
                <Button className={`copy-btn mb-2 ${this.state.copied ? "copied" : " "}`} onClick={this.copyLink}>{this.state.copied ? "Copied" : "Copy"}</Button>
              </div>
            </div>
          </div>

          <AdvancedStatistics />
        </div>

        <div className="boost-links">
          <h1>Boost your links today</h1>
          <Button className="get-started" shape="round">Get Started</Button>
        </div>
      </div>
    );
  }
}