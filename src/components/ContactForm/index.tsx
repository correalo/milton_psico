import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, TextField, Button, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { InputMask } from '@react-input/mask';
import axios from 'axios';

const FormWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#0d1b3e',
  padding: '2rem',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '0 auto',
}));

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#f5f5f5',
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0d1b3e',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: 'rgba(0, 0, 0, 0.87)',
    '&::placeholder': {
      color: 'rgba(0, 0, 0, 0.6)',
      opacity: 1,
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(0, 0, 0, 0.6)',
    '&.Mui-focused': {
      color: '#0d1b3e',
    },
  },
}));

const StyledButton = styled(Button)`
  &&&&.MuiButton-root.MuiButton-contained {
    margin-top: 1rem;
    background-color: #0d1b3e !important;
    color: white;
  }

  &&&&.MuiButton-root.MuiButton-contained:hover {
    background-color: #122a5c !important;
  }

  &&&&.MuiButton-root.MuiButton-contained.Mui-focusVisible {
    background-color: #0d1b3e !important;
  }

  &&&&.MuiButton-root.MuiButton-contained.Mui-disabled {
    background-color: rgba(0, 0, 0, 0.12) !important;
  }
`;

interface ContactFormProps {
  textFieldStyle?: React.ComponentType<any>;
  buttonStyle?: React.ComponentType<any>;
}

const ContactForm: React.FC<ContactFormProps> = ({ textFieldStyle: CustomTextField, buttonStyle: CustomButton }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | '';
    message: string;
  }>({
    type: '',
    message: '',
  });

  const validateEmail = (email: string): boolean => {
    // Remove espaços extras
    email = email.trim();

    if (!email) {
      setErrors(prev => ({ ...prev, email: 'Email é obrigatório' }));
      return false;
    }

    // Regex para validação básica de email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(email)) {
      setErrors(prev => ({ ...prev, email: 'Por favor, insira um email válido (exemplo: nome@dominio.com)' }));
      return false;
    }

    setErrors(prev => ({ ...prev, email: '' }));
    return true;
  };

  const validatePhone = (phone: string): boolean => {
    // Remove tudo que não for número
    const phoneNumber = phone.replace(/\D/g, '');
    
    if (!phoneNumber) {
      setErrors(prev => ({ ...prev, phone: 'Telefone é obrigatório' }));
      return false;
    }

    // Verifica se tem 11 dígitos (com DDD)
    if (phoneNumber.length < 11) {
      setErrors(prev => ({ ...prev, phone: 'Telefone incompleto. Formato: (99) 99999-9999' }));
      return false;
    }

    setErrors(prev => ({ ...prev, phone: '' }));
    return true;
  };

  // Validar email sempre que mudar
  useEffect(() => {
    if (formData.email) {
      validateEmail(formData.email);
    }
  }, [formData.email]);

  // Validar telefone sempre que mudar
  useEffect(() => {
    if (formData.phone) {
      validatePhone(formData.phone);
    }
  }, [formData.phone]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Não faz nenhum tratamento no onChange, apenas atualiza o valor
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'name') {
      // Remove espaços do início e fim, e pontos do final
      let cleanValue = value
        .replace(/^\s+/, '') // remove espaços do início
        .replace(/\s+$/, '') // remove espaços do fim
        .replace(/\.+$/, ''); // remove pontos do fim
      
      setFormData(prev => ({
        ...prev,
        name: cleanValue,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Lista para coletar campos com erro
    let errorFields: string[] = [];

    // Validar nome - remove espaços do início e fim, e pontos do final
    const nameValue = formData.name;
    const cleanName = nameValue
      .replace(/^\s+/, '') // remove espaços do início
      .replace(/\s+$/, '') // remove espaços do fim
      .replace(/\.+$/, ''); // remove pontos do fim
    
    if (!cleanName) {
      errorFields.push('Nome');
    } else {
      // Atualiza o nome com os espaços e pontos removidos
      setFormData(prev => ({
        ...prev,
        name: cleanName,
      }));
    }

    // Validar email
    const emailValid = validateEmail(formData.email);
    if (!emailValid) {
      errorFields.push('Email');
    }

    // Validar telefone
    const phoneValid = validatePhone(formData.phone);
    if (!phoneValid) {
      errorFields.push('Telefone');
    }

    // Validar mensagem
    if (!formData.message.trim()) {
      errorFields.push('Mensagem');
    }
    
    // Se houver campos com erro
    if (errorFields.length > 0) {
      setStatus({
        type: 'error',
        message: `Por favor, verifique o preenchimento dos seguintes campos: ${errorFields.join(', ')}`,
      });
      return;
    }

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso!',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setErrors({
          email: '',
          phone: '',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Tente novamente.',
      });
    }
  };

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Entre em Contato
        </Typography>
        <FormWrapper>
          <StyledForm onSubmit={handleSubmit} noValidate>
            {status.type && (
              <Alert 
                severity={status.type}
                sx={{ mb: 2 }}
                onClose={() => setStatus({ type: '', message: '' })}
              >
                {status.message}
              </Alert>
            )}
            
            {CustomTextField ? (
              <CustomTextField
                required
                fullWidth
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                placeholder="Digite seu nome completo"
              />
            ) : (
              <StyledTextField
                required
                fullWidth
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                placeholder="Digite seu nome completo"
              />
            )}
            
            {CustomTextField ? (
              <CustomTextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={(e) => validateEmail(e.target.value)}
                variant="outlined"
                placeholder="exemplo@email.com"
                helperText={errors.email}
              />
            ) : (
              <StyledTextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={(e) => validateEmail(e.target.value)}
                variant="outlined"
                placeholder="exemplo@email.com"
                helperText={errors.email}
              />
            )}
            
            {CustomTextField ? (
              <InputMask
                mask="(99) 99999-9999"
                value={formData.phone}
                onChange={handleChange}
                onBlur={(e) => validatePhone(e.target.value)}
              >
                {(inputProps: any) => (
                  <CustomTextField
                    {...inputProps}
                    required
                    fullWidth
                    label="Telefone"
                    name="phone"
                    variant="outlined"
                    placeholder="(99) 99999-9999"
                    helperText={errors.phone}
                  />
                )}
              </InputMask>
            ) : (
              <InputMask
                mask="(99) 99999-9999"
                value={formData.phone}
                onChange={handleChange}
                onBlur={(e) => validatePhone(e.target.value)}
              >
                {(inputProps: any) => (
                  <StyledTextField
                    {...inputProps}
                    required
                    fullWidth
                    label="Telefone"
                    name="phone"
                    variant="outlined"
                    placeholder="(99) 99999-9999"
                    helperText={errors.phone}
                  />
                )}
              </InputMask>
            )}
            
            {CustomTextField ? (
              <CustomTextField
                required
                fullWidth
                label="Mensagem"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                placeholder="Digite sua mensagem"
              />
            ) : (
              <StyledTextField
                required
                fullWidth
                label="Mensagem"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                placeholder="Digite sua mensagem"
              />
            )}
            
            {CustomButton ? (
              <CustomButton
                type="submit"
                variant="contained"
                fullWidth
                size="large"
              >
                Enviar Mensagem
              </CustomButton>
            ) : (
              <StyledButton
                type="submit"
                variant="contained"
                fullWidth
                size="large"
              >
                Enviar Mensagem
              </StyledButton>
            )}
          </StyledForm>
        </FormWrapper>
      </Box>
    </Container>
  );
};

export default ContactForm;
