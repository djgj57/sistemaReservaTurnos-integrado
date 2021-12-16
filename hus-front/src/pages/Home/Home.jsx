import React from "react";
import SearchBar from "./../../components/Home/SearchBar/SearchBar";
import Categories from "./../../components/Home/Categories/Categories";
import Loader from "./../../components/shared/Loader/Loader";
import loadContext from "../../contexts/LoadContext";
import { useState, useContext } from "react";
import productsContext from "../../contexts/ProductsContext";
import Recomended from "./../../components/Home/Recommended/Recommended";

export default function Home() {
  const { loaded } = useContext(loadContext);

  /*Los datos de los productos que se cargan en cada fetch*/
  const [listProducts, setListProducts] = useState([]);

  /**Para enviar un mensaje de respuesta fallida en la lista de productos caso que el fetch arroje un status diferente a 200*/
  const [requestFailed, setRequestFailed] = useState();

  return (
    
      <productsContext.Provider value={{ listProducts, setListProducts }}>
        <SearchBar setRequestFailed={setRequestFailed} />
          <Categories
            requestFailed={requestFailed}
            setRequestFailed={setRequestFailed}
          />
          <Recomended requestFailed={requestFailed} setRequestFailed={setRequestFailed}/>
        {loaded === false && <Loader />}
      </productsContext.Provider>
    
  );
}
