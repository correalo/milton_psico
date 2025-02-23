import { Container, Typography, Box } from '@mui/material';
import Carousel from '../../components/Carousel';
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SocialIcons from '../../components/SocialIcons';
import WhatsAppButton from '../../components/WhatsAppButton';

const StyledSection = styled('section')`
  background-color: #0d1b3e;
  color: white;
  padding: 40px 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const SocialIconsContainer = muiStyled(Box)`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
`;

const WhatsAppIconStyled = muiStyled(WhatsAppIcon)`
  && {
    color: #25D366;
    font-size: 32px;
  }
`;

const FacebookIconStyled = muiStyled(FacebookIcon)`
  && {
    color: #1877F2;
    font-size: 32px;
  }
`;

const InstagramIconStyled = muiStyled(InstagramIcon)`
  && {
    color: #E4405F;
    font-size: 32px;
  }
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
            <Typography variant="subtitle1" gutterBottom>
              Psicólogo Clínico - CRP 13.060
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Atendimento presencial em Ribeirão Preto - SP
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Atendimento on-line para todo o Brasil
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

          <Box my={4} textAlign="center" sx={{ 
            padding: '2rem',
            borderRadius: '8px',
            color: 'white'
          }}>
            <Typography variant="h6" gutterBottom>
              Entre em contato
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
              <Typography variant="body1">
                Telefone: (016) 99155-3901
              </Typography>
              <WhatsAppButton phoneNumber="16991553901" />
            </Box>

            <SocialIcons />
          </Box>
        </Container>
      </StyledSection>
    </main>
  );
};

export default Home;
