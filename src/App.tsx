import { About } from "./components/about";
import { Footer } from "./components/footer";
import { MemoizedNavbarChildren, Navbar } from "./components/navbar";
import { Project } from "./components/projects";

function App() {
  return (
    <div id="home" className="App scroll-smooth">
      <Navbar>
        <MemoizedNavbarChildren />
      </Navbar>

      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
