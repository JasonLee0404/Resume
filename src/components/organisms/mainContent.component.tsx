import { Box } from "@chakra-ui/react";

interface MainContentProps {
    tabName?: string
}

const MainContent: React.FC<MainContentProps> = ( { tabName} ) => {

    return (
        <>
            <Box flex='1' bg='white' w='100%' backgroundColor='gray.50' padding='2'>
                This is main content page for {tabName}
            </Box>
        </>
    );
}

export default MainContent;