import Logo from "../../Customer/UserInfo/Logo";
import WelcomeMessage from "../../Customer/UserInfo/WelcomeMessage";
import Logout from "../../Customer/UserNav/Logout";
import "./style.scss";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const StoreNav = () => {
  return (
    <div className="store-navbar">
      <div className="logo-welcome-container">
        <div className="logo">
          <Logo />
        </div>
        <div className="welcome-message">
          {/* <WelcomeMessage name={"Andy"} /> */}
          <h3>Hi Andy, how've ya bean?</h3>
        </div>
      </div>
      <div className="logout-manage-menu-container">
        {/* <Logout /> */}
        <ExitToAppIcon />
      </div>
    </div>
  );
};

export default StoreNav;
