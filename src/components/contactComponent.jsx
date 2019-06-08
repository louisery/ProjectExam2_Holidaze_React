import React from "react";

const emailRegex = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default class ContactComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clientName: "",
      email: "",
      message: "",
      formErrors: {
        clientName: "",
        email: "",
        message: ""
      }
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  validateFormData = () => {
    let formErrors = { ...this.state.formErrors };

    formErrors.clientName =
      this.state.clientName.length < 2 ? "Minimum 2 characters required" : "";
    formErrors.message =
      this.state.message.length < 10 ? "You must write a message" : "";
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
    const { clientName, message, email } = this.state.formErrors;

    return (
      clientName.length !== 0 || message.length !== 0 || email.length !== 0
    );
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="[ row ]">
        <div className="[ col-lg-12 col-md-12 col-sm-12 col-xs-12 ] [ text-center ] [ contact ]">
          <h1 className="[ contact__heading ]">Contact Us</h1>
        </div>

        <div className="[ col-lg-8 col-md-8 col-sm-8 col-xs-12 ] [ col-centered ]">
          <form
            className="[ contact__form ]"
            method="POST"
            action="http://192.168.64.2/hotel-booking/server/contact-success.php"
          >
            <div className="[ form-group ]">
              <label htmlFor="clientName">Full Name:</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                className={`[ form-control ] [ ${
                  formErrors.clientName.length > 0 ? "form-invalid" : ""
                } ]`}
                noValidate
                onChange={this.handleChange}
                aria-required="true"
                required
                value={this.state.clientName}
              />
              {formErrors.clientName.length > 0 && (
                <span className="[ form__error ]">
                  <i>{formErrors.clientName}</i>
                </span>
              )}
            </div>
            <div className="[ form-group ]">
              <label htmlFor="email">Email Address:</label>
              <input
                type="text"
                name="email"
                id="email"
                className={`[ form-control ] [ ${
                  formErrors.email.length > 0 ? "form-invalid" : ""
                } ]`}
                noValidate
                onChange={this.handleChange}
                aria-required="true"
                required
                value={this.state.email}
              />
              {formErrors.email.length > 0 && (
                <span className="[ form__error ]">
                  <i>{formErrors.email}</i>
                </span>
              )}
            </div>
            <div className="[ form-group ]">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                rows="8"
                cols="80"
                className={`[ form-control ] [ ${
                  formErrors.message.length > 0 ? "form-invalid" : ""
                } ]`}
                noValidate
                onChange={this.handleChange}
                aria-required="true"
                required
                value={this.state.message}
              />
              {formErrors.message.length > 0 && (
                <span className="[ form__error ]">
                  <i>{formErrors.message}</i>
                </span>
              )}
            </div>
            <input
              type="submit"
              className="[ btn ] [ btn--expand ]"
              disabled={this.isFormInvalid()}
            />
          </form>
        </div>
      </div>
    );
  }
}
