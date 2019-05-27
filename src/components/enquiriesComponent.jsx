import React from "react";
import EnquiriesData from "../json/enquiries.json";

export default class EnquiriesComponent extends React.Component {
  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-lg-12 col-md-12 col-sm-12 col-xs-12 ]">
          {EnquiriesData.map((key, value) => {
            return (
              <div>
                <h3>{key.establishment}</h3>
                <p>
                  <b>Client Name:</b> {key.clientName}
                </p>
                <p>
                  <b>Email:</b> {key.email}
                </p>
                <p>
                  <b>Checkin:</b> {key.checkin}
                </p>
                <p>
                  <b>Checkout:</b> {key.checkout}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
