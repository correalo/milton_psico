import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid } from '@mui/material';
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

const StyledCard = styled(Card)`
  height: 100%;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Services = () => {
  const services = [
    {
      title: 'Terapia Individual',
      description: 'Atendimento personalizado focado nas necessidades específicas de cada pessoa.',
    },
    {
      title: 'Ansiedade e Depressão',
      description: 'Tratamento especializado para transtornos de ansiedade e depressão.',
    },
    {
      title: 'Desenvolvimento Pessoal',
      description: 'Apoio no processo de autoconhecimento e crescimento pessoal.',
    },
    {
      title: 'Relacionamentos',
      description: 'Auxílio em questões relacionadas a relacionamentos interpessoais.',
    },
  ];

  return (
    <StyledSection>
      <Container>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Serviços
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Conheça as áreas em que posso ajudar você
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Box mt={6} textAlign="center">
          <Typography variant="h6" gutterBottom>
            Horário de Atendimento
          </Typography>
          <Typography variant="body1">
            Segunda a Domingo: 7h às 11h
          </Typography>
          <Typography variant="body1">
            Presencial ou Online
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
          <Typography variant="body1">
            Agende sua consulta: (016) 99155-3901
          </Typography>
          <WhatsAppButton phoneNumber="16991553901" />
        </Box>
        <Box my={4} textAlign="center">
          <SocialIcons />
        </Box>
      </Container>
    </StyledSection>
  );
};

export default Services;
