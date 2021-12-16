import styled from "styled-components";
export const AssetContainer = styled.div`
  background-color: ${(props) => props.bg};
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  h1 {
    text-align: center;
  }
  h2 {
    margin-top: 20px;
  }
  .btnContainer {
    margin-top: 10px;
  }
`;
export const ColorContainer = styled.div`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  background-color: ${(props) => props.bg};
  margin-top: 10px;
  padding: 5px 5px;
`;
