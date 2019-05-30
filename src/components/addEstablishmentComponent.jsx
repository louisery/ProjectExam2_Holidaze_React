import React from "react";

export default class EstablishmentComponent extends React.Component {
  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-md-8 ] [ col-centered ] [ establishment ]">
          <form
            method="POST"
            action="http://192.168.64.2/hotel-booking/server/add-establishments-success.php"
            className="[ establishment__form ]"
          >
            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-12 ]">
                <label htmlFor="establishmentName">Establishment Name:</label>
                <input
                  type="text"
                  className="[ form-control ]"
                  name="establishmentName"
                  id="establishmentName"
                />
              </div>
            </div>
            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label htmlFor="establishmentEmail">Establishment Email:</label>
                <input
                  type="text"
                  className="[ form-control ]"
                  name="establishmentEmail"
                  id="establishmentEmail"
                />
              </div>
              <div className="[ col-sm-6 ]">
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                  type="text"
                  className="[ form-control ]"
                  name="imageUrl"
                  id="imageUrl"
                />
              </div>
            </div>

            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label htmlFor="price">Price per person per night ($):</label>
                <input
                  type="number"
                  className="[ form-control ]"
                  name="price"
                  id="price"
                />
              </div>
              <div className="[ col-sm-6 ]">
                <label htmlFor="maxGuests">Max guests:</label>
                <input
                  type="number"
                  className="[ form-control ]"
                  name="maxGuests"
                  id="maxGuests"
                />
              </div>
            </div>

            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label htmlFor="googleLat">Google Coordinates Latitude:</label>
                <input
                  type="text"
                  className="[ form-control ]"
                  name="googleLat"
                  id="googleLat"
                />
              </div>

              <div className="[ col-sm-6 ]">
                <label htmlFor="googleLong">
                  Google Coordinates Longitude:
                </label>
                <input
                  type="text"
                  className="[ form-control ]"
                  name="googleLong"
                  id="googleLong"
                />
              </div>
            </div>

            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-12 ]">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  className="[ form-control ]"
                  name="description"
                  id="description"
                />
              </div>
            </div>

            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label htmlFor="id">ID:</label>
                <input
                  type="number"
                  className="[ form-control ]"
                  name="id"
                  id="id"
                />
              </div>

              <div className="[ col-sm-6 ]">
                <label htmlFor="selfCatering">Self-catering:</label>
                <br />
                <div className="[ form-check form-check-inline ]">
                  <input
                    type="radio"
                    className="[ form-check-input ]"
                    id="true"
                    name="selfCatering"
                    value="true"
                  />
                  <label htmlFor="true" className="[ form-check-label ]">
                    True
                  </label>
                </div>
                <div className="[ form-check form-check-inline ]">
                  <input
                    type="radio"
                    className="[ form-check-input ]"
                    id="false"
                    name="selfCatering"
                    value="false"
                  />
                  <label htmlFor="false" className="[ form-check-label ]">
                    False
                  </label>
                </div>
              </div>
            </div>

            <input type="submit" className="[ btn ]" />
          </form>
        </div>
      </div>
    );
  }
}
