import React, { useContext, useState } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { RegisterContainer } from "./RegisterStyled";
import ModalSuccess from "../../components/Register/ModalSuccess/ModalSuccess";
import Loader from "../../components/shared/Loader/Loader";
import userContext from "../../contexts/UserContext";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Demasiado corto")
    .max(50, "Excede los caracteres")
    .required("Falta completar"),
  lastname: Yup.string()
    .min(2, "Demasiado corto")
    .max(50, "Excede los caracteres")
    .required("Falta completar"),
  email: Yup.string()
    .email("El email es incorrecto")
    .required("Falta completar"),
  password: Yup.string()
    .min(7, "La contraseña debe contener mas de 7 caracteres")
    .max(50, "Excede los caracteres")
    .required("Este campo es requerido"),
  passwordConfirmation: Yup.string()
    .min(7, "La contraseña no coincide")
    .oneOf([Yup.ref("password"), null], "La contraseña no coincide")
    .required("Este campo es requerido"),
});

export default function Register() {
  const history = useHistory();
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userData, setUserData, getUser, setGetUser } =
    useContext(userContext);
  return (
    <RegisterContainer>
      <div className="formContainer">
        <h1>Crear Cuenta</h1>
        <Formik
          initialValues={{
            name: "",
            lastname: "",
            email: "",
            password: "",
            passwordConfirmation: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            setError("");
            setIsLoading(true);
            let data = {
              name: values.name,
              lastname: values.lastname,
              username: values.email,
              password: values.password,
            };
            await fetch("http://18.232.222.109:8080/api/open/user/save", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }).then((res) => {
              if (res.status === 201) {
                setIsLoading(false);
                setIsSuccess(true);
              } else {
                setIsLoading(false);
                setError(
                  "Lamentablemente no ha podido registrarse. Por favor intente más tarde"
                );
              }
            });
          }}
        >
          {({ errors, touched }) => (
            <Form className="formWrap">
              <div className="fullnameContainer">
                <label>
                  <p className="textLabel">Nombre</p>
                  <Field
                    className={
                      errors.name && touched.name
                        ? "inputFieldHalf-error"
                        : "inputFieldHalf"
                    }
                    name="name"
                  />
                  {errors.name && touched.name ? (
                    <div className="errorContainerHalf">{errors.name}</div>
                  ) : null}
                </label>
                <label>
                  <p className="textLabel">Apellido</p>
                  <Field
                    className={
                      errors.lastname && touched.lastname
                        ? "inputFieldHalf-error"
                        : "inputFieldHalf"
                    }
                    name="lastname"
                  />
                  {errors.lastname && touched.lastname ? (
                    <div className="errorContainerHalf">{errors.lastname}</div>
                  ) : null}
                </label>
              </div>
              <label>
                <p className="textLabel">Email</p>
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
              <label>
                <p className="textLabel">Confirmar Contraseña</p>
                <Field
                  type="password"
                  className={
                    errors.passwordConfirmation && touched.passwordConfirmation
                      ? "inputField-error"
                      : "inputField"
                  }
                  name="passwordConfirmation"
                />
              </label>
              {errors.passwordConfirmation && touched.passwordConfirmation ? (
                <div className="errorContainer">
                  {errors.passwordConfirmation}
                </div>
              ) : null}
              <button disabled={isLoading} className="submitBtn" type="submit">
                {!isLoading ? "Crear cuenta" : "Cargando..."}
              </button>

              {error !== "" && (
                <div
                  className="errorContainer"
                  style={{
                    alignSelf: "center",
                    padding: "10px 0px",
                    fontWeight: 600,
                  }}
                >
                  {error}
                </div>
              )}
            </Form>
          )}
        </Formik>
        <p className="finalText">
          ¿Ya tienes una cuenta?
          <Link to="/login" className="link">
            Iniciar sesión
          </Link>
        </p>
        {isLoading && <Loader isRegister />}
      </div>
      {isSuccess && <ModalSuccess />}
    </RegisterContainer>
  );
}
