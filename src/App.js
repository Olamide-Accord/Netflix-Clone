import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'lib/styles/theme';
import GlobalStyles from 'lib/styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from 'pages/Home'
import SignIn from "pages/SignIn"
import SignUp from "pages/SignUp"
import User from "pages/User"

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<SignIn />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path="browse" element={<User />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
