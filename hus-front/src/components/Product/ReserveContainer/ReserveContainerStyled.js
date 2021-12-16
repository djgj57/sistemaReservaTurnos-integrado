import Styled from "styled-components";
import { media } from "./../../styles/utils/media";

export const ReserveContainerStyled = Styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    font-family: Roboto, sans-serif
  }

.title{
  background: #ebebee;
  width: 100%;
  font-weight: 400;
  
}


h2{
  padding-top:15px;
  margin-left: 35px;

}

  .reserveContainer{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    background: #ebebee;
    padding-bottom:30px;
    padding-top: 15px
    
  }

  .reserve{
    width:30vw;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 15px
  }

  .info-reserve{
    margin-bottom: 10px;
    font-weight: 700;
  }

  ${media.tablet}{
    .reserveContainer{
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: space-around;
    }

    .reserve{
      width:95vw;
      margin-top: 20px;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
    }

    .info-reserve{
      width: 43vw
    }
  }

  ${media.mobile}{

    .reserveContainer{
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: space-around;
    }

    .reserve{
      width:95vw;
      margin-top: 20px;
    }

    .info-reserve{
      width: 90vw
    }
    .react-calendar--doubleView .react-calendar__viewContainer{
      padding-top:10px;
      margin:0px;
    }
  }




`;
