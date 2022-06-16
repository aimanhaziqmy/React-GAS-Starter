import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
