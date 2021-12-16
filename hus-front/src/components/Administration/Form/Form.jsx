import React, { useEffect, useState } from "react";
import { FormContainer, Overlay } from "./FormStyled";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import CategorySelect from "../CategorySelect/CategorySelect";
import ProductPolicies from "../ProductPolicies/ProductPolicies";
import ImageUpload from "../ImageUpload/ImageUpload";
import CitySelect from "../CitySelect/CitySelect";
import FeaturesMultiSelect from "../FeaturesMultiSelect/FeaturesMultiSelect";
import SuccessfulNewProductModal from "../SuccessfullModal/SuccessfulNewProductModal";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Este campo es obligatorio"),
  category: Yup.object()
    .shape({
      value: Yup.string(),
      label: Yup.string(),
    })
    .nullable()
    .required("Debes seleccionar una categoria"),
  address: Yup.string().required("Este campo es obligatorio"),
  city: Yup.object()
    .shape({
      value: Yup.string(),
      label: Yup.string(),
    })
    .nullable()
    .required("Debes seleccionar una categoria"),
  latitude: Yup.number().required("Este campo es obligatorio"),
  longitude: Yup.number().required("Este campo es obligatorio"),
  price: Yup.number()
    .positive("El precio no es valido")
    .integer("Debe ser un numero entero")
    .required("Este campo es obligatorio"),
  description: Yup.string()
    .min(100, "Minimo de 100 caracteres")
    .required("Este campo es obligatorio"),
  features: Yup.array()
    .min(1, "Debes seleccionar minimo 1 caracteristica")
    .of(
      Yup.object()
        .shape({
          label: Yup.string(),
          value: Yup.string(),
        })
        .nullable()
    ),
  images: Yup.array().min(6, "Debes subir minimo 5 imagenes"),
});
export default function FormAdmin() {
  const [isModalSuccesfull, setModalSuccessfull] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cities, setCities] = useState();
  const [categories, setCategories] = useState();
  const [featuresData, setFeaturesData] = useState();
  const emptyImages = "";
  const initialArray = [];
  const [images, setImages] = useState(initialArray);
  const formik = useFormik({
    initialValues: {
      name: "",
      category: [],
      address: "",
      city: [],
      description: "",
      houseRules: "",
      healthAndSafety: "",
      cancellationPolicy: "",
      images: [emptyImages],
      features: [],
      latitude: "",
      longitude: "",
      price: "",
    },
    validationSchema,
    onSubmit: async (data) => {
      let newArrayFeatures = [];
      let featuresId = data.features;
      const getFeaturesId = () => {
        featuresId.map((e) => {
          newArrayFeatures.push({ id: e.value });
        });
      };
      getFeaturesId();

      let newArrayImages = [];
      let imagesId = images;
      const getImageId = () => {
        imagesId.map((e) => {
          newArrayImages.push({ id: e.id });
        });
      };
      getImageId();
      const newProduct = {
        name: data.name,
        description: data.description,
        category: { id: data.category.value },
        city: { id: data.city.value },
        address: data.address,
        houseRules: data.houseRules,
        healthAndSafety: data.healthAndSafety,
        cancellationPolicy: data.cancellationPolicy,
        latitude: data.latitude,
        longitude: data.longitude,
        price: data.price,
        features: newArrayFeatures,
        images: newArrayImages,
      };

      await fetch("http://18.232.222.109:8080/api/product/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then(() => setModalSuccessfull(true));
    },
  });

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(`http://18.232.222.109:8080/api/open/cities`);
      let citiesData = await response.json();
      setCities(citiesData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `http://18.232.222.109:8080/api/open/categories`
      );
      let categoriesData = await response.json();
      setCategories(categoriesData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `http://18.232.222.109:8080/api/open/features`
      );
      let featuresData = await response.json();
      setFeaturesData(featuresData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Overlay>
      <FormContainer>
        {isLoading ? (
          <h1>Cargando</h1>
        ) : (
          <FormikProvider value={formik}>
            <form className="formWrap" onSubmit={formik.handleSubmit}>
              <div className="doubleContainer">
                <label>
                  <p className="textLabel">Nombre de la propiedad</p>
                  <input
                    className="inputFieldHalf"
                    name="name"
                    placeholder="// EJ: The Grand Budapest"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  <div className="errorContainer">
                    {formik.errors.name ? formik.errors.name : null}
                  </div>
                </label>
                <label>
                  <p className="textLabel">Categoria</p>
                  <CategorySelect
                    name="category"
                    categories={categories}
                    value={formik.values.category}
                    isMulti={false}
                    onChange={formik.setFieldValue}
                    onBlur={formik.setFieldTouched}
                    touched={formik.touched.category}
                    isCleareable={true}
                    backspaceRemovesValue={true}
                  />
                  <div className="errorContainer">
                    {formik.errors.category ? formik.errors.category : null}
                  </div>
                </label>
              </div>
              <div className="doubleContainer">
                <label>
                  <p className="textLabel">Direccion</p>
                  <input
                    className="inputFieldHalf"
                    name="address"
                    placeholder="// EJ: Wallaby 42"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                  <div className="errorContainer">
                    {formik.errors.address ? formik.errors.address : null}
                  </div>
                </label>
                <label>
                  <p className="textLabel">Ciudad</p>
                  <CitySelect
                    name="city"
                    cities={cities}
                    value={formik.values.city}
                    isMulti={false}
                    onChange={formik.setFieldValue}
                    onBlur={formik.setFieldTouched}
                    touched={formik.touched.city}
                    isCleareable={true}
                    backspaceRemovesValue={true}
                  />
                  <div className="errorContainer">
                    {formik.errors.city ? formik.errors.city : null}
                  </div>
                </label>
              </div>

              <div className="doubleContainer">
                <label>
                  <p className="textLabel">Latitud</p>
                  <input
                    className="inputFieldHalf"
                    name="latitude"
                    type="number"
                    placeholder="// EJ: 32.321384"
                    onChange={formik.handleChange}
                    value={formik.values.latitude}
                  />
                  <div className="errorContainer">
                    {formik.errors.latitude ? formik.errors.latitude : null}
                  </div>
                </label>
                <label>
                  <p className="textLabel">Longitud</p>
                  <input
                    className="inputFieldHalf"
                    name="longitude"
                    type="number"
                    placeholder="// EJ: 32.321384"
                    onChange={formik.handleChange}
                    value={formik.values.longitude}
                  />
                  <div className="errorContainer">
                    {formik.errors.longitude ? formik.errors.longitude : null}
                  </div>
                </label>
              </div>
              <div className="doubleContainer">
                <label>
                  <p className="textLabel">
                    Precio por noche (No se permiten decimales)
                  </p>
                  <input
                    className="inputFieldHalf inputFieldHalf__price"
                    name="price"
                    type={"number"}
                    min={"0"}
                    step={1}
                    placeholder=" // $10000"
                    keyboardType={"numeric"}
                    onChange={formik.handleChange}
                    value={formik.values.price}
                  />
                  <div className="errorContainer">
                    {formik.errors.price ? formik.errors.price : null}
                  </div>
                </label>
                <label>
                  <p className="textLabel">Caracteristicas</p>
                  <FeaturesMultiSelect
                    name="features"
                    featuresData={featuresData}
                    value={formik.values.features}
                    isMulti={true}
                    onChange={formik.setFieldValue}
                    onBlur={formik.setFieldTouched}
                    touched={formik.touched.features}
                    isCleareable={true}
                    backspaceRemovesValue={true}
                  />
                  <div className="errorContainer">
                    {formik.errors.features ? formik.errors.features : null}
                  </div>
                </label>
              </div>
              <div className="singleContainer">
                <label>
                  <p className="textLabel">Descripcion</p>
                  <textarea
                    className="inputFieldTextArea"
                    name="description"
                    placeholder="Escriba una descripcion..."
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  />
                  <div className="errorContainer">
                    {formik.errors.description
                      ? formik.errors.description
                      : null}
                  </div>
                </label>
              </div>
              <div className="columnContainer">
                <h1 className="columnTitle">Politicas del producto</h1>
                <ProductPolicies
                  valueHouseRules={formik.values.houseRules}
                  valueHealth={formik.values.healthAndSafety}
                  valueCancellation={formik.values.cancellationPolicy}
                  formik={formik}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="columnContainer">
                <h1 className="columnTitle">Cargar imágenes</h1>
                <ImageUpload
                  name="images"
                  values={formik.values.images}
                  emptyImages={emptyImages}
                  images={images}
                  setImages={setImages}
                />
                <div className="errorContainer">
                  {formik.errors.images ? formik.errors.images : null}
                </div>
              </div>
              <div className="submitBtnContainer">
                <button className="submitBtn" type="submit">
                  Crear
                </button>
              </div>
            </form>
            {isModalSuccesfull && (
              <SuccessfulNewProductModal
                stateModal={isModalSuccesfull}
                setStateModal={setModalSuccessfull}
              />
            )}
          </FormikProvider>
        )}
      </FormContainer>
    </Overlay>
  );
}
