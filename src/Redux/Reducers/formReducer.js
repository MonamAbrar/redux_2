

const initialState = {
  firstName: 'default',
  lastName: 'default',
  gender: '',
  email: '',
  location: '',
  date: '',
}


const formReducer = (state, action) => {

  switch (action.type) {

    case 'firstName_changed':
      return {
        ...state,
        firstName: action.payload.firstName,
      }

      case 'lastName_changed':
        return {
          ...state,
          lastName: action.payload.lastName,
        }

      case 'gender_selected':
        return {
          ...state,
          gender: action.payload.gender,
        }
        
      case 'email_changed':
        return {
          ...state,
          email: action.payload.email,
        }
      
      case 'location_selected':
        return {
          ...state,
          location: action.payload.location,
        }

      case 'date_selected':
        return {
          ...state,
          date: action.payload.date,
        }
        
      default:
        return initialState;
  }
}


export default formReducer;