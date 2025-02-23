import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ContactForm from '../../components/ContactForm';
import styled from 'styled-components';
import SocialIcons from '../../components/SocialIcons';
import WhatsAppButton from '../../components/WhatsAppButton';

const StyledSection = styled('section')`
  padding: 40px 0;
  background-color: #0d1b3e;
  color: white;
  min-height: calc(100vh - 64px);
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
  background-color: #0d1b3e;
  color: white;
  padding: 12px 30px;
  font-size: 1rem;
  text-transform: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  
  &:hover {
    background-color: #122a5c;
  }
`;

const Contact: React.FC = () => {
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
                CRP: 13.060
              </Typography>
              <Typography variant="body1" paragraph>
                Horário de Atendimento:
                <br />
                Segunda a Domingo: 7h às 11h
                <br />
                Presencial ou Online
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body1">
                  Telefone: (016) 99155-3901
                </Typography>
                <WhatsAppButton phoneNumber="16991553901" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <ContactForm 
              textFieldStyle={StyledTextField}
              buttonStyle={StyledButton}
            />
            <Box my={4} textAlign="center">
              <SocialIcons />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default Contact;
