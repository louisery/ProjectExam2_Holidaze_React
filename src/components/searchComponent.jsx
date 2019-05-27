import React from "react";

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
  }

  handleSearchTerm() {
    const app = this;
    let phrase = app.refs.searchTerm.value;
    app.props.onSearchTerm(phrase);
  }

  render() {
    const app = this;

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
              onChange={app.handleCharacterSearchTerm}
            />
          </div>
        </div>
      </div>
    );
  }
}
