import styles from "./UserAvatar.module.css";
import { useSelector } from "react-redux";
import { getInitials } from "../../utils/stringUtils";
function UserAvatar() {
  const { userInfo } = useSelector((store) => store.auth);
  const initials = getInitials(userInfo.fullName);

  return <div className={styles.initials}>{initials}</div>;
}

export default UserAvatar;
