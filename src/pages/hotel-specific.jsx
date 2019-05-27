import React from "react";
import axios from "axios";
import HotelSpecificComponent from "../components/hotelSpecificComponent";
import CarouselComponent from "../components/carouselComponent";

// let specificEstablishment = require("../json/establishments.json");

// for (let i = 0; i < specificEstablishment.length; i++) {
//   let obj = specificEstablishment[i];

//   console.log("Name: " + obj.establishmentName + ", " + obj.description);
// }

export default class HotelSpecific extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      establishmentObj: [],
      establishmentId: this.props.match.params.id
    };
  }

  componentDidMount() {
    const app = this;
    app.getData();
  }

  getData() {
    // const app = this;
    // let specificEstablishment = require("../json/establishments.json");
    // specificEstablishment.forEach((value, key) => {
    //   app
    // })
  }

  render() {
    return (
      <div>
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <div className="[ character ]">
              <div className="[ character__info ]">
                <h1>Hotel Specific</h1>
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
          <div className="[ col-sm-12 ] [ text-center ]">
            <p>Bildegalleri her</p>
            <CarouselComponent />
          </div>
        </div>
        <div className="[ row ]">
          <div className="[ col-sm-12 ] [ text-center ]">
            <button className="[ btn ]">Make an Enquiry</button>
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
