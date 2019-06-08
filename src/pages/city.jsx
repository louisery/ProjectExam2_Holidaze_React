import React from "react";

export default class City extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="[ row ]">
        <div className="[ row ]">
          <div className="[ col-sm-12 ] [ img__container ]">
            <img
              src="https://images.unsplash.com/photo-1544085311-11a028465b03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
              className="[ img-fluid ]"
              alt="Buildings and houses in Bergen by Florencia Viadana"
            />
            <div className="[ img__text--center ]">
              <h1>About Bergen</h1>
            </div>
          </div>
        </div>

        <div className="[ row ]">
          <div className="[ col-sm-4 col-md-4 col-sm-12 col-xs-12 ] [ city--padding ]">
            <h2>The City</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              iste impedit earum maxime veniam? Aspernatur reprehenderit, veniam
              dignissimos velit deleniti provident reiciendis maxime nostrum,
              illum rem, quasi natus earum delectus!
            </p>
          </div>
          <div className="[ col-sm-4 col-md-4 col-sm-12 col-xs-12 ] [ city--padding ]">
            <h2>The Attractions</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              iste impedit earum maxime veniam? Aspernatur reprehenderit, veniam
              dignissimos velit deleniti provident reiciendis maxime nostrum,
              illum rem, quasi natus earum delectus!
            </p>
          </div>
          <div className="[ col-sm-4 col-md-4 col-sm-12 col-xs-12 ] [ city--padding ]">
            <h2>The History</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              iste impedit earum maxime veniam? Aspernatur reprehenderit, veniam
              dignissimos velit deleniti provident reiciendis maxime nostrum,
              illum rem, quasi natus earum delectus!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Photo by Michael Fousert from unsplash
 */
