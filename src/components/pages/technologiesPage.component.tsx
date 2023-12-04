import Footer from "../organisms/footer.component";
import Header from "../organisms/header.component";
import MainContent from "../organisms/mainContent.component";


interface TechnologyPageProps {
}

const TechnologyPage: React.FC<TechnologyPageProps> = ( TechnologyPageProps ) => {

    return (
        <>
            <Header/>
            <MainContent tabName='Technology Page'/>
            <Footer/>
        </>
    );
}

export default TechnologyPage;