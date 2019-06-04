import React from "react";

const emailRegex = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const validateForm = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(value => {
    value.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    value === "" && (valid = false);
  });

  return valid;
};

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

  handleSubmit = e => {
    e.preventDefault();

    if (validateForm(this.state)) {
      window.location.replace("/#/success");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "clientName":
        formErrors.clientName =
          value.length < 2 ? "Minimum 2 characters required" : "";
        break;
      case "message":
        formErrors.message =
          value.length < 10 ? "You must write a message" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
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
            method="POST"
            action="http://192.168.64.2/hotel-booking/server/contact-success.php"
            className="[ contact__form ]"
            onSubmit={this.handleSubmit}
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
              />
              {formErrors.message.length > 0 && (
                <span className="[ form__error ]">
                  <i>{formErrors.message}</i>
                </span>
              )}
            </div>
            <input type="submit" className="[ btn ]" />
          </form>
        </div>
      </div>
    );
  }
}
