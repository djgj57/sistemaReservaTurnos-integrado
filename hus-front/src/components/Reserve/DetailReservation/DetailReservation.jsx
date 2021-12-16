import React from "react";
import Button from "../../shared/Button/Button";
import { DetailReservationStyled } from "./DetailReservationStyled";
import StartRated from "../../../images/StartRated";
import StartNotRated from "../../../images/StartNotRated";
import Location from "../../../images/Location";
export default function DetailReservation({product, setRequest, checkin, checkout, notReserve}) { 

  const handleStarts = (score) => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      if (i < score) {
        arr.push(<StartRated />);
      } else {
        arr.push(<StartNotRated />);
      }
    }
    return arr;
  };
  return (

    
    // EN COMPONENTS/STYLES/PRODUCT/HEADINGNAMESTYLED TENES EL WRAPPER DE STYLED COMPONENT DE ESTE COMPONENTE
    <DetailReservationStyled>
      <div className="reservationContainer">
              <div  className="detalle_de_reserva">
                <h2>Detalle de la reserva</h2>
              </div>
              <img src={product.images[0].url} alt={product.name} className="reserve-img" />
                           
                <div className="category_title">
                <h3>{product.category.title}</h3>
                <h2>{product.name}</h2>
                <span className="startContainer">{handleStarts(product.score)}</span>
                <h4>
                <Location/>  {product.name}
                </h4>
                </div>
                <div className="date">
                <div className="date_checkIn">
                <label htmlFor="">Check in</label>
                <label className="dateCheck" htmlFor="Check in">{(checkin===undefined)?"__/__/__":checkin.split("-").reverse().join("/")}</label>
                </div>
                <div className="date_checkOut">
                <label  htmlFor="">Check out</label>
                <label className="dateCheck" htmlFor="Check out">{(checkout===undefined)?"__/__/__":checkout.split("-").reverse().join("/")}</label>
                </div>
                </div>

                  {(notReserve)?
                    (<>
                      <div className="button disable">
                        <Button theme="secondary" text="Confirmar reserva" disabled={true}/>
                      </div>
                      <p className="invalidDates">Las fechas seleccionadas no se encuentran disponibles</p>
                    </>):(
                    <div className="button">
                      <Button theme="secondary" text="Confirmar reserva" handlerEvent = {()=>setRequest(true)}/>
                    </div>
                  )}
                </div>
        </DetailReservationStyled>
  );
}