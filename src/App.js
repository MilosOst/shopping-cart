import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Shop from "./components/Shop.js";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="shop" element={<Shop />}/>
      </Routes>
    </div>
  );
}

export default App;
