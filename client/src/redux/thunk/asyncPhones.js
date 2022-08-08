import { addPhoneAC, } from "../actionCreators/phonesAC"


export const fetchAddPhone = (phone) => {

  return (dispatch) => {
    fetch("/phones", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(phone)
    })
      .then((res) => res.json())
      .then((data) => dispatch(addPhoneAC(data)))
  }
}


