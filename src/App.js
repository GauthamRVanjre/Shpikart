import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Error404 from "./Pages/Error404/Error404";
import Detail from "./Pages/Detail/Detail";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Cart" component={Cart} />
          <Route path="/product/:id" component={Detail} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
};

// <Navbar />
//<Home />

export default App;
