import React from "react";
import EstablishmentsData from "../json/establishments.json";

export default class EnquiryFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWord: "",
      searchResults: []
    };
  }

  handleSearch(event) {
    let searchWord = event.target.value;

    let searchHits = EstablishmentsData.filter(
      est =>
        est.establishmentName.toLowerCase().indexOf(searchWord.toLowerCase()) >=
        0
    );

    if (searchWord.length > 0) {
      this.setState({
        searchWord: searchWord,
        searchResults: searchHits
      });
    } else {
      this.setState({
        searchWord: searchWord,
        searchResults: []
      });
    }
  }

  renderSearchResults() {
    return (
      <div>
        {this.state.searchResults.map(r => (
          <div>{r.establishmentName}</div>
        ))}
      </div>
    );
  }

  render() {
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
              <label for="establishment">Establishment:</label>
              <input
                type="text"
                name="establishment"
                id="establishment"
                readonly
                className="[ form-control ]"
                onChange={this.handleSearch.bind(this)}
              />
              <div className="search-sug">
                <p>Suggestion: {this.renderSearchResults()}</p>
              </div>
            </div>
            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label for="clientName">Full name:</label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  className="[ form-control ]"
                />
              </div>
              <div className="[ col-sm-6 ]">
                <label for="email">Email Address:</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="[ form-control ]"
                />
              </div>
            </div>
            <div className="[ form-group ] [ row ]">
              <div className="[ col-sm-6 ]">
                <label for="checkin">Check-in:</label>
                <input
                  type="date"
                  name="checkin"
                  id="checkin"
                  className="[ form-control ]"
                />
              </div>
              <div className="[ col-sm-6 ]">
                <label for="checkout">Check-out:</label>
                <input
                  type="date"
                  name="checkout"
                  id="checkout"
                  className="[ form-control ]"
                />
              </div>
            </div>
            <input type="submit" className="[ btn ]" />
          </form>
        </div>
      </div>
    );
  }
}
