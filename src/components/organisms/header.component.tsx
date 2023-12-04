import { Box, Center, HStack, Link, Text, VStack } from "@chakra-ui/react";
import SocialMediaIcons from "./socialMediaIcons.component";

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = ( HeaderProps ) => {

    return (
        <>
            <Box bg='white' w='100%' backgroundColor='gray.200' padding='2'>
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
                <HStack>
                    <Link href='mailto:longle14231@gmail.com'>
                        <Text fontSize='2xl' fontWeight='bold' color='gray.400'>About</Text>
                    </Link>
                
                </HStack>
            </Box>
        </>
    );
}

export default Header;