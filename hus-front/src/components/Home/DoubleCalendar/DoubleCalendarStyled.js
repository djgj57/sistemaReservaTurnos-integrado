import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";
import { media } from "./../../styles/utils/media";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: ${colors.primary};
  -webkit-box-shadow: 2px 9px 24px 4px #707070;
  box-shadow: 2px 9px 24px 4px #707070;
  width: 50vw;
  padding: 10px;
  .react-calendar {
    color: black;
    background: ${colors.primary};
    font-family: Arial, Helvetica, sans-serif;
  }
  .react-calendar--doubleView {
    width: 100%;
    padding: 10px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 47%;
    margin: 0.5em;
    font-size: 1rem;
  }

  .react-calendar__month-view:first-child {
    border-right: 1px solid ${colors.secondary};
    padding-right: 10px;
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
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    height: 44px;
    margin-bottom: 1em;

    .react-calendar__navigation__label {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .react-calendar__navigation__label__labelText {
        font-size: 1.2rem;
        text-transform: capitalize;
      }
      span:nth-child(2) {
        color: ${colors.primary};
      }
    }
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
    abbr {
      text-decoration: none;
    }
  }
  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
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
    padding: 0.75em 0.5em;
    background: none;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__tile--now {
    background: ${colors.highlight}, 0.5;
    border-radius: 50% 20%;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${colors.primary};
  }
  .react-calendar__tile--hasActive {
    background: #76baff;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  .react-calendar__tile--active {
    background: #006edc;
    background-color: ${colors.highlight};
    border-radius: 50%;
    color: ${colors.primary};
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: ${colors.highlight};
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: ${colors.highlight};
    border-radius: 50%;
    opacity: 0.5;
  }

  ${media.tablet} {
    width: 71vw;
    .react-calendar--doubleView .react-calendar__viewContainer > * {
      font-size: 0.7rem;
    }
  }
  ${media.mobile} {
    width: 90vw;
    font-size: 0.5rem;

    .react-calendar__viewContainer {
      .react-calendar__month-view:nth-child(2) {
        display: none;
      }
    }
    .react-calendar--doubleView .react-calendar__viewContainer > * {
      width: 100%;
    }
    .react-calendar__month-view:first-child {
      border-right: none;
    }
    .react-calendar__navigation__label {
      span:nth-child(2),
      span:nth-child(3) {
        display: none;
      }
    }
  }
`;
