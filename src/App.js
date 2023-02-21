import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CoinsPage from "./Pages/CoinsPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/coins/:id" element={<CoinsPage />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
