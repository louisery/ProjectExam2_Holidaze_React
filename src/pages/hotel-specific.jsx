import React from "react";
import CarouselComponent from "../components/carouselComponent";
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
          <div className="[ col-sm-12 ]">
            <div className="[ character ]">
              <div className="[ character__info ]">
                <h1>{hotel.establishmentName}</h1>
                <p className="[ text-center ]">{hotel.description}</p>
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
          <div className="[ col-sm-4 ] [ text-center ]">
            <p>Price: $ {hotel.price}</p>
          </div>
          <div className="[ col-sm-4 ] [ text-center ]">
            <p>Max Guests: {hotel.maxGuests}</p>
          </div>
          <div className="[ col-sm-4 ] [ text-center ]">
            <p>Self Catering: {hotel.selfCatering}</p>
          </div>
        </div>
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <p className="[ text-center ]">google maps</p>
          </div>
        </div>
        <div className="[ row ]">
          <div className="[ col-sm-12 ] [ text-center ]">
            <p>Bildegalleri her</p>
            <CarouselComponent />
          </div>
        </div>
        <div className="[ row ]">
          <div className="[ col-sm-12 ] [ text-center ]">
            <Link to={`/enquiry`} className="btn">
              Make An Enquiry
            </Link>
          </div>
        </div>
        <div className="[ row ] [ split-3 ]">
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
