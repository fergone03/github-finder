import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage"; // Crea esta página
import HomePage from "./pages/HomePage";   // Mueve tu código principal aquí
import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Landing />} />

      </Routes>
    </Router>
  );
};

export default App;
