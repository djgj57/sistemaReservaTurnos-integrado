import PaidReservations from "../../components/MyReservations/PaidReservations/PaidReservations";
import ReservesToPay from "../../components/MyReservations/ReservesToPay/ReservesToPay";
import HeadingProduct from "../../components/Product/Heading/HeadingProduct";
import { useEffect, useState } from "react";
import EmojiSad from "../../images/EmojiSad";
import Button from "../../components/shared/Button/Button";
import { MyReservationsContainer } from "./MyReservationsStyled";

export default function MyReservations() {
  const toPay = [];
  const paid = [];
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `http://18.232.222.109:8080/api/reservations`,
        {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 200) {
        let data = await response.json();
        if (data.length < 1) {
        } else {
          setData(data);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <MyReservationsContainer>
      <HeadingProduct category={{ title: "Mis reservas" }} />
      {data.length < 1 ? (
        <div className="noReservations">
          <EmojiSad />
          <p>Aun no has efectuado ninguna reserva</p>
          <Button to="/" text="Volver"></Button>
        </div>
      ) : (
        <>
          <ReservesToPay data={data} />
          <PaidReservations data={data} />
        </>
      )}
    </MyReservationsContainer>
  );
}
