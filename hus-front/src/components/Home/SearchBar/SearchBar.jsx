import React from "react";
import { useState, useEffect, useContext } from "react";
import Button from "./../../shared/Button/Button";
import DoubleCalendar from "./../DoubleCalendar/DoubleCalendar";
import { SearchContainer } from "./SearchStyled";
import loadContext from "../../../contexts/LoadContext";
import productsContext from "../../../contexts/ProductsContext";

export default function SearchBar({ setRequestFailed }) {
  const { setListProducts } = useContext(productsContext);
  const [sendRequest, setSendRequest] = useState(false);
  const [cityName, setCityName] = useState();
  const { setFetchRandom } = useContext(loadContext);
  const [checkin, setCheckin] = useState();
  const [checkout, setCheckout] = useState();

  useEffect(() => {
    if (sendRequest) {
      async function fetchData() {
        if (
          checkin !== undefined &&
          checkout !== undefined &&
          cityName !== undefined
        ) {
          let response = await fetch(
            `http://18.232.222.109:8080/api/open/products/dates/?startDate=${checkin}&endDate=${checkout}&city=${cityName}`
          );
          if (response.status === 200) {
            let data = await response.json();
            setRequestFailed(false);
            setFetchRandom(false);
            setListProducts(data);
          } else {
            setRequestFailed(true);
          }
        } else if (checkin !== undefined && checkout !== undefined) {
          let response = await fetch(
            `http://18.232.222.109:8080/api/open/products/dates/?startDate=${checkin}&endDate=${checkout}`
          );
          if (response.status === 200) {
            let data = await response.json();
            setRequestFailed(false);
            setFetchRandom(false);
            setListProducts(data);
          } else {
            setRequestFailed(true);
          }
        } else if (cityName !== undefined) {
          let response = await fetch(
            `http://18.232.222.109:8080/api/open/products/city/${cityName}`
          );
          if (response.status === 200) {
            let data = await response.json();
            setRequestFailed(false);
            setFetchRandom(false);
            setListProducts(data);
          } else {
            setRequestFailed(true);
          }
        }
      }
      fetchData();
      setSendRequest(false);
    }
  }, [sendRequest]);

  const [checkCalender, setCheckCalender] = useState(false);
  const [checkCities, setCheckCities] = useState(false);

  /**Desplaegar la lista de ciudades al hacer click en el input*/
  function showCalender() {
    setCheckCalender(!checkCalender);
    setCheckCities(false);
  }
  /**Desplaegar el calendario al hacer click en el div*/
  function showCities() {
    setCheckCities(!checkCities);
    setCheckCalender(false);
  }

  /**Cerrar el calendario con el boton aplicar */
  function handlerAplicar() {
    setCheckCalender(false);
  }
  const [selectDate, setSelectDate] = useState(null);
  const [selectCity, setSelectCity] = useState(null);
  //const [date, setDate] = useState(new Date());

  const [city, setCity] = useState([]);
  const [listCities, setListCities] = useState([]);
  const [search, setSearch] = useState("");

  const { setLoaded } = useContext(loadContext);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch("http://18.232.222.109:8080/api/open/cities");
      let data = await response.json();
      setListCities(data);
      setCity(data);
      setLoaded(true);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
    setCityName(e.target.value);
  };

  const filtrar = (searchTopic) => {
    var searchTopic = listCities.filter((element) => {
      if (
        element.name
          .toString()
          .toLowerCase()
          .includes(searchTopic.toLowerCase()) ||
        element.country
          .toString()
          .toLowerCase()
          .includes(searchTopic.toLowerCase())
      ) {
        return element;
      }
    });
    setCity(searchTopic);
  };

  return (
    <SearchContainer>
      <h2>Busca ofertas en casas, apartamentos y mucho más</h2>
      <form className="searchMenu" action="#">
        <div className="cities" onClick={() => showCities()}>
          <div className="selectCity">
            <i className="fas fa-map-marker-alt"></i>
            <input
              className="city"
              type="text"
              placeholder={selectCity === null && "¿A donde vamos?"}
              onChange={handleChange}
              value={search}
            ></input>
          </div>
          {checkCities ? (
            <ul>
              {city.slice(0, 5).map((item, index) => (
                <li
                  key={item + index}
                  value={item}
                  onClick={() => {
                    setSearch(item.name + ", " + item.country);
                    setCityName(item.name);
                  }}
                >
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <p className="cityName">{item.name}</p>
                    <p>{item.country}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="dates">
          <div onClick={() => showCalender()}>
            <div className="selectDate">
              <i className="far fa-calendar-alt"></i>
              <p>{selectDate === null ? "Check in - Check out" : selectDate}</p>
            </div>
          </div>
          <div className="calender">
            {checkCalender ? (
              <DoubleCalendar
                select={setSelectDate}
                clickBtn={handlerAplicar}
                setCheckin={setCheckin}
                setCheckout={setCheckout}
              />
            ) : null}
          </div>
        </div>

        <Button
          theme="secondary"
          text="Buscar"
          handlerEvent={() => {
            setSendRequest(true);
          }}
        />
      </form>
    </SearchContainer>
  );
}
