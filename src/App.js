import { React, useState } from "react";
import "./App.css";
import AuthLandingPage from "./Modules/Authentication/AuthLandingPage";
import Footer from "./Modules/SharedModules/Footer";
import Header from "./Modules/SharedModules/Header";
import LandingPage from "./Modules/Pages/LandingPage";

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <div className="App">
      <Header />
      <hr />
      {userAuthenticated ? <AuthLandingPage /> : <LandingPage />}
      <hr />
      <Footer />
    </div>
  );
}

export default App;
