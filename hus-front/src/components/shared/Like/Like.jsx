import { LikeContainer } from "./LikeStyled";
import React, { useContext, useEffect, useState } from "react";
import userContext from "../../../contexts/UserContext";
import LikeModal from "./LikeModal";

export default function Like({id, checked, setChecked, location}){
  const [stateModal, setStateModal] = useState(false);
  const { setGetUser } = useContext(userContext);

  //No se esta actualizando userData al dar click porque no se hace de nuevo el fetch
  const { userData, setUserData } = useContext(userContext);
  const handlerFavorites = ()=>{
    if(userData!==undefined){
      const favorites = userData.favorites;
      if(favorites.includes(id)){
        setChecked(true);
      }else{
        setChecked(false);
      }
    } 
  }
  
  useEffect(()=>{
    handlerFavorites();
  },[])



  const handlerCheck=()=>{
    handlerFavorites();
    //setChecked(!checked);
    setRequest(true);
    if(userData === undefined){
      setStateModal(true);
    }
  }

  const [Request, setRequest]= useState(false);

  useEffect(() => {
    if(Request){
    async function fetchData() {
      await fetch(`http://18.232.222.109:8080/api/user/favorite/${id}`, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((res) => {
        if(res.status===200){
          setChecked(!checked);
        }
      });
    }
    fetchData();
    setGetUser(true);
    setRequest(false);
    }
  }, [Request]);

return(
    <LikeContainer id={id} location={location}>
    <input type="checkbox" id={id} checked={checked} onClick={()=>{handlerCheck()}}/>
    <label for="checkbox">
      <svg id="heart-svg" viewBox="467 392 58 57" >
        <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
          <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2"/>
          <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/>

          <g id="grp7" opacity="0" transform="translate(7 6)">
            <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/>
            <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/>
          </g>

          <g id="grp6" opacity="0" transform="translate(0 28)">
            <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/>
            <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/>
          </g>

          <g id="grp3" opacity="0" transform="translate(52 28)">
            <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/>
            <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/>
          </g>

          <g id="grp2" opacity="0" transform="translate(44 6)">
            <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2"/>
            <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2"/>
          </g>

          <g id="grp5" opacity="0" transform="translate(14 50)">
            <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2"/>
            <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2"/>
          </g>

          <g id="grp4" opacity="0" transform="translate(35 50)">
            <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2"/>
            <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2"/>
          </g>

          <g id="grp1" opacity="0" transform="translate(24)">
            <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/>
            <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/>
          </g>
        </g>
      </svg>
    </label>
    <LikeModal  stateModal={stateModal}
          setStateModal={setStateModal}/>
  </LikeContainer>
)
 }
