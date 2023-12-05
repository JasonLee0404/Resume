import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "wouter";
import SocialMediaIcons from "./socialMediaIcons.component";

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
                                <Link to='/about'>
                                    <Box
                                        pl={4}
                                        pr={4}
                                        borderRadius='md'
                                        bg='gray.200'
                                        _hover={{ bg: 'gray.500'}}
                                    >
                                        <Text fontSize='6xl' fontWeight='bold' color='gray.600' _hover={{ color:'white'}}>Jason Le</Text>
                                    </Box>     
                                </Link>
                                <Text fontSize='2xl' fontWeight='bold' color='gray.600'>Adelaide, South Australia</Text>
                                <Box>
                                    <SocialMediaIcons/>
                                </Box>
                            </VStack>
                        </HStack>
                    </Center>

                    <Center>
                        <HStack spacing='10rem'>
                            <Link to='/about'>
                                <Box
                                    pl={4}
                                    pr={4}
                                    borderRadius='md'
                                    bg='gray.200'
                                    _hover={{ bg: 'gray.500'}}
                                >
                                    <Text fontSize='2xl' fontWeight='bold' color='gray.400' _hover={{ color:'white'}}>About</Text>
                                </Box>     
                            </Link>

                            <Link to='/technologies'>
                            <Box
                                    pl={4}
                                    pr={4}
                                    borderRadius='md'
                                    bg='gray.200'
                                    _hover={{ bg: 'gray.500'}}
                                >
                                    <Text fontSize='2xl' fontWeight='bold' color='gray.400' _hover={{ color:'white'}}>Technologies</Text>
                                </Box>
                            </Link>

                            <Link to='/projects'>
                            <Box
                                    pl={4}
                                    pr={4}
                                    borderRadius='md'
                                    bg='gray.200'
                                    _hover={{ bg: 'gray.500'}}
                                >
                                    <Text fontSize='2xl' fontWeight='bold' color='gray.400' _hover={{ color:'white'}}>Projects</Text>
                                </Box>
                            </Link>

                            <Link to='/industries'>
                            <Box
                                    pl={4}
                                    pr={4}
                                    borderRadius='md'
                                    bg='gray.200'
                                    _hover={{ bg: 'gray.500'}}
                                >
                                    <Text fontSize='2xl' fontWeight='bold' color='gray.400' _hover={{ color:'white'}}>Industries</Text>
                                </Box>
                            </Link>

                            <Link to='/interests'>
                                <Box
                                    pl={4}
                                    pr={4}
                                    borderRadius='md'
                                    bg='gray.200'
                                    _hover={{ bg: 'gray.500'}}
                                >
                                    <Text fontSize='2xl' fontWeight='bold' color='gray.400' _hover={{ color:'white'}}>Interests</Text>
                                </Box>
                            </Link> 
                        </HStack>
                    </Center>
                </VStack>
            </Box>
        </>
    );
}

export default Header;