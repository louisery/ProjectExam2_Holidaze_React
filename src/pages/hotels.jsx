import React from "react";
// import HotelComponent from "../components/hotelComponent";
import EstablishmentData from "../json/establishments.json";

import { Link } from "react-router-dom";

export default class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: EstablishmentData
    };
  }

  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-lg-12 col-md-12 col-sm-12 col-xs-12 ]">
          <h1>The Hotels</h1>
        </div>
        <div className="[ col-lg-12 col-md-12 col-sm-12 col-xs-12 ]">
          {this.state.hotels.map((hotels, idx) => (
            <Hotels key={hotels.id} mirrored={idx % 2 === 0} {...hotels} />
          ))}
        </div>
      </div>
    );
  }
}

const Hotels = props => {
  let { mirrored } = props;
  let imageHalf = props => (
    <div className="[ col-sm-6 ] [ text-center ]">
      <img
        src={props.imageUrl}
        className="[ img-fluid ] [ img--size ] [ img--rounded ]"
      />
    </div>
  );
  let textHalf = props => (
    <div className="[ col-sm-6 ]">
      <div className="[ hotels--center ]">
        <h2 className="[ hotels__heading ]">{props.establishmentName}</h2>
        <hr className="[ hr--heading ]" />
        <p id="hotels__description">
          <b>Description:</b> {props.description}
        </p>
        <Link to={`/hotel-specific/${props.id}`} className="btn">
          Book Hotel
        </Link>
      </div>
    </div>
  );

  if (mirrored) {
    return (
      <div className="[ row ] [ split-1 ] [ hotels ]">
        {imageHalf(props)}
        {textHalf(props)}
      </div>
    );
  } else {
    return (
      <div className="[ row ] [ split-1 ] [ hotels ]">
        {textHalf(props)}
        {imageHalf(props)}
      </div>
    );
  }
};
