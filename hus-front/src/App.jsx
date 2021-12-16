import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
// import Assets from "./pages/Asset/Assets";
import { useEffect, useState } from "react";
import Product from "./pages/Product/Product";
import Reservation from "./pages/Reservation/Reservation";

import TemplatePrincipal from "./templates/TemplatePrincipal/TemplatePrincipal";
import loadContext from "./contexts/LoadContext";
import Home from "./pages/Home/Home";
import userContext from "./contexts/UserContext";
import Administration from "./pages/Administration/Administration";
import MyReservations from "./pages/MyReservations/MyReservations";
import MyFavorites from "./pages/MyFavorites/MyFavorites";

function App() {
  const [userData, setUserData] = useState();
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [fetchRandom, setFetchRandom] = useState(true);
  const [getUser, setGetUser] = useState(true);

  useEffect(() => {
    if (getUser) {
      async function fetchData() {
        await fetch(`http://18.232.222.109:8080/api/user`, {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }).then((res) => {
          res
            .json()
            .then((dataR) => ({
              data: dataR,
              status: res.status,
            }))
            .then((res) => {
              if (res.status === 200) {
                setUserData(res.data);
              }
            });
        });
      }
      fetchData();
      setGetUser(false);
    }
  }, [getUser]);
  return (
    <Router>
      <userContext.Provider
        value={{ userData, setUserData, getUser, setGetUser }}
      >
        <TemplatePrincipal>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path={"/reservation/product/:id"} component={Reservation} />

            <Route path={"/my-reservations"} component={MyReservations} />

            <Route path={"/my-favorites"} component={MyFavorites} />

            <Route path="/login">
              <Login />
            </Route>
            <Route path={"/product/:id"} component={Product} />
            <Route path="/admin">
              <Administration />
            </Route>
            <Route path="/">
              <loadContext.Provider
                value={{
                  loaded,
                  setLoaded,
                  page,
                  setPage,
                  fetchRandom,
                  setFetchRandom,
                }}
              >
                <Home />
              </loadContext.Provider>
            </Route>
          </Switch>
        </TemplatePrincipal>
      </userContext.Provider>
    </Router>
  );
}

export default App;
