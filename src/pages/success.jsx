import React from "react";

export default class Success extends React.Component {
  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-lg-12 col-md-12 col-sm-12 col-xs-12 ]">
          <div className="[ text-center ] [ success ]">
            <h1>Thank you for Submitting the Form!</h1>
            <p>We will get back to you shortly</p>
            <i className="[ fas fa-check ] [ success__icon--color ]" />
          </div>
          <div className="[ text-center ]">
            <a href="/home" className="[ btn ] [ success__btn ]">
              Back to Homepage
            </a>
          </div>
        </div>
      </div>
    );
  }
}
