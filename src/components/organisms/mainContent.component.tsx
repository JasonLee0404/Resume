import { Box, Card, CardBody, Text, Image, List, ListItem } from "@chakra-ui/react";
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

                    <Text as='b' fontSize='2xl'>{content.workingRights.heading}</Text>
                    <List spacing={1} styleType='disc' ml='1rem'>
                        {content.workingRights.detail.map((item, index) => (
                            <ListItem key={index}>{item}</ListItem>
                        ))}
                     </List>

                            
                    <Text as='b' fontSize='2xl'>{content.qualifications.heading}</Text>
                    <List spacing={1} styleType='disc' ml='1rem'>
                        {content.qualifications.detail.map((item, index) => (
                            <ListItem key={index}>
                                {item.name}
                                {item.year}
                                {item.detail}                             
                            </ListItem>
                        ))}
                     </List>
                </CardBody>
            </Card>
        </>
    } else if (tabName === 'Project Page') {
        mainContent = 
        <>
            BBB
        </>
    } else if (tabName === 'Technology Page') {

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