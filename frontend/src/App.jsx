import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage"; // Crea esta página
import HomePage from "./pages/HomePage";   // Mueve tu código principal aquí

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
