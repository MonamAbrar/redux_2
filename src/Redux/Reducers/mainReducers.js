

const initialState = {
  firstName: 'default',
  lastName: 'default',
}


const mainReducer = (state, action) => {

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

      case 'genderMale_clicked':
        return {
          ...state,
          genderMale: action.payload.genderMale,
        }

    default:
      return initialState;
  }
}


export default mainReducer;