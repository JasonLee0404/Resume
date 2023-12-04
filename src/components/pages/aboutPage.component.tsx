import Footer from "../organisms/footer.component";
import Header from "../organisms/header.component";
import MainContent from "../organisms/mainContent.component";


interface AboutPageProps {
}

const AboutPage: React.FC<AboutPageProps> = ( AboutPageProps ) => {

    return (
        <>
            <Header/>
            <MainContent tabName={'About Page'}/>
            <Footer/>
        </>
    );
}

export default AboutPage;