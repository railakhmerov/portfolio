import Navigation from "../../components/Navigation/Navigation";
import ProjectsStartText from "../../components/ProjectsStartText/ProjectsStartText";
import ProjectsWrapper from "../../components/ProjectsWrapper/ProjectsWrapper";

function ProjectsPage() {
   return (
      <div className="projects-page w-full 
      lg:flex">
         <header className="navigation mb-10
         lg:mb-0 lg:max-h-full lg:w-[10%] lg:flex">
            <Navigation />
         </header>
         <main>
            <div className="projects">
               <div className="container px-4 min-w-full w-full my-0">
                  <div className="mb-28 w-full
                  lg:py-14 lg:px-5 lg:mb-0">
                     <ProjectsStartText />
                     <ProjectsWrapper />
                  </div>                     
               </div>
            </div>
         </main>
      </div>
   );
}

export default ProjectsPage;