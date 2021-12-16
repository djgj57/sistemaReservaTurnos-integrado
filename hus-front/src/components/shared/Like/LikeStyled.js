import styled from "styled-components";
import { colors } from "../../styles/utils/colors";
import { media } from "../../styles/utils/media";

export const LikeContainer = styled.div`
  position: absolute;
  color: ${colors.primary};
  align-self: flex-start;
  padding-left: 17%;
  position: ${(props) =>
    props.location === `/product/${props.id}` && "inherit"};
  padding: ${(props) => props.location === `/product/${props.id}` && "0"};
  svg {
    cursor: pointer;
    overflow: visible;
    width: 60px;
  }
  svg:hover {
    #Group {
      path {
        fill: ${colors.primary};
        stroke: ${colors.highlight};
        stroke-width: 2;
      }
    }
  }
  svg #heart {
    transform-origin: center;
    animation: animateHeartOut 0.3s linear forwards;
  }
  svg #main-circ {
    transform-origin: 29.5px 29.5px;
  }
  input {
    position: relative;
    left: 45px;
    bottom: 15px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    background: rgba(40, 40, 40, 0);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
  }
  input label {
    z-index: 10;
  }

  input:checked + label svg #heart {
    transform: scale(0.2);
    fill: #e2264d;
    animation: animateHeart 0.3s linear forwards 0.25s;
  }

  input:checked + label svg #main-circ {
    transition: all 2s;
    animation: animateCircle 0.3s linear forwards;
    opacity: 1;
  }
  input:checked + label svg #grp1 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }
  input:checked + label svg #grp1 #oval1 {
    transform: scale(0) translate(0, -30px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }
  input:checked + label svg #grp1 #oval2 {
    transform: scale(0) translate(10px, -50px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }
  input:checked + label svg #grp2 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }
  input:checked + label svg #grp2 #oval1 {
    transform: scale(0) translate(30px, -15px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }
  input:checked + label svg #grp2 #oval2 {
    transform: scale(0) translate(60px, -15px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }
  input:checked + label svg #grp3 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }
  input:checked + label svg #grp3 #oval1 {
    transform: scale(0) translate(30px, 0px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }
  input:checked + label svg #grp3 #oval2 {
    transform: scale(0) translate(60px, 10px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }
  input:checked + label svg #grp4 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }
  input:checked + label svg #grp4 #oval1 {
    transform: scale(0) translate(30px, 15px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }
  input:checked + label svg #grp4 #oval2 {
    transform: scale(0) translate(40px, 50px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }
  input:checked + label svg #grp5 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }
  input:checked + label svg #grp5 #oval1 {
    transform: scale(0) translate(-10px, 20px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }
  input:checked + label svg #grp5 #oval2 {
    transform: scale(0) translate(-60px, 30px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }
  input:checked + label svg #grp6 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }
  input:checked + label svg #grp6 #oval1 {
    transform: scale(0) translate(-30px, 0px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }
  input:checked + label svg #grp6 #oval2 {
    transform: scale(0) translate(-60px, -5px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }
  input:checked + label svg #grp7 {
    opacity: 1;
    transition: 0.1s all 0.3s;
  }
  input:checked + label svg #grp7 #oval1 {
    transform: scale(0) translate(-30px, -15px);
    transform-origin: 0 0 0;
    transition: 0.5s transform 0.3s;
  }
  input:checked + label svg #grp7 #oval2 {
    transform: scale(0) translate(-55px, -30px);
    transform-origin: 0 0 0;
    transition: 1.5s transform 0.3s;
  }
  input:checked + label svg #grp2 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }
  input:checked + label svg #grp3 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }
  input:checked + label svg #grp4 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }
  input:checked + label svg #grp5 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }
  input:checked + label svg #grp6 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }
  input:checked + label svg #grp7 {
    opacity: 1;
    transition: 0.1s opacity 0.3s;
  }

  @keyframes animateCircle {
    40% {
      transform: scale(10);
      opacity: 1;
      fill: #dd4688;
    }
    55% {
      transform: scale(11);
      opacity: 1;
      fill: #d46abf;
    }
    65% {
      transform: scale(12);
      opacity: 1;
      fill: #cc8ef5;
    }
    75% {
      transform: scale(13);
      opacity: 1;
      fill: transparent;
      stroke: #cc8ef5;
      stroke-width: 0.5;
    }
    85% {
      transform: scale(17);
      opacity: 1;
      fill: transparent;
      stroke: #cc8ef5;
      stroke-width: 0.2;
    }
    95% {
      transform: scale(18);
      opacity: 1;
      fill: transparent;
      stroke: #cc8ef5;
      stroke-width: 0.1;
    }
    100% {
      transform: scale(19);
      opacity: 1;
      fill: transparent;
      stroke: #cc8ef5;
      stroke-width: 0;
    }
  }
  @keyframes animateHeart {
    0% {
      transform: scale(0.2);
    }
    40% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes animateHeartOut {
    0% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }

  ${media.minilaptop} {
    padding-left: 220px;
  }
  ${media.tablet} {
    padding-left: 29%;
    position: ${(props) =>
      props.location === `/product/${props.id}` && "inherit"};
    padding: ${(props) => props.location === `/product/${props.id}` && "0"};
  }
  ${media.mobile} {
    padding-left: 65%;
    position: ${(props) =>
      props.location === `/product/${props.id}` && "inherit"};
    padding: ${(props) => props.location === `/product/${props.id}` && "0"};
  }
`;
