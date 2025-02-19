import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, IconButton, List, ListItem, useMediaQuery, useTheme, Collapse } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: black;
    color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
`;

const StyledToolbar = styled(Toolbar)`
  && {
    padding: 0;
    min-height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    @media (max-width: 820px) {
      min-height: 48px;
    }
    
    @media (max-width: 480px) {
      min-height: 40px;
    }
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
`;

const MobileMenu = styled.div`
  width: 100%;
  background-color: black;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const NavLink = styled(Link)`
  && {
    color: white !important;
    text-decoration: none;
    margin: 0 8px;
    font-size: 0.9rem;
    padding: 6px 8px;
    border-radius: 4px;
    transition: background-color 0.2s;
    background-color: transparent !important;

    &:hover {
      background-color: rgba(255,255,255,0.1) !important;
      color: white !important;
    }

    @media (max-width: 820px) {
      font-size: 0.85rem;
      margin: 4px 0;
      display: block;
      text-align: left;
      padding: 12px 16px;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 0 16px;
  padding: 8px 0;

  @media (max-width: 820px) {
    margin: 0 8px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    margin: 0 4px;
  }
`;

const DoctorNameLink = styled(Link)`
  text-decoration: none;
  color: white !important;
  background-color: transparent !important;
  text-align: center;

  @media (max-width: 820px) {
    margin-bottom: 4px;
    display: block;
    width: 100%;
  }

  &:hover, &:active, &:visited {
    color: white !important;
    text-decoration: none;
  }
`;

const DoctorNameText = styled(Typography)`
  && {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
    color: white !important;
    background-color: transparent !important;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 820px) {
      font-size: 0.9rem;
      letter-spacing: 0.3px;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
      letter-spacing: 0.2px;
    }
  }
`;

const ContactInfo = styled(Typography)`
  && {
    color: white;
    font-size: 0.8rem;
    text-align: center;
    line-height: 1.2;
    margin-left: 16px;
    
    @media (max-width: 820px) {
      font-size: 0.75rem;
      margin-left: 0;
      width: 100%;
    }
    
    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
  }
`;

const MenuButton = styled(IconButton)`
  && {
    margin-right: 16px;
    padding: 8px;
    color: white;
    
    @media (max-width: 820px) {
      margin-right: 12px;
      padding: 6px;
    }
    
    @media (max-width: 480px) {
      margin-right: 8px;
      padding: 4px;
    }
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 820px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  && {
    color: white !important;
    text-decoration: none;
    display: block;
    padding: 16px 24px;
    font-size: 1rem;
    transition: background-color 0.2s;
    width: 100%;
    text-align: left;

    &:hover {
      background-color: rgba(255,255,255,0.1);
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 14px 20px;
    }
  }
`;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:820px)');

  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <HeaderContainer>
      <StyledAppBar position="static">
        <Container>
          <StyledToolbar>
            {isMobile && (
              <MenuButton
                color="inherit"
                aria-label="open menu"
                edge="start"
                onClick={handleMenuToggle}
              >
                <MenuIcon />
              </MenuButton>
            )}
            
            <DesktopNav>
              <NavLink to="/">
                Início
              </NavLink>
              <NavLink to="/sobre">
                Sobre
              </NavLink>
              <NavLink to="/servicos">
                Serviços
              </NavLink>
              <NavLink to="/contato">
                Contato
              </NavLink>
            </DesktopNav>

            <HeaderContent>
              <DoctorNameLink to="/">
                <DoctorNameText variant="h4">
                  Dr. José Milton Gomes
                </DoctorNameText>
              </DoctorNameLink>
              <ContactInfo>
                CRP xx.xxx | (016)99155-3901
              </ContactInfo>
            </HeaderContent>
          </StyledToolbar>
        </Container>
      </StyledAppBar>
      
      {isMobile && (
        <Collapse in={mobileOpen}>
          <MobileMenu>
            <Container>
              <MobileNavLink to="/" onClick={handleMenuToggle}>
                Início
              </MobileNavLink>
              <MobileNavLink to="/sobre" onClick={handleMenuToggle}>
                Sobre
              </MobileNavLink>
              <MobileNavLink to="/servicos" onClick={handleMenuToggle}>
                Serviços
              </MobileNavLink>
              <MobileNavLink to="/contato" onClick={handleMenuToggle}>
                Contato
              </MobileNavLink>
            </Container>
          </MobileMenu>
        </Collapse>
      )}
    </HeaderContainer>
  );
};

export default Header;
