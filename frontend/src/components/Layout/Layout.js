import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../styles/Layout.css";
import { userMenu } from "./Menu/UserMenu";

const Layout = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarMenu = userMenu;
  //const [showLogoutModal, setShowLogoutModal] = useState(false);

  //logout handler
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successfuly");
    navigate("/login");
  };

  // const handleLogoutConfirmation = (confirm) => {
  //   setShowLogoutModal(false);
  //   if (confirm) {
  //     // Call the logout handler if the user confirms
  //     handleLogout();
  //   }
  // };

  return (
    <>
      <div className="row">
        <div className="col-1 sidebar">
          <div className="logo">
            <h6>JOB PORTAL</h6>
          </div>
          <hr />
          <p className="text-center">Welcome : {props.name}</p>
          <hr />
          <div className="menu d-flex flex-col ">
            <div className="">
              {sidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div className={`menu-item ${isActive && "active"}`}>
                    <i className={menu.icon}></i>
                    <Link to={menu.path}>{menu.name}</Link>
                  </div>
                );
              })}
            </div>
            <div className={`menu-item `} onClick={handleLogout}>
              <div className="logout-menu">
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9">{props.children}</div>
      </div>

      
    </>
  );
};

export default Layout;
