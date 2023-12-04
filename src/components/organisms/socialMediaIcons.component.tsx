import { HStack, Link } from '@chakra-ui/react';
import { IoLogoLinkedin } from "react-icons/io5";

interface SocialMediaIconsProps {
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ( SocialMediaIcons ) => {

    return (
        <>
            <HStack spacing={5}>
                <Link href='https://www.linkedin.com/in/jasonle1402/'><IoLogoLinkedin size={32}/></Link>
            </HStack>
        </>
    );
}

export default SocialMediaIcons;