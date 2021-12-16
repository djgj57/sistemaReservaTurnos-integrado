import React from "react";
import { FooterContainer } from "./FooterStyled";

export default function Footer() {
  return (
    <FooterContainer>
      <h3 data-testid="text-copyright">©2021 Hus</h3>
      <div className="iconosContainer">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        
      </div>
    </FooterContainer>
  );
}
