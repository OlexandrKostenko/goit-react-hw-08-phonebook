import { AuthNavLink } from "./AuthNav.styled"

export const AuthNav = () => {
    return (
        <div>
        <AuthNavLink to="/login">
          Login
        </AuthNavLink>
        <AuthNavLink to="/register">
          Register
            </AuthNavLink>
            </div>
    )
}