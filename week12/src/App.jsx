import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team.jsx";
import TeamById from "./pages/TeamById.jsx";
import NotFound from "./pages/NotFound.jsx";
import {ThemeProvider} from "./context/themeContext.jsx";

function Nav() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold"
      : "text-gray-600 hover:text-gray-900 transition-colors";

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
      <span className="text-xl font-bold text-gray-900">MyApp</span>
      <div className="flex gap-8">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        <NavLink to="/team" className={linkClass}>Team</NavLink>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
        <ThemeProvider>
            <div className="min-h-screen bg-white">
                <Nav />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/team" element={<Team/>}/>
                        <Route path="/team/:name" element={<TeamById/>}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
    </BrowserRouter>
  );
}
