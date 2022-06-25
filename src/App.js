import Navbar from "./components/Navbar.js";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Navbar />}/>
      </Routes>
    </div>
  );
}

export default App;
