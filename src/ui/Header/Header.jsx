import styles from "./Header.module.css";
import Row from "../Row/Row";
import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu";
import Button from "../Button/Button";
import UserAvatar from "../UserAvatar/UserAvatar";
import { logoutUser as logoutUserApi } from "../../services/authService";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { clearUser } from "../../features/authentication/authSlice";
function Header() {
  const dispatch = useDispatch();
  const logoutUser = async () => {
    const { error } = await logoutUserApi();
    if (error) {
      toast.error(error.message);
    } else {
      dispatch(clearUser());
    }
  };
  return (
    <div className={styles.header}>
      <Row justifyContent="space-between" alignItems="center">
        <Row direction="row" gap="1.6rem" justifyContent="flex-start">
          {/* <span>
            <LuPanelRightClose size={20} />
          </span>
          <span>
            <LuPanelLeftClose size={20} />
          </span> */}
        </Row>
        <Row direction="row" gap="2.4rem" justifyContent="flex-start">
          <UserAvatar />
          <Button type={"primary"} label="logout" onClick={logoutUser}></Button>
        </Row>
      </Row>
    </div>
  );
}

export default Header;
