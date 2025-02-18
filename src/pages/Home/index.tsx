import { Container, Typography, Box } from '@mui/material';
import Carousel from '../../components/Carousel';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 40px 0;
  background-color: #3399ff;  // Azul mais escuro
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const Home = () => {
  const images = [
    {
      src: '/images/consultorio vista 1.jpeg',
      alt: 'Consultório vista 1',
    },
    {
      src: '/images/atendimento.jpeg',
      alt: 'Dr. José Milton em atendimento',
    },
    {
      src: '/images/consultorio vista 1.jpeg',
      alt: 'Consultório vista 1',
    },
    {
      src: '/images/atendimento.jpeg',
      alt: 'Dr. José Milton em atendimento',
    }
  ];

  return (
    <main>
      <Carousel images={images} />
      
      <StyledSection>
        <Container>
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              José Milton Gomes
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Psicólogo Clínico - CRP xx.xxx
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Atendimento em Ribeirão Preto - SP
            </Typography>
          </Box>

          <Box my={4}>
            <Typography variant="body1" paragraph>
              Bem-vindo ao meu consultório! Sou especializado em atendimento psicológico com foco em:
            </Typography>
            <ul>
              <Typography component="li" variant="body1">Terapia Individual</Typography>
              <Typography component="li" variant="body1">Ansiedade e Depressão</Typography>
              <Typography component="li" variant="body1">Desenvolvimento Pessoal</Typography>
              <Typography component="li" variant="body1">Relacionamentos</Typography>
            </ul>
          </Box>

          <Box my={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Entre em contato
            </Typography>
            <Typography variant="body1">
              Telefone/WhatsApp: (016)99155-3901
            </Typography>
            <Typography variant="body1">
              Atendimento em Ribeirão Preto - SP
            </Typography>
          </Box>
        </Container>
      </StyledSection>
    </main>
  );
};

export default Home;
