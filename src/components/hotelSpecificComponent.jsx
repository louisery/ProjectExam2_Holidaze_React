import React from "react";

export default class HotelSpecificComponent extends React.Component {
  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-xs-12 col-sm-6 ] [ col-centered ]">
          <div className="[ character__info ]">
            <h1 className="[ character__heading ]">{this.props.name}</h1>
            <p>About: {this.props.about}</p>
            <p>About: {this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
