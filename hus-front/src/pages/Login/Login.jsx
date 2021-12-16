import React, { useState, useContext } from "react";
import { Field, Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { LoginContainer } from "./LoginStyled";
import userContext from "../../contexts/UserContext";
import Alert from "../../components/Alert/Alert";
const LoginValidation = Yup.object().shape({
  email: Yup.string()
    .email("El email es incorrecto")
    .required("Falta completar"),
  password: Yup.string()
    .min(7, "La contraseña debe contener mas de 7 caracteres")
    .max(50, "Excede los caracteres")
    .required("Este campo es requerido"),
});

export default function Login() {
  const [error, setError] = useState("");
  const history = useHistory();
  const { setGetUser } = useContext(userContext);
  return (
    <LoginContainer>
      <div className="formContainer" data-testid="loginComponent">
        <Alert />
        {error !== "" && (
          <div className="errorFetch">
            <h4>{error}</h4>
          </div>
        )}
        <h1>Iniciar sesión</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginValidation}
          onSubmit={(values) => {
            let data = {
              username: values.email,
              password: values.password,
            };

            let formBody = [];
            for (let property in data) {
              let encodedKey = encodeURIComponent(property);
              let encodedValue = encodeURIComponent(data[property]);
              formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");

            fetch("http://18.232.222.109:8080/api/login", {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded;charset=UTF-8",
              },
              body: formBody,
            }).then((res) => {
              if (res.status === 200) {
                res
                  .json()
                  .then((dataR) => ({ data: dataR, status: res.status }))
                  .then((res) => {
                    let access_token = res.data.access_token;
                    localStorage.setItem("token", `Bearer ${access_token}`);
                    setGetUser(true);
                    history.push("/");
                  });
              } else if (res.status === 401) {
                setError("Debes verificar tu email");
              } else {
                setError("El usuario o la contraseña no existe");
              }
            });
          }}
        >
          {({ errors, touched }) => (
            <Form className="formWrap">
              <label>
                <p className="textLabel">Correo electrónico</p>
                <Field
                  className={
                    errors.email && touched.email
                      ? "inputField-error"
                      : "inputField"
                  }
                  name="email"
                />
              </label>
              {errors.email && touched.email ? (
                <div className="errorContainer">{errors.email}</div>
              ) : null}
              <label>
                <p className="textLabel">Contraseña</p>
                <Field
                  type="password"
                  className={
                    errors.password && touched.password
                      ? "inputField-error"
                      : "inputField"
                  }
                  name="password"
                />
              </label>
              {errors.password && touched.password ? (
                <div className="errorContainer">{errors.password}</div>
              ) : null}
              <button className="submitBtn" type="submit">
                Ingresar
              </button>
            </Form>
          )}
        </Formik>
        <p className="finalText">
          ¿Aún no tenes cuenta?
          <Link to="/register" className="link">
            Registrate
          </Link>
        </p>
      </div>
    </LoginContainer>
  );
}
