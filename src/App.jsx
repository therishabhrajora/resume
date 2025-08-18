import "./App.css";
import Certificates from "./Certificates";
import Education from "./Education";
import Experience from "./Experience";
import Introduction from "./introduction";
import Projects from "./Projects";
import RelavantWork from "./RelavantWork";
import Skills from "./Skills";

function App() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Introduction />
        <Education />
        <RelavantWork />
        <Projects />
        <Experience />
        <Skills />
        <Certificates />
      </div>
    </>
  );
}

export default App;
