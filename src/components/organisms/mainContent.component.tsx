import { Box, Card, CardBody, Text, Image } from "@chakra-ui/react";
import { content } from "../../content/content";
import aboutMe from "../../assets/aboutMe.jpg"

interface MainContentProps {
    tabName?: string
}

const MainContent: React.FC<MainContentProps> = ( { tabName} ) => {

    let mainContent; 

    if (tabName === 'About Page') {
        mainContent = 
        
        <>
            <Card>
                
                <CardBody>
                    
                    <Text as='b' fontSize='2xl'>{content.aboutMe.heading}</Text>
                    <Text>{content.aboutMe.detail}</Text>
                    <Box boxSize='sm' mt='1rem'>
                        <Image src={aboutMe} borderRadius='lg'/>
                    </Box>
                </CardBody>
            </Card>
        </>
    } else if (tabName === 'Project Page') {
        mainContent = 
        <>
            BBB
        </>
    }


    return (
        <>
            <Box flex='1' bg='white' w='100%' backgroundColor='gray.50' padding='2'>
                {mainContent}
            </Box>
        </>
    );
}

export default MainContent;