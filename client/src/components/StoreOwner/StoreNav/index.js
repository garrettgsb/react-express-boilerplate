import Logo from "../../Customer/UserInfo/Logo";
import WelcomeMessage from "../../Customer/UserInfo/WelcomeMessage";
import Logout from "../../Customer/UserNav/Logout";
import "./style.scss";

const StoreNav = () => {
  return (
    <div className="store-navbar">
      <div className="logo-welcome-container">
        <Logo />
        <WelcomeMessage name="Travis" />
      </div>
      <div className="logout-manage-menu-container">
        {/* <Logout /> */}
        <h3>Manage Menu</h3>
        <h3>Logout</h3>
      </div>
    </div>
  );
};

export default StoreNav;
