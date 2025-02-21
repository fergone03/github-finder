import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage"; 
import HomePage from "./pages/HomePage";  
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
