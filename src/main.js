import "./styles/app.scss";
import React from "react";
import { AppContainer } from "react-hot-loader";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter } from "react-router-dom";

import "./styles/app.scss";
import App from "./components/app/app";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import HotelSpecific from "./pages/hotel-specific";
import Contact from "./components/contactComponent";
import Hotel from "./pages/hotels";
import Admin from "./pages/admin";
import Enquiry from "./pages/enquiry";
import Success from "./pages/success";

const routes = (
  <HashRouter>
    <Switch>
      <App>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hotels" component={Hotel} />
        <Route path="/hotel-specific/:id" component={HotelSpecific} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/enquiry" component={Enquiry} />
        <Route exact path="/success" component={Success} />
      </App>
    </Switch>
  </HashRouter>
);

const outlet = document.getElementById("app");

const render = () => {
  ReactDOM.render(<AppContainer>{routes}</AppContainer>, outlet);
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(render);
}
