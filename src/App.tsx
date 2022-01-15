import { About } from "./components/about";
import { MemoizedNavbarChildren, Navbar } from "./components/navbar";
import { Project } from "./components/projects";

function App() {
  return (
    <div className="App">
      <Navbar>
        <MemoizedNavbarChildren />
      </Navbar>

      <About />
      <Project />
    </div>
  );
}

export default App;
