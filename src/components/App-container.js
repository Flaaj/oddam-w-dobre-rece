//dependencies:
import { connect } from "react-redux";
// view element:
import App from "./App";
// actions:
const mapStateToProps = (state) => {
    return {
        count: state.count,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
        handleDecrementClick: () => dispatch({ type: "DECREMENT" }),
    };
};
// container:
const Container = connect(mapStateToProps, mapDispatchToProps)(App);
export default Container;
