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
}`