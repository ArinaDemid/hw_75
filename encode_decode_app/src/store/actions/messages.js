import {VALUE_CHANGE, DECODED_MESSAGE, ENCODED_MESSAGE} from "./actionTypes";
import axios from '../../axios-api';

export const valueChange = (name, value) => ({ type: VALUE_CHANGE, name, value });
export const fetchEncodedMessage = (word) => ({ type: DECODED_MESSAGE, word });
export const fetchDecodedMessage = (word) => ({ type: ENCODED_MESSAGE, word });

export const decodedMessage = (event, message) => {
  event.preventDefault();
  return async dispatch => {
    const response = await axios.post('/encode', message);
    dispatch(fetchEncodedMessage(response.data.encoded));
  }
};

export const encodedMessage = (event, message) => {
  event.preventDefault();
  return async dispatch => {
    const response = await axios.post('/decode', message);
    dispatch(fetchDecodedMessage(response.data.decoded));
  }
};
