import styles from "./Sidebar.module.css";
import Row from "../Row/Row";
import NavButton from "../NavButton/NavButton";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoSettingsOutline, IoStatsChartOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Row gap="1.6rem" direction="column" margin={{ bottom: "3.2rem" }}>
        <div className={styles.logoContainer}>
          <img src="./logo.png" alt="Logo" className={styles.logoImg} />
        </div>
        <h3 className={styles.logoText}>Routinely</h3>
      </Row>
      <Row gap="2.4rem" direction="column">
        <NavButton
          path="/dashboard"
          title={"Dashboard"}
          icon={
            <Row>
              <MdOutlineSpaceDashboard size={20} />
            </Row>
          }
        />
        <NavButton
          path="/stats"
          title={"Statistics"}
          icon={
            <Row>
              <IoStatsChartOutline size={20} />
            </Row>
          }
        />
        {/* <NavButton
          path="/settings"
          title={"Settings"}
          icon={
            <Row>
              <IoSettingsOutline size={20} />
            </Row>
          }
        /> */}
      </Row>
    </div>
  );
}

export default Sidebar;
