import React from "react";
import SearchComponent from "../components/searchComponent";

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <h1 id="heading-logo" className="[ text-center ]">
              Holidaze
            </h1>
          </div>
        </div>

        <div className="[ row ]">
          <div className="[ col-lg-10 col-md-10 col-sm-10 col-xs-12 ] [ col-centered ]">
            <SearchComponent />
          </div>
        </div>

        <div className="[ row ] [ icons ]">
          <div className="[ col-sm-3 col-md-3 col-sm-3 col-xs-12 ] [ text-center ]">
            <a href="/#/city">
              <img
                src="https://img.icons8.com/ios/50/57c4f0/city.png"
                className="[ img-fluid ] [ icons--opacity ]"
                alt="City icon from from https://icons8.com/"
              />
              <h2 className="[ icons__heading ]">About the City</h2>
            </a>
          </div>
          <div className="[ col-sm-3 col-md-3 col-sm-3 col-xs-12 ] [ text-center ]">
            <a href="/#/hotels">
              <img
                src="https://img.icons8.com/ios/50/57c4f0/5-star-hotel.png"
                className="[ img-fluid ] [ icons--opacity ]"
                alt="Hotel icon from https://icons8.com/"
              />
              <h2 className="[ icons__heading ]">The Hotels</h2>
            </a>
          </div>
          <div className="[ col-sm-3 col-md-3 col-sm-3 col-xs-12 ] [ text-center ]">
            <a href="/#/contact">
              <img
                src="https://img.icons8.com/ios/50/57c4f0/message-group.png"
                className="[ img-fluid ] [ icons--opacity ]"
                alt="Envelope icon from https://icons8.com/"
              />
              <h2 className="[ icons__heading ]">Contact Us</h2>
            </a>
          </div>
          <div className="[ col-sm-3 col-md-3 col-sm-3 col-xs-12 ] [ text-center ]">
            <a href="/#/enquiry">
              <img
                src="https://img.icons8.com/ios/50/57c4f0/ball-point-pen.png"
                className="[ img-fluid ] [ icons--opacity ]"
                alt="Ball point pen icon from https://icons8.com/"
              />
              <h2 className="[ icons__heading ]">Make an Enquiry</h2>
            </a>
          </div>
        </div>
        <div className="[ row ]">
          <div className="[ col-sm-4 col-md-4 col-sm-4 col-xs-12 ]">
            <img
              src="https://images.unsplash.com/photo-1510823088177-41fc4b0a6e73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
              className="[ img-fluid ] [ img--rounded ]"
              alt="Bryggen i Bergen by Leonard Rb "
            />
          </div>
          <div className="[ col-sm-4 col-md-4 col-sm-4 col-xs-12 ]">
            <img
              src="https://images.unsplash.com/photo-1542407647-75de2027db53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
              className="[ img-fluid ] [ img--rounded ]"
              alt="Waterfront in snowy Bergen by Ignacio Ceballos"
            />
          </div>
          <div className="[ col-sm-4 col-md-4 col-sm-4 col-xs-12 ]">
            <img
              src="https://images.unsplash.com/photo-1553023158-19763783dfc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              className="[ img-fluid ] [ img--rounded ]"
              alt="Buildings and houses in Bergen by Florencia Viadana"
            />
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Icons from https://icons8.com/
 */
