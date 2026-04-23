import './App.css'
import {Route, Routes} from "react-router";
import LoginPage from "./pages/LoginPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import {UserProvider} from "./context/userContext.jsx";

function App() {

  return <UserProvider>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/welcome" element={<WelcomePage/>}/>
          </Routes>
  </UserProvider>
}

export default App
