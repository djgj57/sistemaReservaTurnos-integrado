import React, { useContext, useEffect, useState } from "react";
import List from "./../List/List";
import { ListContainer } from "./../List/ListStyled";
import Loader from "./../../shared/Loader/Loader";
import loadContext from "../../../contexts/LoadContext";
import productsContext from "../../../contexts/ProductsContext";

export default function Recomended({ requestFailed, setRequestFailed }) {
  const { listProducts, setListProducts } = useContext(productsContext);
  const { page, setPage, fetchRandom, setFetchRandom } =
    useContext(loadContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      let response = await fetch(
        `http://18.232.222.109:8080/api/open/products/page/${page}`
      );
      if (response.status === 200) {
        let data = await response.json();
        setFetchRandom(true);
        setListProducts(data);
        setIsLoading(false);
        setRequestFailed(false);
      } else {
        setRequestFailed(true);
      }
    }
    // setIsLoading(!isLoading);
    fetchData();
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <ListContainer>
      <section>
        <h2>Recomendaciones</h2>
        {!isLoading ? (
          <>
            <List listProducts={listProducts} requestFailed={requestFailed} />
            {/*La barra inferior para navegar entre paginas solo se mostrará para el fecth Random inicial que trae 8 productos*/}
            {fetchRandom ? (
              <div className="page-navegation">
                {page === 1 && <div className="hidde"></div>}

                {page > 1 && (
                  <i
                    class="fas fa-chevron-left"
                    data-testid="leftArrow"
                    onClick={() => setPage(page - 1)}
                  ></i>
                )}
                <span>{"Pagina " + page}</span>
                {listProducts.length === 8 && (
                  <i
                    class="fas fa-chevron-right"
                    data-testid="leftArrow"
                    onClick={() => setPage(page + 1)}
                  ></i>
                )}
                {listProducts.length !== 8 && <div className="hidde2"></div>}
              </div>
            ) : (
              <div style={{ height: "80px", width: "90vw" }}></div>
            )}
          </>
        ) : (
          <div className="loaderContainer" data-testid="loaderComponent">
            <Loader />
          </div>
        )}
      </section>
    </ListContainer>
  );
}
