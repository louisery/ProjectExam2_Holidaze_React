import React from "react";
import EnquiryFormComponent from "../components/enquiryFormComponent";

export default class Enquiry extends React.Component {
  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-lg-12 col-md-12 col-sm-12 col-xs-12 ]">
          <EnquiryFormComponent />
        </div>
      </div>
    );
  }
}
