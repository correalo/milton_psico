import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import SocialIcons from '../../components/SocialIcons';

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

const About = () => {
  return (
    <StyledSection>
      <Container>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Sobre Mim
          </Typography>
        </Box>
        
        <Box mb={4}>
          <Typography variant="body1" paragraph>
            Com mais de 45 anos de experiência em psicologia clínica, dedico-me a ajudar pessoas
            a encontrarem equilíbrio emocional e bem-estar mental.
          </Typography>
          
          <Typography variant="body1" paragraph>
            Minha abordagem é centrada na pessoa, considerando cada indivíduo como único,
            com suas próprias experiências, desafios e potencialidades.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            Formação
          </Typography>
          <Typography variant="body1" paragraph>
            • Graduação em Psicologia - Universidade de São Paulo (1980)
          </Typography>
          <Typography variant="body1" paragraph>
            • Especialização em Psicanálise
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" gutterBottom>
            Áreas de Atuação
          </Typography>
          <Typography variant="body1" component="ul">
            <li>Ansiedade e Depressão</li>
            <li>Terapia Individual</li>
            <li>Desenvolvimento Pessoal</li>
            <li>Relacionamentos</li>
          </Typography>
        </Box>
        <Box my={4} textAlign="center">
          <SocialIcons />
        </Box>
      </Container>
    </StyledSection>
  );
};

export default About;
