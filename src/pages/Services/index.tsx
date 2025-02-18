import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid } from '@mui/material';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 40px 0;
  background-color: #3399ff;
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
            Segunda a Sexta: 8h às 18h
          </Typography>
          <Typography variant="body1">
            Sábado: 8h às 12h
          </Typography>
        </Box>
      </Container>
    </StyledSection>
  );
};

export default Services;
