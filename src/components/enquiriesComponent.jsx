import React from "react";
import EnquiriesData from "../json/enquiries.json";

export default class EnquiriesComponent extends React.Component {
  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-sm-4 ]">
          {EnquiriesData.map((key, value) => {
            return (
              <div className="[ customer-enquiries ]">
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
