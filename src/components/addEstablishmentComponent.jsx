import React from "react";

const emailRegex = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const latRegex = RegExp(/^-?([1-8]?\d(?:\.\d{1,})?|90(?:\.0{1,6})?)$/);

const longRegex = RegExp(
  /^-?((?:1[0-7]|[1-9])?\d(?:\.\d{1,})?|180(?:\.0{1,})?)$/
);

const urlRegex = RegExp(
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
);

export default class EstablishmentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      establishmentName: "",
      establishmentEmail: "",
      imageUrl: "",
      price: "",
      maxGuests: "",
      googleLat: "",
      googleLong: "",
      description: "",
      id: "",
      selfCatering: "",
      formErrors: {
        establishmentName: "",
        establishmentEmail: "",
        imageUrl: "",
        price: "",
        maxGuests: "",
        googleLat: "",
        googleLong: "",
        description: "",
        id: ""
      }
    };
  }

  validateFormData = () => {
    let formErrors = { ...this.state.formErrors };

    formErrors.establishmentName =
      this.state.establishmentName.length < 2 ? "Required field" : "";
    formErrors.establishmentEmail = emailRegex.test(
      this.state.establishmentEmail
    )
      ? ""
      : "Invalid email address";
    formErrors.imageUrl =
      this.state.imageUrl.length < 2 ? "Required field" : "";
    formErrors.price = this.state.price.length < 2 ? "Required field" : "";
    formErrors.maxGuests =
      this.state.maxGuests.length < 2 ? "Required field" : "";
    formErrors.googleLat =
      this.state.googleLat.length < 2 ? "Required field" : "";
    formErrors.googleLong =
      this.state.googleLong.length < 2 ? "Required field" : "";
    formErrors.description =
      this.state.description.length < 2 ? "Required field" : "";
    formErrors.id = this.state.id.length < 2 ? "Required field" : "";
    this.setState({ formErrors });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.validateFormData();
    });
  };

  isFormInvalid = () => {
    const { clientName, message, email } = this.state.formErrors;

    return (
      clientName.length !== 0 || message.length !== 0 || email.length !== 0
    );
  };

  render() {
    const { formErrors } = this.state;
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
                  className={`[ form-control ] [ ${
                    formErrors.establishmentName.length > 0
                      ? "form-invalid"
                      : ""
                  } ]`}
                  noValidate
                  onChange={this.handleChange}
                  name="establishmentName"
                  id="establishmentName"
                  aria-required="true"
                  required
                />
                {formErrors.establishmentName.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.establishmentName}</i>
                  </span>
                )}
              </div>
            </div>
            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label htmlFor="establishmentEmail">Establishment Email:</label>
                <input
                  type="text"
                  className={`[ form-control ] [ ${
                    formErrors.establishmentEmail.length > 0
                      ? "form-invalid"
                      : ""
                  } ]`}
                  noValidate
                  onChange={this.handleChange}
                  name="establishmentEmail"
                  id="establishmentEmail"
                  aria-required="true"
                  required
                />
                {formErrors.establishmentEmail.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.establishmentEmail}</i>
                  </span>
                )}
              </div>
              <div className="[ col-sm-6 ]">
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                  type="text"
                  className={`[ form-control ] [ ${
                    formErrors.imageUrl.length > 0 ? "form-invalid" : ""
                  } ]`}
                  noValidate
                  onChange={this.handleChange}
                  name="imageUrl"
                  id="imageUrl"
                  aria-required="true"
                  required
                />
                {formErrors.imageUrl.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.imageUrl}</i>
                  </span>
                )}
              </div>
            </div>

            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label htmlFor="price">Price per person per night ($):</label>
                <input
                  type="number"
                  className={`[ form-control ] [ ${
                    formErrors.price.length > 0 ? "form-invalid" : ""
                  } ]`}
                  noValidate
                  onChange={this.handleChange}
                  name="price"
                  id="price"
                  aria-required="true"
                  required
                />
                {formErrors.price.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.price}</i>
                  </span>
                )}
              </div>
              <div className="[ col-sm-6 ]">
                <label htmlFor="maxGuests">Max guests:</label>
                <input
                  type="number"
                  className={`[ form-control ] [ ${
                    formErrors.maxGuests.length > 0 ? "form-invalid" : ""
                  } ]`}
                  noValidate
                  onChange={this.handleChange}
                  name="maxGuests"
                  id="maxGuests"
                  aria-required="true"
                  required
                />
                {formErrors.maxGuests.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.maxGuests}</i>
                  </span>
                )}
              </div>
            </div>

            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label htmlFor="googleLat">Google Coordinates Latitude:</label>
                <input
                  type="text"
                  className={`[ form-control ] [ ${
                    formErrors.googleLat.length > 0 ? "form-invalid" : ""
                  } ]`}
                  noValidate
                  onChange={this.handleChange}
                  name="googleLat"
                  id="googleLat"
                  aria-required="true"
                  required
                />
                {formErrors.googleLat.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.googleLat}</i>
                  </span>
                )}
              </div>

              <div className="[ col-sm-6 ]">
                <label htmlFor="googleLong">
                  Google Coordinates Longitude:
                </label>
                <input
                  type="text"
                  className={`[ form-control ] [ ${
                    formErrors.googleLong.length > 0 ? "form-invalid" : ""
                  } ]`}
                  noValidate
                  onChange={this.handleChange}
                  name="googleLong"
                  id="googleLong"
                  aria-required="true"
                  required
                />
                {formErrors.googleLong.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.googleLong}</i>
                  </span>
                )}
              </div>
            </div>

            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-12 ]">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  className={`[ form-control ] [ ${
                    formErrors.description.length > 0 ? "form-invalid" : ""
                  } ]`}
                  noValidate
                  onChange={this.handleChange}
                  name="description"
                  id="description"
                  aria-required="true"
                  required
                />
                {formErrors.description.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.description}</i>
                  </span>
                )}
              </div>
            </div>

            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label htmlFor="id">ID:</label>
                <input
                  type="number"
                  className={`[ form-control ] [ ${
                    formErrors.id.length > 0 ? "form-invalid" : ""
                  } ]`}
                  noValidate
                  onChange={this.handleChange}
                  name="id"
                  id="id"
                  aria-required="true"
                  required
                />
                {formErrors.id.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.id}</i>
                  </span>
                )}
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
                    aria-required="true"
                    required
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
                    aria-required="true"
                    required
                  />
                  <label htmlFor="false" className="[ form-check-label ]">
                    False
                  </label>
                </div>
              </div>
            </div>

            <input type="submit" className="[ btn ] [ btn--expand ]" />
          </form>
        </div>
      </div>
    );
  }
}
