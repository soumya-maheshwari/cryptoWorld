import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CoinsPage from "./Pages/CoinsPage";
import Navbar from "./Components/Navbar/Navbar";
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
    </>
  );
}

export default App;
