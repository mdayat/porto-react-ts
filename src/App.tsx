import React from "react";
import { MemoizedNavbarChildren, Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar>
        <MemoizedNavbarChildren />
      </Navbar>
    </div>
  );
}

export default App;
