import { useState } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoImage,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaGithub, FaLinkedinIn, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {
  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoImage
              src={
                "https://avatars.githubusercontent.com/u/79053378?v=4"
              }
              alt={userData.nameUser}
              title={userData.nameUser}
              width={"48px"}
              height={"48px"}
            />
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        {isWide ? open && <NavLinks /> : <NavLinks />}
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  return (
    <NavbarLinks>
      {userData.githubUser && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="Github"
          href={`https://github.com/${userData.githubUser}`}
        >
          <FaGithub />
        </Button>
      )}

      {userData.linkedinUser && (
        <Button
          type="icon"
          target="_blank"
          as="a"
          aria-label="LinkedIn"
          href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
        >
          <FaLinkedinIn />
        </Button>
      )}
    </NavbarLinks>
  );
};
