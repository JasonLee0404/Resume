import { Box, Center, HStack, Link, Spacer, Switch, Text, VStack } from "@chakra-ui/react";
import SocialMediaIcons from "./socialMediaIcons.component";
import { Route, Link as WouterLink } from "wouter";
import LandingPage from "../pages/landingPage.component";
import AboutPage from "../pages/aboutPage.component";

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
                            <Link href='mailto:longle14231@gmail.com'>
                                <Text fontSize='2xl' fontWeight='bold' color='gray.400'>About</Text>
                            </Link>

                            <Link href='mailto:longle14231@gmail.com'>
                                <Text fontSize='2xl' fontWeight='bold' color='gray.400'>Technologies</Text>
                            </Link>

                            <Link href='mailto:longle14231@gmail.com'>
                                <Text fontSize='2xl' fontWeight='bold' color='gray.400'>Projects</Text>
                            </Link>

                            <Link href='mailto:longle14231@gmail.com'>
                                <Text fontSize='2xl' fontWeight='bold' color='gray.400'>Industries</Text>
                            </Link>

                            <Link href='mailto:longle14231@gmail.com'>
                                <Text fontSize='2xl' fontWeight='bold' color='gray.400'>Interests</Text>
                            </Link>
                        </HStack>
                    </Center>
                </VStack>
            </Box>
        </>
    );
}

export default Header;