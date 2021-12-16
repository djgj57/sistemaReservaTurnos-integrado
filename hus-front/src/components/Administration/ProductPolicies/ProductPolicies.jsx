import React from "react";
import { Field } from "formik";
import { Overlay, ColumnContainer } from "./ProductPoliciesStyled";
export default function ProductPolicies({
  valueHouseRules,
  valueHealth,
  valueCancellation,
  formik,
  onChange,
}) {
  return (
    <Overlay>
      <ColumnContainer>
        <h1 className="descritionTitle">Normas de la casa</h1>
        <label className="labelPolicy">
          <p className="textLabel">Descripcion</p>
          <textarea
            className="textAreaField"
            name="houseRules"
            value={valueHouseRules}
            onChange={onChange}
            as="textarea"
            placeholder="//Check-out: 10:00
//No se permiten fiestas
//No fumar
 "
          />
        </label>
      </ColumnContainer>
      <ColumnContainer>
        <h1 className="descritionTitle">Salud y Seguridad</h1>
        <label className="labelPolicy">
          <p className="textLabel">Descripcion</p>
          <textarea
            className="textAreaField"
            value={valueHealth}
            onChange={onChange}
            name="healthAndSafety"
            as="textarea"
            placeholder="//Se aplican las pautas de distanciamiento social.
//Detector de humo
 "
          />
        </label>
      </ColumnContainer>
      <ColumnContainer>
        <h1 className="descritionTitle">Política de cancelación</h1>
        <label className="labelPolicy">
          <p className="textLabel">Descripcion</p>
          <textarea
            className="textAreaField"
            onChange={onChange}
            values={valueCancellation}
            name="cancellationPolicy"
            as="textarea"
            placeholder="//Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.
 "
          />
        </label>
      </ColumnContainer>
    </Overlay>
  );
}
