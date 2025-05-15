import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import Row from "../Row/Row";
import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu";
import Button from "../Button/Button";
import UserAvatar from "../UserAvatar/UserAvatar";
function Header() {
  const { userInfo } = useSelector((store) => store.auth);
  return (
    <div className={styles.header}>
      <Row justifyContent="space-between" alignItems="center">
        <Row direction="row" gap="1.6rem" justifyContent="flex-start">
          <span>
            <LuPanelRightClose size={20} />
          </span>
          <span>
            <LuPanelLeftClose size={20} />
          </span>
        </Row>
        <Row direction="row" gap="2.4rem" justifyContent="flex-start">
          <UserAvatar />
          <Button type={"primary"} label="logout"></Button>
        </Row>
      </Row>
    </div>
  );
}

export default Header;
