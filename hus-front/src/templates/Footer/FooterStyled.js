import styled from "styled-components";
import { colors } from "../../components/styles/utils/colors";
import { media } from "../../components/styles/utils/media";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d4c8be;
  color: ${colors.highlight};
  height: 58px;
  width: 100%;
  position: fixed;
  bottom: 0;
  h3 {
    font-size: 0.8rem;
    padding-left: 30px;
  }
  .iconosContainer {
    font-size: 1.5rem;
    i {
      margin-right: 30px;
    }
  }

  ${media.mobile} {
    .iconosContainer {
      display: none;
    }
  }
`;
