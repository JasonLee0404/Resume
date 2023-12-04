import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import LandingPage from './components/pages/landingPage.component';

function App() {
  return (
    <ChakraProvider>
      <LandingPage/>
    </ChakraProvider>
  );
}

export default App;
