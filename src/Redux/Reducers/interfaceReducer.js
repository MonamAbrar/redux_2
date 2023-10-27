

const initialState = {
  theme: 'light',
}


const interfaceReducer = (state, action) => {

  switch (action.type) {

      case 'theme_changed':
        return {
          ...state,
          theme: action.payload.theme,
        }
        
      default:
        return initialState;
  }
}


export default interfaceReducer;