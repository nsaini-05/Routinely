import { NavLink } from "react-router";
import styles from "./NavButton.module.css";
import Row from "../Row/Row";
function NavButton({ path, icon, title }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? `${styles.linkButton} ${styles.active}` : styles.linkButton
      }
    >
      <Row direction="row" gap="1.2rem" justifyContent="flex-start">
        <span>{icon}</span>
        <span>{title}</span>
      </Row>
    </NavLink>
  );
}

export default NavButton;
