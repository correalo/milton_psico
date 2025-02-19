import { Container, Typography, Box, IconButton } from '@mui/material';
import Carousel from '../../components/Carousel';
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledSection = styled.section`
  min-height: calc(100vh - 64px);
  background-color: black;
  padding: 20px;
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
            <SocialIconsContainer>
              <IconButton 
                href="https://wa.me/5516991553901" 
                target="_blank"
                aria-label="WhatsApp"
              >
                <WhatsAppIconStyled />
              </IconButton>
              <IconButton 
                href="https://www.instagram.com/josemiltongomespsi" 
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIconStyled />
              </IconButton>
              <IconButton 
                href="https://www.facebook.com/josemiltongomespsi" 
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIconStyled />
              </IconButton>
            </SocialIconsContainer>
          </Box>
        </Container>
      </StyledSection>
    </main>
  );
};

export default Home;
