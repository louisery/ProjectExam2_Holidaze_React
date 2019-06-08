import React from "react";
import EstablishmentData from "../json/establishments.json";

import { Link } from "react-router-dom";

export default class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: EstablishmentData
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
    <div className="[ col-sm-6 ]">
      <img
        src={props.imageUrl}
        className="[ img-fluid d-none d-sm-block ] [ hotels__img--size ] [ img--rounded ]"
      />
    </div>
  );
  let textHalf = props => (
    <div className="[ col-sm-6 ]">
      <div className="[ hotels__text--center ]">
        <h2 className="[ hotels__heading ]">{props.establishmentName}</h2>
        <hr className="[ hotels__hr--size ]" />
        <p className="hotels__description">
          <b>Description:</b> {props.description}
        </p>
        <Link
          to={`/hotel-specific/${props.id}`}
          className="[ btn ] [ btn--expand ]"
        >
          Book Hotel
        </Link>
      </div>
    </div>
  );

  if (mirrored) {
    return (
      <div className="[ row ] [ hotels__split-bg ]">
        {imageHalf(props)}
        {textHalf(props)}
      </div>
    );
  } else {
    return (
      <div className="[ row ] [ hotels__split-bg ]">
        {textHalf(props)}
        {imageHalf(props)}
      </div>
    );
  }
};
