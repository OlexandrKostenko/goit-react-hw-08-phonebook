import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { selectAuthLogin } from "redux/Auth/auth.selector";
import { refreshUser } from "redux/Auth/authRefreshThunk";
import { Wrapper } from "./App.styled";
import { AuthNav } from "./AuthNav/AuthNav";
import { Contacts } from "./Contacts/Contacts";
import { Login } from "./Login/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Register } from "./Register/Register";
import { UserMenu } from "./UserMenu/UserMenu";

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthLogin);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Wrapper>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      <Routes >
      <Route path="" element={<PublicRoute />}>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Route>
          
      <Route path="" element={<PrivateRoute />}>
        <Route path="/contacts" element={<Contacts />} />
      </Route>
      
      <Route path='*' element={<Contacts />} />  
      </Routes>
      
      </Wrapper>
      </BrowserRouter>
  );
};
