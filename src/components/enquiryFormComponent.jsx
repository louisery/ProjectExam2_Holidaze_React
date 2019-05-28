import React from "react";

export default class EnquiryFormComponent extends React.Component {
  render() {
    return (
      <div className="[ row ] ">
        <div className="[ col-lg-8 col-md-8 col-sm-8 col-xs-12 ] [ col-centered ]">
          <h1>Make an Enquiry</h1>
          <form
            method="POST"
            action="http://192.168.64.2/hotel-booking/server/enquiry-success.php"
            className="[ enquiry__form ]"
          >
            <div className="[ form-group ]">
              <label for="establishment">Establishment:</label>
              <input
                type="text"
                name="establishment"
                id="establishment"
                readonly
                className="[ form-control ]"
              />
            </div>
            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label for="clientName">Full name:</label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  className="[ form-control ]"
                />
              </div>
              <div className="[ col-sm-6 ]">
                <label for="email">Email Address:</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="[ form-control ]"
                />
              </div>
            </div>
            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label for="checkin">Check-in:</label>
                <input
                  type="date"
                  name="checkin"
                  id="checkin"
                  className="[ form-control ]"
                />
              </div>
              <div className="[ col-sm-6 ]">
                <label for="checkout">Check-out:</label>
                <input
                  type="date"
                  name="checkout"
                  id="checkout"
                  className="[ form-control ]"
                />
              </div>
            </div>
            <input type="submit" className="[ btn ]" />
          </form>
        </div>
      </div>
    );
  }
}
