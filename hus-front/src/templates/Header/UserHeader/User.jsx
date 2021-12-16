import React, { useContext, useState, useEffect } from "react";
import { UserContainer } from "./UserStyled";
import userContext from "../../../contexts/UserContext";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { colors } from "../../../components/styles/utils/colors";
import { Link } from "react-router-dom";
import CrownImage from "./../../../images/crown_admin.svg";

// ***TODO***
// Linea 16 mejorar validacion deberia ser null o empty no undefined

export default function User({ page }) {
  const { userData } = useContext(userContext);
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
    <UserContainer>
      {page !== "phone" ? (
        <i className="fas fa-times" onClick={handleLogout}></i>
      ) : null}

      <div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild onInteractOutside>
            <div className="userContainer__admin">
              {isAdmin && <img alt="crown" src={CrownImage} />}
              <div className="userIcono">
                <h2>
                  {userData !== undefined
                    ? userData.name.charAt(0).toUpperCase() +
                      userData.lastname.charAt(0).toUpperCase()
                    : null}
                </h2>
              </div>
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            className="dropDownContent"
            style={{
              minWidth: 220,
              backgroundColor: `${colors.back}`,
              borderRadius: 6,
              padding: 5,
            }}
          >
            <DropdownMenu.Label></DropdownMenu.Label>

            <DropdownMenu.Group>
              {isUser && (
                <>
                  <DropdownMenu.Item style={{ padding: 10 }}>
                    <Link to="/my-reservations">Mis Reservas</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item style={{ padding: 10 }}>
                    <Link to="/my-favorites">Mis favoritos</Link>
                  </DropdownMenu.Item>
                </>
              )}
              {isAdmin && (
                <DropdownMenu.Item style={{ padding: 10 }}>
                  <Link to="/admin">Crear propiedad</Link>
                </DropdownMenu.Item>
              )}
            </DropdownMenu.Group>

            <DropdownMenu.Arrow style={{ fill: `${colors.back}` }} />
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <div className="userBienvenida">
          <p>Hola,</p>
          <p className="userName">{userData.name + " " + userData.lastname}</p>
        </div>
      </div>
    </UserContainer>
  );
}
