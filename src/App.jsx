import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/headers/MainHeader";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";

function App() {
  return (
    <main className="bg-[#1E1E1E]">
      <MainHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
