import { HStack, Link, Tooltip } from '@chakra-ui/react';
import { IoMdMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
interface SocialMediaIconsProps {
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ( SocialMediaIcons ) => {

    return (
        <>
            <HStack spacing={5}>
                <Tooltip label='https://www.linkedin.com/in/jasonle1402/'>
                    <Link href='https://www.linkedin.com/in/jasonle1402/'><IoLogoLinkedin size={32}/></Link>
                </Tooltip>
                
                <Tooltip label='longle14231@gmail.com'>
                    <Link href='mailto:longle14231@gmail.com'><IoMdMail size={32}/></Link>
                </Tooltip>
                
            </HStack>
        </>
    );
}

export default SocialMediaIcons;