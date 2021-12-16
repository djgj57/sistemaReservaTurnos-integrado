import { SocialMediaStyled } from "./SocialMediaStyled";
import React from "react";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

export default function SocialMedia({ shareUrl }) {
  return (
    <SocialMediaStyled>
      <FacebookShareButton url={shareUrl} quote="Facebook">
        <FacebookIcon size={32} round/>
      </FacebookShareButton>
      <TelegramShareButton url={shareUrl} quote="Telegram">
        <TelegramIcon size={32} round/>
      </TelegramShareButton>
      <WhatsappShareButton url={shareUrl} quote="Whatsapp">
        <WhatsappIcon size={32} round/>
      </WhatsappShareButton>
      <TwitterShareButton url={shareUrl} quote="Twitter">
        <TwitterIcon size={32} round/>
      </TwitterShareButton>
    </SocialMediaStyled>
  );
}
