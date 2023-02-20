import { useDispatch } from "react-redux"

export const Login = () => {
    const dispatch = useDispatch();

    
    return (
        <form>
            <h1>Login Page</h1>
            <div>
                <input type="text" id="email" name="email" value='email' />
                <label htmlFor="email">Email</label>
            </div>
            <div>
                <input type="password" id="password" name="password" value='password' />
                <label htmlFor="password">Password</label>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}