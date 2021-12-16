import styled from "styled-components";
export const ReservationContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-bottom: 58px;

  .loaderContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 90vh;
    align-items: center;
  }

  .container {
    display: flex;
    margin-top: 30px;
    width: 100%;
    justify-content: space-around;
  }
`;

export const ReservationLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #e5e5e5;
  // justify-content:space-around;

  .left_container {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: auto 15px;
  }

  .right_container {
    height: 100%;
    margin: auto 15px;
  }
`;
