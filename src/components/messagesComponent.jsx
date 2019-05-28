import React from "react";
import ContactData from "../json/contact.json";

export default class MessagesComponent extends React.Component {
  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-lg-12 col-md-12 col-sm-12 col-xs-12 ]">
          {ContactData.map((key, value) => {
            return (
              <div>
                <h3 className="[ messages__heading ]">{key.clientName}</h3>
                <p>{key.email}</p>
                <p>"{key.message}"</p>
                <hr className="hr--msg" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
