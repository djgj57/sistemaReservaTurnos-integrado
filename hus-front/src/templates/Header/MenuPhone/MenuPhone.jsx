import { MenuPhoneContainer } from "./MenuPhoneStyled";
import { Link } from "react-router-dom";
import User from "../UserHeader/User";
import { useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import userContext from "../../../contexts/UserContext";

export default function MenuPhone({ close }) {

  const { userData, setUserData} = useContext(userContext);
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    let jwt = localStorage.getItem("token");
    const parseJwt = (token) => {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    };
    let isAdmin = parseJwt(jwt)?.roles.includes("ROLE_ADMIN");
    let isUser = parseJwt(jwt)?.roles.includes("ROLE_USER");
    if (isAdmin) {
      setIsAdmin(true);
    }
    if (isUser) {
      setIsUser(true);
    } 
  }, []);

  return (
    <MenuPhoneContainer>
      <div className="menu" data-testid="mobile-test">
        <i className="fas fa-times" onClick={() => close()}></i>
        {userData !== undefined ? (
          <User userData={userData} page="phone" />
        ) : (
          <p className="title">menú</p>
        )}
      </div>
      <div className="buttons">
        {isUser && (<>
            <Link to="/my-reservations">
                <button>Mis reservas</button>
            </Link>
            <Link to="/my-favorites">
                <button>Mis favoritos</button>
            </Link>
          </>)}
          {isAdmin && (
            <Link to="/admin">
                <button>Crear propiedad</button>
            </Link>
            )}
           {(userData === undefined) && (location.pathname === "/") && (
            <>
              <Link to="/register">
                <button page="register" onClick={() => close()}>Crear cuenta</button>
              </Link>
              <Link to="/login">
                <button onClick={() => close()}>Inciar sesión</button>
              </Link>
            </>
          )} 
          {(userData === undefined) && (location.pathname === "/register")&& (
            <Link to="/login">
              <button>Inciar sesión</button>
            </Link>
          )} 
          {(userData === undefined) && (location.pathname === "/login")&&(
            <Link to="/register">
              <button page="register">Crear cuenta</button>
            </Link>
          )}

        {userData !== undefined ? (
          <button className="buttonExit" onClick={handleLogout}>
            ¿Deseas <span>cerrar sesión</span>?
          </button>
        ) : null}
      </div>

      <div className="iconosContainer">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </MenuPhoneContainer>
  );
}
