//import ReactDOM from 'react-dom/client';
import { connect } from "react-redux";

import { firstNameChanged, genderSelected, emailChanged, locationSelected, dateSelected } from "../../Redux/Reducers/mainReducerActions";
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
        
      case 'email' :
        this.props.dispatch(emailChanged(event.target.value));
        break;

      case 'location' :
        this.props.dispatch(locationSelected(event.target.value));
        break;
      
      case 'date' :
        this.props.dispatch(dateSelected(event.target.value));
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

        <label>
          Email:
          <input type="email" value={this.props.email} name="email" onChange={this.handleInputChange}/>
        </label>

        <br></br>

        <label>
          Location:
          <select name="location" onChange={this.handleInputChange}>
            <option value="">- select location -</option>
            <option value="lahore">Lahore</option>
            <option value="karachi">Karachi</option>
            <option value="islamabad">Islamabad</option>
          </select>
        </label>

        <br></br>

        <label>
          Date of Birth: 
          <input type="date" value={this.props.date} name="date" onChange={this.handleInputChange}/>
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
    lastName: state.lastName,
    gender: state.gender,
    email: state.email,
    date: state.date,
    }  
}

export default connect(mapStateToProps)(Form);