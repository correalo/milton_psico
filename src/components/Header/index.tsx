import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: black;
    color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
`;

const NavLink = styled(Link)`
  && {
    color: white !important;
    text-decoration: none;
    margin: 0 8px;
    font-size: 1rem;
    padding: 6px 8px;
    border-radius: 4px;
    transition: background-color 0.2s;
    background-color: transparent !important;

    &:hover {
      background-color: rgba(255,255,255,0.1) !important;
      color: white !important;
    }
  }
`;

const ContactInfo = styled(Typography)`
  && {
    margin-left: 16px;
    color: white;
    font-size: 0.9rem;
  }
`;

const Header = () => {
  return (
    <StyledAppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" style={{ 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'white',
            backgroundColor: 'transparent'
          }}>
            Dr. José Milton Gomes
          </Typography>
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
          <ContactInfo>
            CRP xx.xxx | (016)99155-3901
          </ContactInfo>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
