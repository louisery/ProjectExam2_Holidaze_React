import React from "react";
import ContactComponent from "../components/contactComponent";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-lg-8 col-md-8 col-sm-8 col-xs-12 ]">
          <ContactComponent />
        </div>
      </div>
    );
  }
}
