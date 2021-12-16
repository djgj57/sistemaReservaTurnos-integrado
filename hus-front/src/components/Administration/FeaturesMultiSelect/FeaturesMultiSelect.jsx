import React, { useEffect } from "react";
import { Container } from "./FeaturesMultiSelectStyled";
import { colors } from "../../styles/utils/colors";
import Select from "react-select";

export default function FeaturesMultiSelect({
  name,
  value,
  isMulti,
  isDisabled,
  touched,
  isClearable,
  backspaceRemovesValue,
  onChange,
  onBlur,
  featuresData,
}) {
  let optionsFeat = featuresData?.map(function (feature) {
    return { value: feature.id, label: feature.name };
  });

  const dropdownIndicatorStyles = (base, state) => {
    let changes = {
      color: `${colors.highlight}`,
    };
    return Object.assign(base, changes);
  };
  return (
    <Container>
      {featuresData ? (
        <div className="content-select" htmlFor={name}>
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
            placeholder="Selecciona cada caracteristicas"
            options={optionsFeat}
            className="react-select"
            classNamePrefix="react-select"
            closeMenuOnSelect={false}
          />
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
}
