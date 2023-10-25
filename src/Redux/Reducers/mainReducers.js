

const initialState = {
  firstName: 'default',
  lastName: 'default',
  gender: '',
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

      case 'gender_selected':
        return {
          ...state,
          gender: action.payload.gender,
        }

      default:
        return initialState;
  }
}


export default mainReducer;