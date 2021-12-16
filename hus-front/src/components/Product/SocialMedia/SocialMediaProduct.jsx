import { SocialMediaProductStyled } from "./SocialMediaProductStyled";
import Like from "./../../shared/Like/Like";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SocialMedia from "../../shared/SocialMedia/SocialMedia";
import { styled, keyframes } from '@stitches/react';
import SocialMediaIcon from "../../../images/SocialMedia"
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';



const SocialMediaProduct = ({ id }) => {
  const [like, setLike] = useState(false);
  const location = useLocation();

  const url = window.location.href;

  const StyledContent = styled(DropdownMenuPrimitive.Content, {
    minWidth: 220,
  });

  const itemStyles = {
    all: 'unset',
    fontSize: 13,
    lineHeight: 1,
    borderRadius: 3,
    display: 'block',
    alignItems: 'center',
    height: 25,
    padding: '0 5px',
    position: 'absolute',
    paddingLeft: 25,
    userSelect: 'none',
  };

  const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });



 const DropdownMenu = DropdownMenuPrimitive.Root;
 const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
 const DropdownMenuContent = StyledContent;
 const DropdownMenuItem = StyledItem;

  const Box = styled('div', {});


  const IconButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 35,
    width: 35,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',

  });


  return (
    <SocialMediaProductStyled>
<Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Customise options">
      <SocialMediaIcon />
          </IconButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuItem>
              <SocialMedia shareUrl={url} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>


      <div>
    
        <Like
          checked={like}
          setChecked={setLike}
          id={id}
          location={location.pathname}
        />
      </div>
    </SocialMediaProductStyled>
  );
};


export default SocialMediaProduct;
