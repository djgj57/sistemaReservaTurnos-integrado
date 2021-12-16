import styled from "styled-components";
import { colors } from "../../styles/utils/colors";
import { media } from "../../styles/utils/media";

export const DetailReservationStyled = styled.div`
  padding-top: 50px;
  align-items: center;
  height: 100%;
  border-radius: 10px;
  color: ${colors.secondary};

  .reservationContainer {
    border: 1px solid #dfe4ea;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 10px;
    background-color: white;
    .reserve-img {
      width: 100%;
    }
  }
  .detalle_de_reserva h2 {
    margin: 20px;
  }
  h4 {
    margin: 15px 0 40px 0;
  }

  .category_title {
    margin: 15px 20px 25px 20px;
    border-bottom: 1px solid #bebebe;
  }
  .category_title h3 {
    opacity: 50%;
  }
  .date {
    margin: 15px 20px 0 20px;
  }
  .dateCheck {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: right;

    /* B - DB COLOR 2 */
  }
  .button {
    display: flex;
    justify-content: center;
    margin: 50px 20px 20px 20px;
  }

  .date_checkIn {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid #bebebe;
  }

  .date_checkOut {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid #bebebe;
  }
  .category_title h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }

  .invalidDates {
    color: ${colors.alert};
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
  }
  ${media.mobile} {
  }
`;
