import React from "react";
import NavbarComponent from "../navComponent";
import FooterComponent from "../footerComponent";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="[ container-fluid ]">
          <div id="main">
            <div className="[ row ]">
              <div className="[ col-lg-12 col-md-12 col-sm-12 col-xs-12 ]">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}
