import Activities from "./Activities";
import "./App.css";
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
        <Experience />
        <Projects />
        <Skills />
        {/* <Activities /> */}
      </div>
    </>
  );
}

export default App;
