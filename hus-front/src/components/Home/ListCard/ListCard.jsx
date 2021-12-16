import React from "react";
import Button from "./../../shared/Button/Button";
import StartNotRated from "./../../../images/StartNotRated";
import StartRated from "./../../../images/StartRated";
import { selectFeatureIcon } from "./../../Product/utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Like from "../../shared/Like/Like";
import ReservationModal from "./../../MyReservations/ReservationModal/ReservationModal";
import MapModal from "../MapModal/MapModal";

export default function ListCard(props) {
  const [more, setMore] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [mapModal, setMapModal] = useState(false);

  const score = props.score;
  const handleStarts = (score) => {
    const arr = [];
    for (let i = 0.5; i < 5; i++) {
      if (i < score) {
        arr.push(<StartRated />);
      } else {
        arr.push(<StartNotRated />);
      }
    }
    return arr;
  };

  const [like, setLike] = useState(false);

  const [pay, setPay] = useState(false);
  useEffect(() => {
    if (pay) {
      async function fetchData() {
        let response = await fetch(
          `http://18.232.222.109:8080/api/open/reservation/payment/${props.reserveId}`
        );
        if (response.status === 200) {
          let data = await response.text();

          window.location.href = data;
        }
      }
      fetchData();
      setPay(false);
    }
  }, [pay]);

  return (
    <li key={props.id} className="list-card">
      <Like checked={like} setChecked={setLike} id={props.id} />
      <img src={props.img} alt={props.alt} className="list-img" />
      <div className="list-card-info">
        <div className="header-card">
          <div className="header-name">
            <span className="categorie">{props.categorie}</span>
            &nbsp;{handleStarts(score)}
            <h3 className="name">{props.name}</h3>
          </div>
          <div className="score">
            <div>{props.score}</div>
            <p>
              {props.score > 4.5
                ? "Excelente"
                : props.score > 3.8
                ? "Muy bueno"
                : props.score > 3
                ? "Bueno"
                : "Normal"}
            </p>
          </div>
        </div>
        <div className="firstDescriptionContainer">
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <spam
              className="map"
              onClick={() => {
                setMapModal(true);
              }}
            >
              <p className="showMapText">MOSTRAR EN EL MAPA</p>
            </spam>
            {props.icons.map((element) => {
              return (
                <spam className="features">
                  {selectFeatureIcon(element.icon)}
                </spam>
              );
            })}
          </p>
        </div>
        <p className="description">
          {props.description.slice(0, 70)}
          {more === false ? (
            <spam className="see-more" onClick={() => setMore(true)}>
              {" Ver mas... "}
            </spam>
          ) : (
            <spam className="more-description">
              {props.description.slice(70, props.description.lenght)}
            </spam>
          )}
        </p>

        {props.toPay ? (
          <Button
            theme="secundary"
            text="Pagar"
            handlerEvent={() => {

              setPay(true);
            }}
          />
        ) : props.pay ? (
          <Button
            theme="secundary"
            text="Ver detalles"
            handlerEvent={() => {
              setStateModal(true);
            }}
          />
        ) : (
          <Button
            theme="secundary"
            text="Ver mas"
            to={"/product/" + props.id}
          />
        )}
        <ReservationModal
          stateModal={stateModal}
          setStateModal={setStateModal}
          checkIn={props.checkIn}
          checkOut={props.checkOut}
          name={props.name}
          address={props.address}
          price={props.price}
        />

        <MapModal
          mapModal={mapModal}
          setMapModal={setMapModal}
          product={props.product}
          urlRedirect={`http://maps.google.com/maps?z=12&t=m&q=loc:${props.latitude}+${props.longitude}`}
        />
      </div>
    </li>
  );
}
