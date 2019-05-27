import React from "react";
import axios from "axios";
import HotelComponent from "../components/hotelComponent";

export default class Hotel extends React.Component {
  state = {
    hotels: []
  };

  componentDidMount() {
    axios
      .get("http://192.168.64.2/hotel-booking/server/establishments.json")
      .then(res => {
        const hotels = res.data;
        this.setState({ hotels });
      });
    // let getHotel = require("../json/establishments.json");
  }

  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-lg-12 col-md-12 col-sm-12 col-xs-12 ]">
          <h1>The Hotels</h1>
        </div>
        <div className="[ col-lg-12 col-md-12 col-sm-12 col-xs-12 ]">
          {this.state.hotels.map(hotels => (
            <Hotels key={hotels.id} {...hotels} />
          ))}
        </div>
        <div className="[ col-lg-12 col-md-12 col-sm-12 col-xs-12 ]">
          {this.state.hotels.map(hotels => (
            <HotelComponent />
          ))}
        </div>
      </div>
    );
  }
}

const Hotels = props => {
  return (
    <div className="[ row ] [ split-1 ] [ hotels ]">
      <div className="[ col-sm-6 ] [ text-center ]">
        <img
          src={props.imageUrl}
          className="[ img-fluid ] [ img--size ] [ img--rounded ]"
        />
      </div>
      <div className="[ col-sm-6 ]">
        <div className="[ hotels--center ]">
          <h2 className="[ hotels__heading ]">{props.establishmentName}</h2>
          <hr className="[ hr--heading ]" />
          <p id="hotels__description">
            <b>Description:</b> {props.description}
          </p>
          <button className="[ btn ]">Book Hotel</button>
        </div>
      </div>
    </div>
  );
};
