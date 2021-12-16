import { useContext, useEffect, useState } from "react";
import ListCard from "../Home/ListCard/ListCard";
import { ListContainer } from "../Home/List/ListStyled";

export default function MyFavoritesList({ favorites }) {
  const [listFavorites, setListFavorites] = useState([]);

  useEffect(() => {
 
    favorites.map((element) => {
      async function fetchData() {
        //setId(element);
        let response = await fetch(
          `http://18.232.222.109:8080/api/open/product/${element}`
        );
        if (response.status === 200) {
          let data = await response.json();
          setListFavorites((listFavorites) => [...listFavorites, data]);

        } else {

        }
      }
      fetchData();
    });
  }, []);

  {

  }
  return (
    <ListContainer>
      {listFavorites !== [] ? (
        <ul className="list-card-container" data-testid="listComponent">
          {listFavorites.map((e) => {
            return (
              <ListCard
                key={e.id}
                id={e.id}
                img={e.images[0].url}
                alt={e.name}
                categorie={e.category.title}
                name={e.name}
                location={e.location}
                description={e.description}
                score={e.score}
                icons={e.features}
              />
            );
          })}
        </ul>
      ) : (
        <p>No hay favorites</p>
      )}
    </ListContainer>
  );
}
