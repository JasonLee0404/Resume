import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Link, Route, Switch } from 'wouter';
import LandingPage from './components/pages/landingPage.component';

function App() {
  return (
    <ChakraProvider>
      <LandingPage/>
    </ChakraProvider>
  );
}

export default App;
