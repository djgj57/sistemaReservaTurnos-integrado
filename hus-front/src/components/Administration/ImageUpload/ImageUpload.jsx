import React, { useState } from "react";
import { Overlay, Container } from "./ImageUploadStyled";
import { FieldArray } from "formik";

export default function ImageUpload({
  name,
  values,
  emptyImages,
  images,
  setImages,
}) {
  const [errorRemoveFirst, setErrorRemoveFirst] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [check, setCheck] = useState(["+"]);
  const [remaining, setRemaining] = useState(5);
  const array = [...check];
  const handleChange = (e) => {
    const handler = e.target.value;
    setUrlImg(handler);
  };
  const handleIncrement = () => {
    setRemaining((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setRemaining((prevCount) => prevCount - 1);
  };
  return (
    <Overlay>
      <Container>
        <FieldArray name={name}>
          {({ push, remove }) => (
            <>
              <h2 className="requirementText">
                {`Se requiere un minimo de ${
                  remaining <= 0 ? 0 : remaining
                } imagenes.`}
              </h2>
              {values.map((_, index) => (
                <div className="fieldContainer">
                  <h4 className="numberImg">{index + 1}</h4>
                  <input
                    className="inputField"
                    name={`${name}.${index}`}
                    placeholder={
                      errorRemoveFirst === ""
                        ? "Insertar https://"
                        : errorRemoveFirst
                    }
                    onChange={handleChange}
                  />
                  <div
                    className="btnContainer btnContainer__remove"
                    onClick={() => {
                      array[index - 1] = "+";
                      setCheck(array);
                      index !== 0 ? remove(index) : setErrorRemoveFirst("Nope");
                      handleIncrement();
                    }}
                  >
                    -
                  </div>
                  <div
                    className="btnContainer btnContainer__add"
                    onClick={async () => {
                      const newImg = { url: urlImg, title: "Foto Producto" };
                      await fetch("http://18.232.222.109:8080/api/image/save", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: localStorage.getItem("token"),
                        },
                        body: JSON.stringify(newImg),
                      })
                        .then((res) => res.json())
                        .then((data) => setImages((old) => [...old, data]))
                        .then(() => setIsSuccess(true))
                        .then(() => (array[index + 1] = "+"))
                        .then(() => (array[index] = "✓"))
                        .then(() => setCheck(array))
                        .then(() => handleDecrement())
                        .then(() => push(emptyImages));
                    }}
                  >
                    {array[index]}
                  </div>
                </div>
              ))}
            </>
          )}
        </FieldArray>
      </Container>
    </Overlay>
  );
}
