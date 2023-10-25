//import ReactDOM from 'react-dom/client';
import { connect } from "react-redux";

import { firstNameChanged, genderSelected } from "../../Redux/Reducers/mainReducerActions";
import { lastNameChanged } from "../../Redux/Reducers/mainReducerActions";


import React from "react";


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.GenderMaleonClick = this.GenderMaleonClick.bind(this);
    this.GenderFemaleonClick = this.GenderFemaleonClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.props.dispatch(firstNameChanged(event.target.value));
  }

  handleLastNameChange(event) {
    this.props.dispatch(lastNameChanged(event.target.value));
  }

  GenderMaleonClick(event) {
    this.props.dispatch(genderSelected('M'));
  }

  GenderFemaleonClick(event) {
    this.props.dispatch(genderSelected('F'));
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
        Gender: Male:
        <input type="radio" name="gender" checked={this.props.gender==='M'? true : false} onClick={this.GenderMaleonClick} />

        Female:
        <input type="radio" name="gender" checked={this.props.gender==='F'? true : false} onClick={this.GenderFemaleonClick}/>

        <br></br>
        <input type="submit" value="Submit" />

      </form> 
    );
  }
}


const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    gender: state.gender
    }  
}

export default connect(mapStateToProps)(Form);