import ListCard from "../../Home/ListCard/ListCard";
import { ListContainer } from "../../Home/List/ListStyled";

export default function PaidReservations({data}){

    return(
        <>
        <ListContainer>
        <h2>Reservas pagadas</h2>
        <ul className="list-card-container">
        {(data!==undefined)?(data.map((element)=>{

            return(
            (element.status === "confirmed")&&(
                    <ListCard
                        key={element.product.id}
                        id={element.product.id}
                        img={element.product.images[0].url}
                        alt={element.product.name}
                        categorie={element.product.category.title}
                        name={element.product.name}
                        location={element.product.location}
                        description={element.product.description}
                        score={element.product.score}
                        icons={element.product.features}
                        pay={true}
                        checkIn={element.checkIn}
                        checkOut={element.checkOut}
                        address={element.product.address}
                        price={element.product.price}
                    />
                ))
            })
        ):(<p>No hay Reservas</p>)}  </ul>
        </ListContainer>
        </>
    )
}