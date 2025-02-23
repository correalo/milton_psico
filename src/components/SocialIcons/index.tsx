import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialIconsContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
`;

const IconLink = styled('a')`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const WhatsAppIconStyled = styled(WhatsAppIcon)`
  && {
    color: #25D366;
    font-size: 48px;
  }
`;

const FacebookIconStyled = styled(FacebookIcon)`
  && {
    color: #1877F2;
    font-size: 48px;
  }
`;

const InstagramIconStyled = styled(InstagramIcon)`
  && {
    color: #E4405F;
    font-size: 48px;
  }
`;

const SocialIcons = () => {
  return (
    <SocialIconsContainer>
      <IconLink 
        href="https://wa.me/5516991553901" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsAppIconStyled />
      </IconLink>
      <IconLink 
        href="https://www.instagram.com/miltoncobiancogomes" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        onClick={(e) => {
          e.preventDefault();
          window.open('https://www.instagram.com/miltoncobiancogomes', '_blank');
        }}
      >
        <InstagramIconStyled />
      </IconLink>
      <IconLink 
        href="https://www.facebook.com/josemiltongomespsi" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FacebookIconStyled />
      </IconLink>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
