import React from "react";
import ListCard from "./../ListCard/ListCard";

export default function List({ listProducts, requestFailed }) {
  return (
    <>
      {requestFailed === false ? (
        <ul className="list-card-container" data-testid="listComponent">
          {listProducts.map((e) => {
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
                longitude={e.longitude}
                latitude={e.latitude}
                product={e}
              />
            );
          })}
        </ul>
      ) : (
        <p style={{ textAlign: "center", padding: "40px", fontSize: "1.5rem" }}>
          No se encontraron resultados
        </p>
      )}
    </>
  );
}
