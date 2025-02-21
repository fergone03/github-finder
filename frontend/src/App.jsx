import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        <Footer />
    </Router>
  );
};

export default App;
