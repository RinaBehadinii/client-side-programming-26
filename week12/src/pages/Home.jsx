import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "../context/themeContext.jsx";

export default function Home() {

  const navigate = useNavigate();
  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome</h1>
      <p className="text-xl text-gray-500">A simple app to demo deployment.</p>
      <div>The theme is: {theme}</div>
      <button
          onClick={() => setTheme((prevState) => prevState === "Light" ? "Dark" : "Light")}
          className="border border-gray-500 p-2 m-2">Toggle Theme</button>

      <button
          onClick={()=> navigate("/about")}
          className="border border-gray-500 p-2 m-2">Go to About page</button>
    </div>
  );
}
