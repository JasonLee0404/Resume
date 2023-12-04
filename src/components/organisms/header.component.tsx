import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
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
                            <Text fontSize='6xl' fontWeight='bold'>Jason Le</Text>
                            <Text fontSize='2xl' fontWeight='bold'>Adelaide, South Australia</Text>
                            <Box>
                                <SocialMediaIcons/>
                            </Box>
                        </VStack>
                    </HStack>
                </Center>
            </Box>
        </>
    );
}

export default Header;