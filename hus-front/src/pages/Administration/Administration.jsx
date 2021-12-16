import React, { useEffect, useState } from "react";
import { AdminContainer } from "./AdministrationStyled";
import Header from "./../../components/Administration/Header/Header";
import FormAdmin from "../../components/Administration/Form/Form";
import { Redirect } from "react-router-dom";
export default function Administration() {
  const [isAdmin, setIsAdmin] = useState(true);

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
    if (isAdmin) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  return (
    <AdminContainer>
      {isAdmin ? (
        <>
          <Header />
          <h1 className="title" data-testid="isAdmin">
            Crear propiedad
          </h1>
          <div className="formContainer">
            <FormAdmin />
          </div>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </AdminContainer>
  );
}
