import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Detail from "./component/content/Detail";
import Explore from "./component/content/Explore";
import { Provider } from "react-redux";
import storeS from "./redux/store";

export default function Main() {
  return (
    <Provider store={storeS}>
      <Router>
        <Switch>
          <Route path="/Detail" component={Detail}>
            {/* <About /> */}
          </Route>
          <Route path="/Explore" component={Explore}>
            {/* <Users /> */}
          </Route>
          <Route path="/" component={App}>
            {/* <Home /> */}
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
