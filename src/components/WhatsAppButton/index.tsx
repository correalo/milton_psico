import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/material/styles';

interface WhatsAppButtonProps {
  phoneNumber: string;
  size?: 'small' | 'medium' | 'large';
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#25D366', // Cor oficial do WhatsApp
  '&:hover': {
    backgroundColor: 'rgba(37, 211, 102, 0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem',
    },
  },
}));

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, size = 'medium' }) => {
  const formatPhoneNumber = (phone: string) => {
    // Remove todos os caracteres não numéricos
    const numbers = phone.replace(/\D/g, '');
    
    // Se tiver 11 dígitos (DDD + número), adiciona 55
    if (numbers.length === 11) {
      return `55${numbers}`;
    }
    
    // Se tiver 10 dígitos (DDD + número sem 9), adiciona 55 e 9
    if (numbers.length === 10) {
      return `55${numbers.slice(0, 2)}9${numbers.slice(2)}`;
    }
    
    return numbers;
  };

  const handleClick = () => {
    const formattedNumber = formatPhoneNumber(phoneNumber);
    window.open(`https://wa.me/${formattedNumber}`, '_blank');
  };

  return (
    <Tooltip title="Enviar mensagem no WhatsApp" placement="top">
      <StyledIconButton
        onClick={handleClick}
        size={size}
        aria-label="Enviar mensagem no WhatsApp"
      >
        <WhatsAppIcon fontSize={size} />
      </StyledIconButton>
    </Tooltip>
  );
};

export default WhatsAppButton;
