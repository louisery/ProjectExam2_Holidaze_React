import React from "react";
import EstablishmentsData from "../json/establishments.json";

const emailRegex = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default class EnquiryFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clientName: "",
      email: "",
      formErrors: {
        clientName: "",
        email: ""
      }
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  validateFormData = () => {
    let formErrors = { ...this.state.formErrors };

    formErrors.clientName =
      this.state.clientName.length < 2 ? "You must write your name" : "";
    formErrors.email = emailRegex.test(this.state.email)
      ? ""
      : "Invalid email address";
    this.setState({ formErrors });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.validateFormData();
    });
  };

  isFormInvalid = () => {
    const { clientName, email } = this.state.formErrors;

    return clientName.length !== 0 || email.length !== 0;
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="[ row ] ">
        <div className="[ col-lg-8 col-md-8 col-sm-8 col-xs-12 ] [ col-centered ]">
          <h1>Make an Enquiry</h1>
          <form
            method="POST"
            action="http://192.168.64.2/hotel-booking/server/enquiry-success.php"
            className="[ enquiry__form ]"
          >
            <div className="[ form-group ]">
              <label htmlFor="establishment">Establishment:</label>
              <select
                className="[ form-control ]"
                name="establishment"
                id="establishment"
                aria-required="true"
                required
              >
                {EstablishmentsData.map(item => {
                  return (
                    <option value={item.establishmentName}>
                      {item.establishmentName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label htmlFor="clientName">Full name:</label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  className="[ form-control ]"
                  noValidate
                  onChange={this.handleChange}
                  aria-required="true"
                  required
                />
                {formErrors.clientName.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.clientName}</i>
                  </span>
                )}
              </div>
              <div className="[ col-sm-6 ]">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="[ form-control ]"
                  placeholder="example@example.com"
                  noValidate
                  onChange={this.handleChange}
                  aria-required="true"
                  required
                />
                {formErrors.email.length > 0 && (
                  <span className="[ form__error ]">
                    <i>{formErrors.email}</i>
                  </span>
                )}
              </div>
            </div>
            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label htmlFor="checkin">Check-in:</label>
                <input
                  type="date"
                  name="checkin"
                  id="checkin"
                  className="[ form-control ]"
                  required
                />
              </div>
              <div className="[ col-sm-6 ]">
                <label htmlFor="checkout">Check-out:</label>
                <input
                  type="date"
                  name="checkout"
                  id="checkout"
                  className="[ form-control ]"
                  required
                />
              </div>
            </div>
            <input
              type="submit"
              className="[ btn ] [ btn--expand ]"
              disabled={this.isFormInvalid()}
              value="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
