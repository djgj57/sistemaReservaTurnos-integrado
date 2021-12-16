import React from "react";
import { useState, useEffect, useContext } from "react";
import productsContext from "../../../contexts/ProductsContext";
import loadContext from "../../../contexts/LoadContext";

export default function CategorieCard({ title, img, alt, setRequestFailed }) {
  const { setListProducts } = useContext(productsContext);
  const { setFetchRandom } = useContext(loadContext);
  const [sendRequest, setSendRequest] = useState(false);
  const [categoryName, setCategoryName] = useState();
  useEffect(() => {
    if (sendRequest) {
      async function fetchData() {
        let response = await fetch(
          `http://18.232.222.109:8080/api/open/products/category/${categoryName}`
        );
        if (response.status === 200) {
          let data = await response.json();
          setRequestFailed(false);
          setFetchRandom(false);
          setListProducts(data);
        } else {
          setRequestFailed(true);
        }
      }
      fetchData();
      setSendRequest(false);
    }
  }, [sendRequest]);

  const [option, setOption] = useState();
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `http://18.232.222.109:8080/api/open/category/count/${title}`
      );
      let data = await response.json();
      setOption(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {/** Al hacer click sobre la categoria se actualiza el CategoryName que entra el fetch*/}
      <div
        className="categorie-card"
        onClick={() => {
          setCategoryName(title);
          setSendRequest(true);
        }}
      >
        <img src={img} alt={alt} className="categorie-img" />
        <h3 className="categorie-title">{title}</h3>
        <p className="categorie-options">{option} opciones</p>
      </div>
    </>
  );
}
