import { useState } from "react";
import { useDispatch } from "react-redux"
import { authRegisterThunk } from "redux/Auth/authRegisterThunk";
import { AuthNavLink, FormWrapper, Input, Label, SubmitButton } from "./Register.styled";

const initState = {
    name: '',
    email: '',
    password: '',
}

export const Register = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState(initState);
    
    const handleChange = event => {
        const { value, name } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await dispatch(authRegisterThunk({ name: values.name, email: values.email, password: values.password })).unwrap();
            setValues(initState);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
        <FormWrapper onSubmit={handleSubmit}>
            <h1>Register Page</h1>
                <div>
                    <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" value={values.name} onChange={handleChange} />
                
            </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                <Input type="text" id="email" name="email" value={values.email} onChange={handleChange}/>
                
            </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password" value={values.password} onChange={handleChange}/>
                
            </div>
            <SubmitButton type="submit">Join</SubmitButton>
        </FormWrapper>

        <AuthNavLink to="/login">
          Already has account?
        </AuthNavLink>
            </>
    )
}