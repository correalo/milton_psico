import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Alert } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 20px;
    background-color: #d0d0d0;
    border-radius: 4px;
    
    .MuiOutlinedInput-root {
      background-color: #d0d0d0;
      
      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: #666;
      }

      .MuiOutlinedInput-input {
        color: #333;
      }

      .MuiInputLabel-root {
        color: #666;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #666;
    color: white;
    padding: 12px 30px;
    font-size: 1rem;
    text-transform: none;
    
    &:hover {
      background-color: #555;
    }
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', formData);
      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Retornaremos em breve.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Por favor, tente novamente.',
      });
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Entre em Contato
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          {status.type && (
            <Alert severity={status.type} sx={{ mb: 2 }}>
              {status.message}
            </Alert>
          )}
          <StyledTextField
            required
            fullWidth
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
          />
          <StyledTextField
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
          />
          <StyledTextField
            required
            fullWidth
            label="Telefone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
          />
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
          />
          <StyledButton type="submit" variant="contained">
            Enviar Mensagem
          </StyledButton>
        </StyledForm>
      </Box>
    </Container>
  );
};

export default ContactForm;
