//import ReactDOM from 'react-dom/client';
import { connect } from "react-redux";

import { firstNameChanged, genderSelected } from "../../Redux/Reducers/mainReducerActions";
import { lastNameChanged } from "../../Redux/Reducers/mainReducerActions";


import React from "react";


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleInputChange(event) {

    switch(event.target.name) {
    
      case 'firstName' :
        this.props.dispatch(firstNameChanged(event.target.value));
        break;

      case 'lastName' :
        this.props.dispatch(lastNameChanged(event.target.value));
        break;  

      case 'gender' :
        this.props.dispatch(genderSelected(event.target.dataset.genderValue));
        break;

      default:
        return;

      }

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
          <input type="text" value={this.props.firstName} name="firstName" onChange={this.handleInputChange}/>
        </label>
        <br></br>
        <label>
          Last name:
          <input type="text" value={this.props.lastName} name="lastName" onChange={this.handleInputChange}/>
        </label>

        <br></br>
        Gender: Male:
        <input
          type="radio"
          name="gender"
          data-gender-value='M'
          checked={this.props.gender==='M'? true : false}
          onChange={this.handleInputChange}
        />

        Female:
        <input
          type="radio"
          name="gender"
          data-gender-value='F'
          checked={this.props.gender==='F'? true : false}
          onChange={this.handleInputChange}
        />

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