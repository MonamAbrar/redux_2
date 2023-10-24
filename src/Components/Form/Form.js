//import ReactDOM from 'react-dom/client';
import { connect } from "react-redux";

import { firstNameChanged } from "../../Redux/Reducers/mainReducerActions";

import React from "react";


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.dispatch(firstNameChanged(event.target.value));
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First name:
          <input type="text" value={this.props.firstName} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form> 
    );
  }
}


const mapStateToProps = (state) => {
  return {
    firstName: state.firstName
  }
}

export default connect(mapStateToProps)(Form);