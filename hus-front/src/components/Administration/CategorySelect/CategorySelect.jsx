import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Container } from "./CategorySelectStyled";
import { colors } from "../../styles/utils/colors";
import { Field } from "formik";

export default function CategorySelect({
  name,
  value,
  isMulti,
  isDisabled,
  touched,
  isClearable,
  backspaceRemovesValue,
  onChange,
  onBlur,
  categories,
}) {
  let optionsCat = categories?.map(function (category) {
    return { value: category.id, label: category.title };
  });
  const dropdownIndicatorStyles = (base, state) => {
    let changes = {
      color: `${colors.highlight}`,
    };

    return Object.assign(base, changes);
  };

  return (
    <Container>
      {categories ? (
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
            placeholder="Selecciona la categoria"
            options={optionsCat}
            className="react-select"
            classNamePrefix="react-select"
          />
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
}
