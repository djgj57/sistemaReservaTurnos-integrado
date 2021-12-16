import styled from "styled-components";
import { colors } from "./../../../components/styles/utils/colors";
import { media } from "./../../../components/styles/utils/media";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  color: ${colors.backgroundPrimary};
  .userContainer__admin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 30px;
      position: absolute;
      top: 0.2vh;
    }
  }
  div {
    display: flex;
    .userIcono {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: ${colors.backgroundPrimary};
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;
      cursor: pointer;
      transition: all 0.4s;
      h2 {
        color: ${colors.highlight};
      }
      &:hover {
        opacity: 0.8;
      }
    }
    .userBienvenida {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: bold;
      .userName {
        color: ${colors.gold};
      }
    }
  }

  ${media.mobile} {
    color: ${colors.backgroundPrimary};
    font-size: 1.2rem;
    .userContainer__admin {
      img {
        top: 8.5vh;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: end;

      .userIcono {
        background-color: ${colors.backgroundPrimary};
        h2 {
          color: ${colors.highlight};
        }
      }
      .userBienvenida {
        padding-top: 10px;
        .userName {
          padding-top: 5px;
          color: ${colors.gold};
        }
      }
    }
  }
`;
