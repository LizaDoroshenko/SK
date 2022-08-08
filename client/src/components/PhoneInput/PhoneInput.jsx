import React from 'react';
import './PhoneInput.css';
import codes from '../../config/codes';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddPhone } from '../../redux/thunk/asyncPhones';
import Number from '../Number/Number';

function PhoneInput(props) {

  const { phones } = useSelector(state => state.phones)
  const dispatch = useDispatch();

  const [isValid, setisValid] = useState('');
  const [subm, setSubm] = useState(true);

  //отправка данных
  const addPhone = (e) => { 
    e.preventDefault();
    const re = /^[0-9]{3,10}$/;
    const phone = {
      number: e.target.code.value + e.target.phone.value
    }
    if (re.test(e.target.phone.value)) { 
      dispatch(fetchAddPhone(phone));
    } else {
      setisValid('Номер должен содержать от 3 до 10 цифр');
    }
  }
  
  //отрисовка сообщения о валидации
  const valid = (e) => { 
    const re = /^[0-9]{3,10}$/;
    if (re.test(e.target.value)) {
      setisValid('');
      setSubm(false);
    } else { 
      setisValid('Номер должен содержать от 3 до 10 цифр');
      setSubm(true);
    }
  }

  return (
    <div className='contant'>
      <div className='bord'>
      <form onSubmit={addPhone}>
       <select name='code'>
           {codes.map(el => <option key={el}>{el}</option>)}
        </select>
        <input name='phone' onChange={valid} pattern='[0-9]{3,10}' type='tel' required />
        <button disabled={subm} type='submit'>Send</button>
        </form>
      <p>{isValid}</p>
      </div>
      {phones.map((el) => {
        return <Number key={el.id} phone={el.number} />;
      })}
    </div>
  );
}

export default PhoneInput;