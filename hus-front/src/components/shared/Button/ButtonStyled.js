import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";
import { media } from "./../../styles/utils/media";

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity:${(props) => props.opacity === true && `0.4`};
  width: 206px;
  width:${(props) => props.text === "Ver mas" && `100%`};
  width:${(props)=>props.text==="Confirmar reserva" && "100%"};
  width:${(props) => props.text === "Pagar" && `100%`};
  width:${(props) => props.text === "Ver detalles" && `100%`};
  height: 40px;
  border: 1px solid ${colors.highlight};
  background-color: ${(props) =>
    props.theme === "primary" ? colors.primary : colors.highlight};
  border-radius: 5px;
  margin-right: 5px;
  margin-right:${(props)=>props.text === "Confirmar reserva" && "0"};
  /* font */
  color: ${(props) =>
    props.theme === "primary" ? colors.highlight : colors.primary};
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  filter: ${(props) =>
    props.theme !== "primary" &&
    `drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.12))`};
  display: ${(props) => props.page === true && `none`};
  -moz-transition: all .2s ease-in;
  -o-transition: all .2s ease-in;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  :hover{
    background-color: ${(props) =>
      props.theme === "primary" ? colors.highlight : colors.primary};
    color: ${(props) =>
      props.theme === "primary" ? colors.primary : colors.highlight};
    border-width: 1px;
    border-style: solid;
    border-color:${(props) =>
      props.theme === "primary" ? colors.primary : colors.highlight};
    border-color: ${(props) => props.disabled === true && colors.alert};
    color: ${(props) => props.disabled === true && colors.alert};

  };
  width:${(props) => props.text === "Iniciar reserva" && `27vw`};
  opacity:${(props) => props.disabled === true && `0.4`};
  cursor: ${(props) => props.disabled === true && `default`};
  
    ${media.tablet} { 
      width:130px; 
      width:${(props) => props.text === "Aplicar" && `100%`};
      width:${(props) => props.text === "Iniciar reserva" && `43vw`};
      width:${(props) => props.text === "Ver mas" && `100%`};
      width:${(props) => props.text === "Pagar" && `100%`};
      width:${(props) => props.text === "Ver detalles" && `100%`};
      align-self:center;
      margin-right:${(props) => props.text === "Aplicar" && "0"};
      width:${(props)=>props.text==="Confirmar reserva" && "100%"};

    ${media.mobile} {
      display: ${(props) => (props.theme === "primary" ? "none" : "block")};
      width:${(props) => props.theme !== "primary" && `90vw`};
      width:${(props) => props.text === "Ver mas" && `100%`};
      width:${(props) => props.text === "Aplicar" && `100%`};
      width:${(props) => props.text === "Volver" && `100px`};
      width:${(props) => props.text === "Login" && `100px`};
      width:${(props) => props.text === "Pagar ahora" && `100px`};
      padding-top:9px;
    }
`;
