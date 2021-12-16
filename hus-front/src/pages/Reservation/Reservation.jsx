import React, { useState, useEffect } from "react";
import HeadingProduct from "../../components/Product/Heading/HeadingProduct";
import { ReservationContainer } from "./ReservationStyled";
import PolicyProduct from "../../components/Product/Policy/PolicyProduct";
import ReservationForm from "../../components/Reserve/ReservationForm/ReservationForm";
import Loader from "../../components/shared/Loader/Loader";

const Reservation = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const idProduct = props.match.params.id;

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `http://18.232.222.109:8080/api/open/product/${idProduct}`
      );
      let productData = await response.json();
      setProduct(productData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loaderContainer" data-testid="loaderComponent">
          <Loader />
        </div>
      ) : (
        <ReservationContainer>
          <HeadingProduct name={product.name} category={product.category} />
          <ReservationForm product={product} />
          <PolicyProduct />
        </ReservationContainer>
      )}
    </>
  );
};

export default Reservation;
