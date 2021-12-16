import { useState, useEffect, useContext } from "react";
import { FormContainer } from "./ReservationFormStyled";
import Data from "../Data/Data";
import ArrivalSchedule from "../ArrivalSchedule/ArrivalSchedule";
import DetailReservation from "./../DetailReservation/DetailReservation";
import SuccessfulBookingModal from "./../SuccessfulBookingModal/SuccessfulBookingModal";
import userContext from "../../../contexts/UserContext";
import CalendarContainer from "./../CalendarReserve/CalendarContainer";

export default function ReservationForm({ product }) {
  const [Request, setRequest] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [city, setCity] = useState();
  const [eta, setETA] = useState();
  const { userData } = useContext(userContext);
  const [checkin, setCheckin] = useState();
  const [checkout, setCheckout] = useState();
  const [notReserve, setNotReserve] = useState(false);
  const datos = {
    checkIn: checkin,
    checkOut: checkout,
    eta: eta,
    city: city,
    user: {
      id: userData.id,
    },
    product: {
      id: product.id,
    },
  };

  const [urlMerPa, setUrlMerPa]= useState();

  useEffect(() => {
    if (Request) {
      async function fetchData() {
        let response = await fetch("http://18.232.222.109:8080/api/reservation/save", {
          method: "POST",
          body: JSON.stringify(datos),
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        })
        if (response.status === 201) {
          let data=  await response.text();
            setUrlMerPa(data);
            //window.location.href = data;
            setStateModal(true); 
        } 
      }
      fetchData();
      setRequest(false);
    }
  }, [Request]);

  return (
    <FormContainer>
      <div className="reserveData">
        <Data userData={userData} setCity={setCity} />
        <CalendarContainer
          setCheckin={setCheckin}
          setCheckout={setCheckout}
          setNotReserve={setNotReserve}
        />
        <ArrivalSchedule setETA={setETA} />
      </div>
      <div className="reserveDetails">
        <DetailReservation
          product={product}
          setRequest={setRequest}
          checkin={checkin}
          checkout={checkout}
          notReserve={notReserve}
        />
      </div>
      <SuccessfulBookingModal
        stateModal={stateModal}
        setStateModal={setStateModal}
        urlMerPa={urlMerPa}
      />
    </FormContainer>
  );
}
