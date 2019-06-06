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

  render() {
    let hotel = this.state.establishmentObj;

    return (
      <div>
        <div className="[ row ]">
          <div className="[ col-sm-6 ] [ col-centered ]">
            <div className="[ character ]">
              <div className="[ character__info ]">
                <h1>{hotel.establishmentName}</h1>
                <div>
                  <p>
                    {hotel.description} Our establishment can have a total of{" "}
                    {hotel.maxGuests} guests, and one room costs $ {hotel.price}{" "}
                    per night. If you have any questions, you are welcome to
                    reach out to us on our email:{" "}
                    <a
                      className="[ hotel__email--color ]"
                      href={"mailto:" + hotel.establishmentEmail}
                    >
                      {hotel.establishmentEmail}.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="[ row ]">
          <div className="[ col-sm-3 ] [ text-center ] [ hotel-icons ]">
            <i className="[ fas fa-dumbbell ] [ hotel-icons--size ]" />
            <p>Gym</p>
          </div>
          <div className="[ col-sm-3 ] [ text-center ]">
            <i className="[ fas fa-utensils ] [ hotel-icons--size ]" />
            <p>Restaurant</p>
          </div>
          <div className="[ col-sm-3 ] [ text-center ]">
            <i className="[ fas fa-wifi ] [ hotel-icons--size ]" />
            <p>Free Wi-Fi</p>
          </div>
          <div className="[ col-sm-3 ] [ text-center ]">
            <i className="[ fas fa-wheelchair ] [ hotel-icons--size ]" />
            <p>Handicap Friendly</p>
          </div>
        </div>
        <div className="[ row ]">
          <div className="[ col-sm-8 ] [ col-centered ]">
            <img
              src={hotel.imageUrl}
              className="[ img-fluid ] [ img--rounded ]"
            />
          </div>
        </div>
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <p className="[ text-center ]">google maps location</p>
          </div>
        </div>
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <p className="[ text-center ]">self catering</p>
          </div>
        </div>
        <div className="[ row ]">
          <div className="[ col-sm-12 ] [ text-center ]">
            <Link to={`/enquiry`} className="[ btn ] [ btn--expand ]">
              Make An Enquiry
            </Link>
          </div>
        </div>
        <div className="[ row ] [ hotel-info__split-bg ]">
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
