import { SubmitButton } from "components/Form/Form.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUserName } from "redux/Auth/auth.selector"
import { authLogoutThunk } from "redux/Auth/authLogoutThunk";
import { LogoutButton, NameLabel, UserMenuWrapper } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectAuthUserName);

    const handleClick = async (event) => {
        try {
            await dispatch(authLogoutThunk()).unwrap();

        } catch (e) {
            console.log(e);
        }
    }
    return(
        <UserMenuWrapper>
            <NameLabel>Welcome, {userName}</NameLabel>
  <LogoutButton type="button" onClick={handleClick}>Logout</LogoutButton>
</UserMenuWrapper>
    )
}