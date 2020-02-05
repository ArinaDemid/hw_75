import {VALUE_CHANGE, DECODED_MESSAGE, ENCODED_MESSAGE } from "../actions/actionTypes";

const initialState = {
  message: {
    decode: '',
    encode: '',
    password: ''
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VALUE_CHANGE :
      return {...state, 
        message: {
        ...state.message,
        [action.name]: action.value
        }
      };
    case DECODED_MESSAGE:
      return {
        ...state,
        message: {
          ...state.message,
          encode: action.word,
          decode: '',
          password: ''
        }
      };
    case ENCODED_MESSAGE:
      return {
        ...state,
        message: {
          ...state.message,
          decode: action.word,
          encode: '',
          password: ''
        }
      }
    default:
      return state;
  }
};

export default reducer;