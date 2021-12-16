import styled from "styled-components";

export const GalleryLightboxStyled = styled.div`
  display: flex;
  width: 100%;
  height: 81%;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(56, 59, 88, 0.8);
  position: fixed;

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    i {
      font-size: 20px;
    }
  }
  
`;
