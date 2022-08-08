import './App.css';
import { Provider } from 'react-redux';
import { store } from "../../redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneInput from '../PhoneInput/PhoneInput';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PhoneInput/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
