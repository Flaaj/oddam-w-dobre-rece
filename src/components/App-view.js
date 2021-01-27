// dependencies:
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// child components:
import Home from "./home/Home";
import LoggedOut from "./loggedOut/LoggedOut";
import Login from "./login/Login";
import Register from "./register/Register";
// component:
const App = () => (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/logowanie" component={Login} />
        <Route exact path="/rejestracja" component={Register} />
        <Route exact path="/wylogowano" component={LoggedOut} />
        <Route exact path="/panel" />
    </Router>
);
export default App;
