// dependencies:
import React from "react";
import Router, { Route } from "react-router";
// child components:
// component:
const App = () => (
    <Router>
        <Route path="/" component={Home}/>
        <Route path="/logowanie"/>
        <Route path="/rejestracja"/>
        <Route path="/wylogowano"/>
        <Route path="/panel"/>
    </Router>
);
export default App;
