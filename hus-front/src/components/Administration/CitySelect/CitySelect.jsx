import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Container } from "./CitySelectStyled";
import { colors } from "../../styles/utils/colors";
export default function CitySelect({
  name,
  value,
  isMulti,
  isDisabled,
  touched,
  isClearable,
  backspaceRemovesValue,
  onChange,
  onBlur,
  cities,
}) {
  let optionsCity = cities?.map(function (category) {
    return { value: category.id, label: category.name };
  });

  const dropdownIndicatorStyles = (base, state) => {
    let changes = {
      color: `${colors.highlight}`,
    };

    return Object.assign(base, changes);
  };

  return (
    <Container>
      {cities ? (
        <div className="content-select">
          <Select
            styles={{
              dropdownIndicator: dropdownIndicatorStyles,
            }}
            value={value}
            onChange={(value) => onChange(name, value)}
            onBlur={() => onBlur(name, true)}
            touched={touched}
            isMulti={isMulti}
            isDisabled={isDisabled}
            isClearable={isClearable}
            backspaceRemovesValue={backspaceRemovesValue}
            components={{ ClearIndicator: null }}
            placeholder="Selecciona una ciudad"
            options={optionsCity}
            className="react-select"
            classNamePrefix="react-select"
          />
        </div>
      ) : (
        <h1>CARGANDO</h1>
      )}
    </Container>
  );
}
