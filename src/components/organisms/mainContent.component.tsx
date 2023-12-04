import { Box, Center, HStack, Text } from "@chakra-ui/react";
import SocialMediaIcons from "./socialMediaIcons.component";

interface MainContentProps {
}

const MainContent: React.FC<MainContentProps> = ( MainContentProps ) => {

    return (
        <>
            <Box bg='white' w='100%' backgroundColor='gray.50' padding='2'>
                Hello World
            </Box>
        </>
    );
}

export default MainContent;