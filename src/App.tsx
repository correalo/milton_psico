import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d1b3e',
      dark: '#122a5c',
    },
    secondary: {
      main: '#3498db',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#0d1b3e',
          '&:hover': {
            backgroundColor: '#122a5c',
          },
        },
      },
    },
  },
});

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: black;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
