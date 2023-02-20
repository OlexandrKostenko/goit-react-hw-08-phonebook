import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper } from "./App.styled";
import { Contacts } from "./Contacts/Contacts";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

export const App = () => {

  return (
    <BrowserRouter>
    <Wrapper>
      <Routes >
      
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path="/contacts" element={<Contacts />} />
      
      <Route path='*' element={<Contacts />} />  
      </Routes>
      
      </Wrapper>
      </BrowserRouter>
  );
};
