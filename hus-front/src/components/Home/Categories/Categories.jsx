import React from "react";
import CategorieCard from "./../CategorieCard/CategorieCard";
import { CategoriesContainer } from "./CategoriesStyled";
import { useState, useEffect } from "react";

export default function Categories({ setRequestFailed }) {
  const [listCategories, setListCategories] = useState([]);
  const [categoryLoad, setCategoryLoad] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        "http://18.232.222.109:8080/api/open/categories"
      );
      let data = await response.json();
      setListCategories(data);
      setCategoryLoad(true);
    }
    fetchData();
  }, []);

  return (
    <main>
      <CategoriesContainer>
        <section>
          <h2>Buscar por tipo de alojamiento</h2>
          {categoryLoad && (
            <div className="categorie-card-conteiner">
              {listCategories.map((element) => {
                return (
                  <CategorieCard
                    key={element.id}
                    title={element.title}
                    img={element.imageURL}
                    alt={element.title}
                    setRequestFailed={setRequestFailed}
                  />
                );
              })}
            </div>
          )}
        </section>
      </CategoriesContainer>
    </main>
  );
}
