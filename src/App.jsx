import React from "react";
import Layout from "./components/Layout";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import About from "./pages/About"
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Experience from "./pages/Experience";
// import Contacts from "./pages/Contacts";
// import "./styles/global.css";

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<About />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/contacts" element={<Contacts />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
