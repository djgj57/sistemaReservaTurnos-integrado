import ListCard from "../../Home/ListCard/ListCard";
import { ListContainer } from "../../Home/List/ListStyled";

export default function ReservesToPay({data}){
    
    return(
        <>
        <ListContainer>
        <h2>Reservas por pagar</h2>
        <ul className="list-card-container">
        {(data!==undefined)?(data.map((element)=>{

            return(
            (element.status === "accepted")&&(
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
                        toPay={true}
                        reserveId={element.id}
                    />
                    )
                )
            })
        ):(<p>No hay Reservas</p>)} </ul> 
        </ListContainer>
        </>

    )
}