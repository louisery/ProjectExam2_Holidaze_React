import React from "react";
import EstablishmentData from "../json/establishments.json";
import { Link } from "react-router-dom";

export default class HotelSpecific extends React.Component {
  constructor(props) {
    super(props);
    let id = this.props.match.params.id;
    this.state = {
      establishmentObj: EstablishmentData.find(obj => obj.id === id),
      establishmentId: id
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let hotel = this.state.establishmentObj;
    let catering =
      hotel.selfCatering === "true"
        ? "We offer self catering."
        : "We do not offer self catering.";

    return (
      <div>
        <div className="[ row ]">
          <div className="[ col-sm-6 ] [ col-centered ]">
            <div className="[ hotel ]">
              <h1>{hotel.establishmentName}</h1>
              <div>
                <p>{hotel.description}</p>
                <p>
                  Our establishment can have a total of {hotel.maxGuests}{" "}
                  guests, and one room costs $ {hotel.price} per night.{" "}
                  {catering} If you have any questions, you are welcome to reach
                  out to us on our email:{" "}
                  <a
                    className="[ hotel__email--color ]"
                    href={"mailto:" + hotel.establishmentEmail}
                  >
                    {hotel.establishmentEmail}.
                  </a>
                </p>
              </div>
              <div className="[ text-center ] [ hotel__btn--margin ]">
                <Link to={`/enquiry`} className="[ btn ] [ btn--expand ]">
                  Make An Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="[ row ]">
          <div className="[ col-sm-3 ] [ text-center ] [ hotel-icons ]">
            <i className="[ fas fa-car ] [ hotel__icons--size ]" />
            <p>Parking</p>
          </div>
          <div className="[ col-sm-3 ] [ text-center ]">
            <i className="[ fas fa-store ] [ hotel__icons--size ]" />
            <p>Supermarket</p>
          </div>
          <div className="[ col-sm-3 ] [ text-center ]">
            <i className="[ fas fa-wifi ] [ hotel__icons--size ]" />
            <p>Free Wi-Fi</p>
          </div>
          <div className="[ col-sm-3 ] [ text-center ]">
            <i className="[ fas fa-wheelchair ] [ hotel__icons--size ]" />
            <p>Handicap Friendly</p>
          </div>
        </div>
        <div className="[ row ]">
          <div className="[ col-sm-8 ] [ col-centered ]">
            <img
              src={hotel.imageUrl}
              className="[ img-fluid ] [ img--rounded ] [ hotel__img--center ]"
            />
          </div>
        </div>

        <div className="[ row ] [ hotel__info__split-bg ]">
          <div className="[ col-sm-6 ]">
            <h3>Facilities</h3>
            <ul>
              <li>Smoke Free</li>
              <li>Daily Housekeeping</li>
              <li>Free Wi-Fi</li>
              <li>Room Service</li>
              <li>Minibar</li>
              <li>Gym</li>
              <li>Restaurant</li>
            </ul>
          </div>
          <div className="[ col-sm-6 ]">
            <h3>Popular Nearby</h3>
            <ul>
              <li>Bryggen Waterfront</li>
              <li>Torgalmenningen</li>
              <li>Grieg Hall</li>
              <li>Bergen Cathedral</li>
              <li>Fløibanen Funicular</li>
              <li>Hanseatic Museum</li>
              <li>Xhibition Mall</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
