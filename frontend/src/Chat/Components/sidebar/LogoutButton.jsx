import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import "./logoutButton.scss"; // Import the SCSS file

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="logout-button">
      {!loading ? (
        <BiLogOut className="logout-icon" onClick={logout} />
      ) : (
        <span className="loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
