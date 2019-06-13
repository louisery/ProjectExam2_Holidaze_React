import React from "react";
import EstablishmentComponent from "../components/addEstablishmentComponent";
import EnquiriesComponent from "../components/enquiriesComponent";
import MessagesComponent from "../components/messagesComponent";

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <h1 className="[ text-center ]">Admin Page</h1>
          </div>
        </div>

        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <h2 className="[ establishment__heading ]">Add Establishment</h2>
            <EstablishmentComponent />
          </div>
        </div>

        <div className="[ row ] [ enquiries ]">
          <div className="[ col-sm-12 ]">
            <h2 className="[ enquiries__heading--left ]">
              Enquiries from Clients
            </h2>
            <EnquiriesComponent />
          </div>
        </div>

        <div className="[ row ] [ messages ]">
          <div className="[ col-sm-12 ]">
            <h2 className="[ messages__heading--left ]">
              Messages from Clients
            </h2>
            <MessagesComponent />
          </div>
        </div>
      </div>
    );
  }
}
