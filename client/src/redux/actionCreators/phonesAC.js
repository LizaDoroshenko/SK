import { ADD_PHONE } from "../actionTypes/phonesAT";

export const addPhoneAC = (payload) => {
  return {
    type: ADD_PHONE,
    payload
  }
}

