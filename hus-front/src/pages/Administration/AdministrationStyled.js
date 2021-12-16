import { colors } from "../../components/styles/utils/colors";

import styled from "styled-components";
export const AdminContainer = styled.div`
  background-color: ${colors.back};
  .formContainer {
    display: flex;
    justify-content: center;
  }
  .title {
    padding: 0px 30px;
    margin-top: 40px;
    color: ${colors.secondary};
    font-size: 1.5rem;
  }
`;
