import { ADD_PHONE } from '../actionTypes/phonesAT'

const initialState = { phones: [], }

export const phonesReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PHONE:
      return {
        ...state,
        phones: [...state.phones, action.payload],
      }

    default:
      return state
  }
}
