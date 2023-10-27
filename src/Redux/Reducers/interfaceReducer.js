

const initialState = {
  theme: 'light',
}


const interfaceReducer = (state = initialState, action) => {

  switch (action.type) {

      case 'theme_changed':
        return {
          ...state,
          theme: action.payload.theme,
        }
        
      default:
        return state;
  }
}


export default interfaceReducer;