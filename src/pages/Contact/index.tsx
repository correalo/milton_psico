import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ContactForm from '../../components/ContactForm';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 40px 0;
  background-color: black;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const StyledTextField = styled.input`
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #666;
  color: white;
  padding: 12px 30px;
  font-size: 1rem;
  text-transform: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #555;
  }
`;

const Contact = () => {
  return (
    <StyledSection>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box mb={4}>
              <Typography variant="h3" component="h1" gutterBottom>
                Contato
              </Typography>
              <Typography variant="body1" paragraph>
                Entre em contato para agendar uma consulta ou tirar suas dúvidas.
              </Typography>
            </Box>

            <Box mb={4}>
              <Typography variant="h6" gutterBottom>
                Informações de Contato
              </Typography>
              <Typography variant="body1" paragraph>
                Telefone/WhatsApp: (016)99155-3901
              </Typography>
              <Typography variant="body1" paragraph>
                CRP: xx.xxx
              </Typography>
              <Typography variant="body1" paragraph>
                Localização: Ribeirão Preto - SP
              </Typography>
            </Box>

            <Box mb={4}>
              <Typography variant="h6" gutterBottom>
                Horário de Atendimento
              </Typography>
              <Typography variant="body1">
                Segunda a Sexta: 8h às 18h
              </Typography>
              <Typography variant="body1">
                Sábado: 8h às 12h
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <ContactForm 
              textFieldStyle={StyledTextField}
              buttonStyle={StyledButton}
            />
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default Contact;
