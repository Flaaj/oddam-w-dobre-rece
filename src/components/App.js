//dependencies:
import { connect } from "react-redux";
// view element:
import App from "./App-view";
// actions:
const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
// container:
const Container = connect(mapStateToProps, mapDispatchToProps)(App);
export default Container;
