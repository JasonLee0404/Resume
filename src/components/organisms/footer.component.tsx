import { Box, Center, Text, VStack } from "@chakra-ui/react";
import SocialMediaIcons from "./socialMediaIcons.component";



interface FooterProps {
}

const Footer: React.FC<FooterProps> = ( FooterProps ) => {

    return (
        <>
        <Box bg='white' w='100%' backgroundColor='gray.200' padding='2'>
            <Center>
                <VStack spacing={1}>
                    <Text fontSize='lg' fontWeight='bold' mt='2' color='gray.600'>
                        Jason Le, 2023
                    </Text>
                    <Box mt='2' mb='2'>
                        <SocialMediaIcons/>
                    </Box>
                </VStack>
            </Center>
        </Box>
    </>
    );
}

export default Footer;