import React from "react";
import { About } from "./components/about";
import { MemoizedNavbarChildren, Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar>
        <MemoizedNavbarChildren />
      </Navbar>

      <About />
    </div>
  );
}

export default App;
