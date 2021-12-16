import { Link, useLocation } from "react-router-dom";
import React, { useState, useContext } from "react";
import { HeaderContainer } from "./HeaderStyled";

import Button from "./../../components/shared/Button/Button";
import User from "./UserHeader/User";
import MenuPhone from "./MenuPhone/MenuPhone";
import SmallLogo from "../../images/SmallLogo";
import LargeLogo from "../../images/LargeLogo";
import userContext from "../../contexts/UserContext";

export default function Header(
  {
    /* userData, setUserData */
  }
) {
  const [checkMenuPhone, setCheckMenuPhone] = useState(false);
  const location = useLocation();
  const { userData, setUserData } = useContext(userContext);

  function showMenuPhone() {
    /**Abrir y cerrar el menu lateral de la vista phone con la x  y la boton burger*/
    setCheckMenuPhone(!checkMenuPhone);
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <div className="logoContainer">
          <LargeLogo />
          <SmallLogo />
          <h1>Sentite como en tu hogar</h1>
        </div>
      </Link>
      <div className="btnsContainer">
        <div className="menuPhone">
          {checkMenuPhone ? (
            <MenuPhone
              userData={userData}
              setUserData={setUserData}
              close={showMenuPhone}
            />
          ) : (
            <i
              className="fas fa-bars"
              data-testid="caca"
              onClick={() => showMenuPhone()}
            ></i>
          )}
        </div>

        <div className="data">
          {userData !== undefined ? (
            <User userData={userData} setUserData={setUserData} />
          ) : (
            <>
              {location.pathname === "/login" ? (
                <Button theme="primary" text="Crear Cuenta" to="/register" />
              ) : location.pathname === "/register" ? (
                <Button theme="primary" text="Iniciar sesión" to="/login" />
              ) : (
                <>
                  <Button theme="primary" text="Iniciar sesión" to="/login" />
                  <Button theme="primary" text="Crear Cuenta" to="/register" />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </HeaderContainer>
  );
}
