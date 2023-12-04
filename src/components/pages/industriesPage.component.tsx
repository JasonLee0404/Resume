import Footer from "../organisms/footer.component";
import Header from "../organisms/header.component";
import MainContent from "../organisms/mainContent.component";


interface IndustryPageProps {
}

const IndustryPage: React.FC<IndustryPageProps> = ( IndustryPageProps ) => {

    return (
        <>
            <Header/>
            <MainContent tabName='Industry Page'/>
            <Footer/>
        </>
    );
}

export default IndustryPage;