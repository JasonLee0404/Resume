import Footer from "../organisms/footer.component";
import Header from "../organisms/header.component";
import MainContent from "../organisms/mainContent.component";


interface InterestPageProps {
}

const InterestPage: React.FC<InterestPageProps> = ( InterestPageProps ) => {

    return (
        <>
            <Header/>
            <MainContent tabName='Interest Page'/>
            <Footer/>
        </>
    );
}

export default InterestPage;