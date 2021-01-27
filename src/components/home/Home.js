//dependencies:
import { connect } from "react-redux";
// view element:
import Home from "./Home-view";
// actions:
const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
// container:
const Container = connect(mapStateToProps, mapDispatchToProps)(Home);
export default Container;