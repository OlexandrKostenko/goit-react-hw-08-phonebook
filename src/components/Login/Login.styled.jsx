import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AuthNavLink = styled(NavLink)`
margin-left: 10px;
border-radius: 10px;
cursor: pointer;
background-color: orange;
color: white;
padding: 6px;
text-decoration:none;

&.active {
    background-color: #ab810f;
    color: white;
}

:hover {
    background-color: blue;
}`;

export const Label = styled.p`
margin: 10px 0 10px 0;`;

export const SubmitButton = styled.button`
margin: 20px 0 20px 0;
border-radius: 10px;
cursor: pointer;
background-color: orange;
color: white;
padding: 6px;

:hover {
    background-color: blue;
}
`;

export const FormWrapper = styled.form`
width: 250px;
display: flex;
flex-direction: column;`;

export const Input = styled.input`
width: 242px;
font-size: 20px;
border-radius: 10px;`;