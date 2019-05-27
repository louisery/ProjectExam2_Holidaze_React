import React from "react";

export default class FooterComponent extends React.Component {
  render() {
    return (
      <div>
        <footer className="[ footer py-4 ]">
          <div className="[ container ]">
            <div className="[ row ]">
              <div className="[ col-md-3 ]">
                <div className="[ footer__text ]">
                  <p className="[ footer__text--logo ]">Holidaze</p>
                  <p className="[ footer__text--copyright ]">
                    Copyright &copy; 2019
                  </p>
                </div>
              </div>
              <div className="[ col-md-6 ] [ text-center ] [ footer__social ]">
                <i className="[ fab fa-facebook-square ] [ footer__social--link ]" />
                <i className="[ fab fa-instagram ] [ footer__social--link ]" />
                <i className="[ fab fa-twitter-square ] [ footer__social--link ]" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
