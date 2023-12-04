import Footer from "../organisms/footer.component";
import Header from "../organisms/header.component";
import MainContent from "../organisms/mainContent.component";


interface LandingPageProps {
}

const LandingPage: React.FC<LandingPageProps> = ( LandingPageProps ) => {

    return (
        <>
            <Header/>
            <MainContent tabName='Main Page'/>
            <Footer/>
        </>
    );
}

export default LandingPage;