import { publicApi } from "http/http";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { authLoginThunk } from "redux/Auth/authLoginThunk";
import { FormWrapper, Input, Label, SubmitButton } from "./Login.styled";

const initState = {
    email: '',
    password: '',
}

export const Login = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState(initState)

    const handleChange = event => {
        const { value, name } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await dispatch(authLoginThunk({ email: values.email, password: values.password })).unwrap();
            setValues(initState);
        } catch (e) {
            console.log(e);
        }
    }
    
    return (
        <FormWrapper onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <div>
                <Input type="text" id="email" name="email" value={values.email} onChange={handleChange}/>
                <Label htmlFor="email">Email</Label>
            </div>
            <div>
                <Input type="password" id="password" name="password" value={values.password} onChange={handleChange}/>
                <Label htmlFor="password">Password</Label>
            </div>
            <SubmitButton type="submit">Login</SubmitButton>
        </FormWrapper>
    )
}