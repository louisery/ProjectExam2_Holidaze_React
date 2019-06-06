import React from "react";

// const emailRegex = RegExp(
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// );

export default class ContactComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clientName: "",
      email: "",
      message: "",
      touched: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.clientName]: event.target.value });
    this.setState({ [event.target.email]: event.target.value });
    this.setState({ [event.target.message]: event.target.value });
  };

  handleBlur = event => {
    this.setState({ touched: true });
  };

  render() {
    const { clientName, email, message, touched } = this.state;
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
          >
            <div className="[ form-group ]">
              <label htmlFor="clientName">Full Name:</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                className="[ form-control ]"
                noValidate
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                aria-required="true"
                required
              />
              {touched && clientName === "" && "Name is required"}
            </div>
            <div className="[ form-group ]">
              <label htmlFor="email">Email Address:</label>
              <input
                type="text"
                name="email"
                id="email"
                className="[ form-control ]"
                noValidate
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                aria-required="true"
                required
              />
              {touched && email === "" && "Email is required"}
            </div>
            <div className="[ form-group ]">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                rows="8"
                cols="80"
                className="[ form-control ]"
                noValidate
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                aria-required="true"
                required
              />
              {touched && message === "" && "Message is required"}
            </div>
            <input type="submit" className="[ btn ] [ btn--expand ]" />
          </form>
        </div>
      </div>
    );
  }
}
