import styled from "styled-components";
import { colors } from "../../styles/utils/colors";
import { media } from "../../styles/utils/media";

export const AvailableDatesContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

.react-calendar {
    width: 60vw;
    max-width: 100%;
    background: ${colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-family: Roboto;
    line-height: 1em;
    width: 800px;
    height: 290px;
  }


  .react-calendar--doubleView {
    width: 60vw;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;

  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    /*margin: 0.5em;*/
    padding:0px 70px 30px 70px;

  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .react-calendar__navigation {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    height: 44px;
    
    margin-bottom: 1em;
    background: #ffffff;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: #ffffff;
    display: flex;
    justify-content: space-around;
  }
  .react-calendar__navigation{
    .react-calendar__navigation__prev-button, .react-calendar__navigation__next-button {
      min-width: 40px;
      background: #ffffff;
      height:40px;
      border-radius:50%;
      background-color: ${colors.highlight};
      color: ${colors.primary};
      font-size:1rem;
      font-weight:bold;
      margin:0 15px 0 15px;
      display:flex;
      justify-content:center;
      align-items:center;
    } 
    .react-calendar__navigation__prev-button:hover, .react-calendar__navigation__next-button:hover {
      background-color: ${colors.primary};
      color: ${colors.highlight};
      border: 1px solid;
    }
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    
  }
  .react-calendar__navigation {
    .react-calendar__navigation__prev-button[disabled], .react-calendar__navigation__next-button[disabled]{
      background-color: ${colors.highlight};
      opacity: 0.4;
    }
    
  }

  .react-calendar__navigation__label{
    background-color: #ffffff;
    color: black;
  }


  .react-calendar__navigation__label__divider{
    display: none
  }

  .react-calendar__navigation__label__labelText{
    
    font-weight: 400;
  }
  .react-calendar__navigation__label__labelText--from{
    text-transform: capitalize;
    font-size:1rem;
    /*position: relative;
    left: -175px;
    top: 25px;*/
    font-weight: bold;
  }

  .react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--to{
  
  }

  .react-calendar__navigation__label__labelText--to{
    text-transform: capitalize;
    font-size:1rem;
    /*position: relative;
    text-align: center;
    left: 175px;
    top: 25px;*/
    font-weight: bold;
  }

  .react-calendar__navigation__arrow{
    position: relative;
    top: 125px;
    cursor: pointer;
  }
  
  .react-calendar__month-view__weekdays {
    .react-calendar__month-view__weekdays__weekday{
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
    abbr{
      text-decoration: none;
    }
    }
  }

  .react-calendar__month-view {
    box-sizing: border-box
    height: 100px;
    
  }
 
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
    text-decoration:none
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }

  .react-calendar__month-view__days__day--weekend {
    color: black;
    
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 0.5em 0.5em;
    background: none;
  }

  .react-calendar__tile:disabled {
    background-color: #ffffff;
    text-decoration:line-through;
    color: #C1C1C1;
  }

  .react-calendar__tile--now {
    background: ${colors.highlight},0.5;
    /*border-radius:50%;*/
  }

  .react-calendar__tile--hasActive {
    /*background: ${colors.highlight};*/
    /*color #ffffff;*/
  }

  .react-calendar__tile--active {
    /*background-color: ${colors.highlight};*/
    /*border-radius:50%;*/
    /*color: white;*/
  }

  .react-calendar__viewContainer{
    .react-calendar__month-view:first-child {
      padding-right:10px;
      border-right: 1px solid ${colors.secondary};
    }
    .react-calendar__month-view:nth-child(2){
      padding-left:10px;
    } 
  }

  ${media.tablet}{

    .react-calendar{
      font-size: 1em;
      line-height: .5em;
      width: 90vw;
    }

    .react-calendar--doubleView{
      100vw;
    }

    .react-calendar__viewContainer{
      width:90vw;
    }

    .react-calendar__month-view{
      width:45vw;
    }

    .react-calendar__navigation{
      .react-calendar__navigation__prev-button, .react-calendar__navigation__next-button {
        min-width: 44px;
        background: #ffffff;
        color: black;
        font-size:1rem;
        margin:0;
      } 
    }

    .react-calendar__navigation {
      .react-calendar__navigation__prev-button[disabled], .react-calendar__navigation__next-button[disabled]{
        background-color: #ffffff;
      }

    .react-calendar__navigation__arrow {
      position: relative;
      top: 5px;
    }
    .react-calendar__navigation button {
      min-width: 44px;
      background: #ffffff;
      display: flex;
      justify-content: space-around;
    }
    calendar__navigation button:enabled:focus {
      color: black;
    }
  }


  ${media.mobile} {
    .react-calendar{
      font-size: 1em;
      line-height: .5em;
      width: 90vw;
    }

    .react-calendar--doubleView .react-calendar__viewContainer > * {
      padding:0px 5px 5px 5px;
    }
    .react-calendar__navigation {
      .react-calendar__navigation__next-button:hover , .react-calendar__navigation__prev-button:hover {
        color:${colors.highlight};
        border:none;
      }
    }
    .react-calendar__viewContainer{
      width:100vw;
    }

    .react-calendar__navigation__label{
      .react-calendar__navigation__label__labelText--to{
        display:none;
      
      }
    }

    .react-calendar__viewContainer{
      .react-calendar__month-view:nth-child(2){
        display:none;
        width:0vw;
      } 

      .react-calendar__month-view:first-child {
        border-right:none;
        width:90vw;
      }

      

      .react-calendar__navigation__label__labelText--from{
        left:0px
      
      }

    .react-calendar__navigation__next-button{
      display: none;
      }

    .react-calendar__navigation__arrow{
      display: none;
    }

  }  
`;
