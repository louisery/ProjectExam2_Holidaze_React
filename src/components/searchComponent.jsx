import React from "react";
import EstablishmentsData from "../json/establishments.json";
import { Link } from "react-router-dom";
import ToggleDisplay from "react-toggle-display";

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWord: "",
      searchResults: [],
      show: false
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
        searchResults: searchHits,
        show: true
      });
    } else {
      this.setState({
        searchWord: searchWord,
        searchResults: [],
        show: false
      });
    }
  }

  renderSearchResults() {
    return (
      <div className="[ search__links ]">
        {this.state.searchResults.map(r => (
          <Link to={`/hotel-specific/${r.id}`} key={`searchresult-${r.id}`}>
            <div className="[ search__result--hover ]">
              <img src={r.imageUrl} className="[ search__img--size ]" />
              {r.establishmentName}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-sm-12 ] [ search ]">
          <h2>Find a Place to Stay</h2>
          <p className="[ text-center ]">
            Discover the best Hotels, Guesthouses and B&B's in Bergen
          </p>
          <br />
          <div className="[ col-sm-10 ] [ col-centered ]">
            <input
              type="text"
              class="[ form-control ]"
              placeholder="Search for a Hotel, Guesthouse or B&B"
              aria-label="Search"
              ref="searchTerm"
              onChange={this.handleSearch.bind(this)}
            />
            <ToggleDisplay if={this.state.show}>
              <div className="[ search__results ]">
                {this.renderSearchResults()}
              </div>
            </ToggleDisplay>
          </div>
        </div>
      </div>
    );
  }
}
