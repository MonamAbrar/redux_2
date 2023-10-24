

const initialState = {
  firstName: 'default',
}


const mainReducer = (state, action) => {

  switch (action.type) {

    case 'firstName_changed':
      return{
        ...state,
        firstName: action.payload.firstName,
      }
    default:
      return initialState;
  }
}


export default mainReducer;