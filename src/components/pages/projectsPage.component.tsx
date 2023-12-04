import Footer from "../organisms/footer.component";
import Header from "../organisms/header.component";
import MainContent from "../organisms/mainContent.component";


interface ProjectPageProps {
}

const ProjectPage: React.FC<ProjectPageProps> = ( ProjectPageProps ) => {

    return (
        <>
            <Header/>
            <MainContent tabName='Project Page'/>
            <Footer/>
        </>
    );
}

export default ProjectPage;