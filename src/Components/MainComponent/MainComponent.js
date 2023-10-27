import React from "react";
import { connect } from "react-redux";
import { themeChanged } from "../../Redux/Actions/interfaceReducerActions";

import Form from "../Form/Form";

import './MainComponent.css';


class MainComponent extends React.Component {

  render(props) {
    return (
      <div className={`theme-${this.props.theme}`}>
        Theme:
        <select value={this.props.theme} onChange={(e) => {this.props.dispatch(themeChanged(e.target.value))}}>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>

        <br></br>
        <br></br>

        <Form/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    theme: state.interface.theme
  }
};

export default connect(mapStateToProps)(MainComponent);