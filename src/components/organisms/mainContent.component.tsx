import { Box, Card, CardBody, Text, Image, List, ListItem, VStack, HStack, Divider } from "@chakra-ui/react";
import { content, projects } from "../../content/content";
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
            <VStack align='left' ml='5rem'>
                <Text as='b' fontSize='2xl'>{projects.project1.name}</Text>
                <HStack>
                    <Text as='b'>Technologies: </Text>
                    {projects.project1.technologies.map((item, index) => (
                        <Text>{item}</Text>
                    ))}
                </HStack>

                <Divider/>

                <Text as='b' fontSize='2xl'>{projects.project2.name}</Text>
                <HStack>
                    <Text as='b'>Technologies: </Text>
                    {projects.project2.technologies.map((item, index) => (
                        <Text>{item}</Text>
                    ))}
                </HStack>

                <Divider/>

                <Text as='b' fontSize='2xl'>{projects.project3.name}</Text>
                <HStack>
                    <Text as='b'>Technologies: </Text>
                    {projects.project3.technologies.map((item, index) => (
                        <Text>{item}</Text>
                    ))}
                </HStack>

                <Divider/>

                <Text as='b' fontSize='2xl'>{projects.project4.name}</Text>
                <HStack>
                    <Text as='b'>Technologies: </Text>
                    {projects.project3.technologies.map((item, index) => (
                        <Text>{item}</Text>
                    ))}
                </HStack>

            </VStack>
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