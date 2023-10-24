//import ReactDOM from 'react-dom/client';
import { connect } from "react-redux";

import { firstNameChanged } from "../../Redux/Reducers/mainReducerActions";
import { lastNameChanged } from "../../Redux/Reducers/mainReducerActions";
import { genderMaleClicked } from "../../Redux/Reducers/mainReducerActions";

import React from "react";


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.props.dispatch(firstNameChanged(event.target.value));
  }

  handleLastNameChange(event) {
    this.props.dispatch(lastNameChanged(event.target.value));
  }

  handleGenderMaleClick(event) {
    this.props.dispatch(genderMaleClicked(event.target.value));
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
          <input type="text" value={this.props.firstName} onChange={this.handleFirstNameChange}/>
        </label>
        <br></br>
        <label>
          Last name:
          <input type="text" value={this.props.lastName} onChange={this.handleLastNameChange}/>
        </label>
        <br></br>
        <label>
          Gender:
          <input type="radio" value={this.props.Male} onClick={this.handleGenderMaleClick}/>
          <input type="radio" value={this.props.Female} onClick={this.handleGenderFemaleClick}/>
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form> 
    );
  }
}


const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName
    }  
}

export default connect(mapStateToProps)(Form);