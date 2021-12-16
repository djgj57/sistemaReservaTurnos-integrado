import styled from "styled-components";
import { colors } from "./../../styles/utils/colors";
import { media } from "./../../styles/utils/media";

export const SearchContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color:${colors.backgroundPrimary};
    color:${colors.highlight};
    font-size:1.2rem;
    position: fixed;
    top: 90px;
    width:100%;
    height:150px;
    z-index:1;
    box-shadow: -1px 2px 8px 0px rgba(0,0,0,0.15);
    -webkit-box-shadow: -1px 2px 8px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: -1px 2px 8px 0px rgba(0,0,0,0.15);

    h2{
        text-align:center;
        padding-bottom:10px;
        font-size:2.5rem;
    }

    .searchMenu{
        display:flex;
        margin:10px;
        
        .dates, .cities{
            display:flex;
            flex-direction:column;
            width:35vw;
            height:40px;
            background-color:${colors.primary};
            color:${colors.secondary};
            border:none;
            margin-right:10px;
            border-radius: 5px;
            .calender{
                div:first-child{
                    border-radius:0 0 6px 6px;
                }
            }
            .selectCity, .selectDate{
                display:flex;
                align-items:center;
                margin-bottom:10px;
                font-size:1.1rem;
                input{
                    background-color: ${colors.primary};
                    color:${colors.secondary};
                    border:none;
                    outline: none;
                    font-size:1.1rem;
                    ::placeholder { color:${colors.secondary}; }
                    width:90%; 
                }
            }

            i {
                margin:10px;
            }
            ul { 
                width:100%;
                background-color:${colors.primary};
                padding:10px;
                -webkit-box-shadow: 2px 9px 24px 4px #707070; 
                box-shadow: 2px 9px 24px 4px #707070;
                border-radius:0 0 6px 6px;              
                li{
                    display:flex;
                    list-style:none;
                    border-top: 2px solid ${colors.highlight};
                    div {
                        margin:10px;
                        .cityName{
                            font-weight: bold;
                        }
                    }
                }
                li:first-child {
                    border-top: none;
                  }
            }
        }
    }
    ${"@media(max-width: 990px)"}{
        h2{
            font-size:2.2rem;
            padding:0 10px 0 10px;
        }
      }

    ${media.tablet} {
        h2{
            font-size:1.9rem;
            padding:0 10px 0 10px;
        }
        .searchMenu{ 
            .dates, .cities{
                font-size: 1rem;
                .calender{
                    align-self:flex-end;
                    
                } 
            }  
        }


    ${media.mobile} {
        height:260px;
        h2{
            font-size:1.6rem;
            padding:0 10px 0 10px;
        }
        .searchMenu{  
            flex-direction:column;
            .dates, .cities{
                font-size: 1rem;
                width:90vw;
                margin-bottom:10px;
                margin-right:0;
                    
                ul{
                    z-index:1;
                }
                .calender{
                    align-self:flex-end;
                    z-index:1;
                    
                    
                }
            } 
        }
    }
`;
