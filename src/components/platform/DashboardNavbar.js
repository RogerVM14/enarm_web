import React, { useContext, useState } from "react";
import userIcon from "../../assets/icons/platform/default-user-icon.png";
import ModalContact from "../ModalContact";
import { PlatformResponsiveContext } from "../../contexts/platform/PlatformResponsiveContext";
import NavbarContentMedium from "./responsive/NavbarContentMedium";
import NavbarContentSmall from "./responsive/NavbarContentSmall";
import "../../css/platform/components/NavbarHeader.css";
import SearchBarSmart from "./subComponents/SearchBarSmart";
import { useLogout } from "../../contexts/useLogout";
import { useSelector } from "react-redux";
import { selectUserName } from "../../store/reducers/user/UserInformationSlice";

const DashboardNavbar = (props) => {
  const [usermodal, setUserModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const { device } = useContext(PlatformResponsiveContext);
  const logout = useLogout();
  const userName = useSelector(selectUserName);
  return (
    <header
      className={`platform-el ${device}`}
      onMouseLeave={() => setUserModal(false)}
    >
      <nav className={`header-nav ${device}`}>
        <div className={`navbar-tools ${device}`}>
          {device === "smart" ? (
            <>
              <NavbarContentSmall
                handleContactModal={(e) => {
                  setContactModal(true);
                }}
                handleShowMenu={() => {
                  props.handleSmartMenu();
                }}
              />
            </>
          ) : (
            <NavbarContentMedium
              searchButton={searchButton}
              handleSearchButton={(e) => {
                setSearchButton(!searchButton);
              }}
              handleContactModal={(e) => {
                setContactModal(true);
              }}
              handleUserModal={(e) => {
                setUserModal(true);
              }}
              userIcon={userIcon}
              userData={userName}
            />
          )}

          {usermodal && (
            <div
              className="u-modal-user"
              onMouseLeave={() => setUserModal(false)}
            >
              <div className="u-modal-container">
                <div>
                  <i className="material-icons">settings</i>
                  <span className="roboto-14">Mi cuenta</span>
                </div>
                <div
                  onClick={() => {
                    logout();
                  }}
                >
                  <i className="material-icons">logout</i>
                  <span className="roboto-14">Cerrar Sesión</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {device === "smart" && <SearchBarSmart />}
      </nav>
      {contactModal && (
        <ModalContact
          closeModal={(e) => {
            setContactModal(false);
          }}
        />
      )}
    </header>
  );
};

export default DashboardNavbar;
