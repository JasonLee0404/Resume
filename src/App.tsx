import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import LandingPage from './components/pages/landingPage.component';
import { Route, Switch } from 'wouter';
import AboutPage from './components/pages/aboutPage.component';
import IndustryPage from './components/pages/industriesPage.component';
import TechnologyPage from './components/pages/technologiesPage.component';
import ProjectPage from './components/pages/projectsPage.component';
import InterestPage from './components/pages/interestsPage.component';

function App() {
  return (
    <ChakraProvider>
      <Switch>
        <Route path='/' component={() => <LandingPage/>}/>
        <Route path='/about' component={() => <AboutPage/>}/>
        <Route path='/technologies' component={() => <TechnologyPage/>}/>
        <Route path='/projects' component={() => <ProjectPage/>}/>
        <Route path='/industries' component={() => <IndustryPage/>}/>
        <Route path='/interests' component={() => <InterestPage/>}/>
    </Switch>
    </ChakraProvider>
  );
}

export default App;
