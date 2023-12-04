import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import SocialMediaIcons from "./socialMediaIcons.component";
import { Route, Link, Switch } from "wouter";
import LandingPage from "../pages/landingPage.component";
import AboutPage from "../pages/aboutPage.component";
import IndustryPage from "../pages/industriesPage.component";

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = ( HeaderProps ) => {

    return (
        <>
            <Box bg='white' w='100%' backgroundColor='gray.200' padding='2'>
                <VStack spacing={8}>
                    <Center>
                        <HStack spacing={10}>
                            <VStack spacing={1}>
                                <Text fontSize='6xl' fontWeight='bold' color='gray.600'>Jason Le</Text>
                                <Text fontSize='2xl' fontWeight='bold' color='gray.600'>Adelaide, South Australia</Text>
                                <Box>
                                    <SocialMediaIcons/>
                                </Box>
                            </VStack>
                        </HStack>
                    </Center>

                    <Center>
                        <HStack spacing='10rem'>
                            <Switch>
                                <Route path='/about' component={() => <AboutPage/>}/>
                                {/* <Route path='/technologies' component={() => <TechnologyPage/>}/>
                                <Route path='/projects' component={() => <ProjectPage/>}/> */}
                                <Route path='/industries' component={() => <IndustryPage/>}/>
                                {/* <Route path='/interests' component={() => <InterestPage/>}/> */}
                            </Switch>
                            <Link to='/about'>
                                <Text fontSize='2xl' fontWeight='bold' color='gray.400'>About</Text>
                            </Link>

                            {/* <Link to='/technologies'>
                                <Text fontSize='2xl' fontWeight='bold' color='gray.400'>Technologies</Text>
                            </Link> */}

                            {/* <Link to='/projects'>
                                <Text fontSize='2xl' fontWeight='bold' color='gray.400'>Projects</Text>
                            </Link> */}

                            <Link to='/industries'>
                                <Text fontSize='2xl' fontWeight='bold' color='gray.400'>Industries</Text>
                            </Link>

                            {/* <Link to='/interests'>
                                <Text fontSize='2xl' fontWeight='bold' color='gray.400'>Interests</Text>
                            </Link>  */}
                        </HStack>
                    </Center>
                </VStack>
            </Box>
        </>
    );
}

export default Header;