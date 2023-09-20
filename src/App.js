import { React } from "react";
import "./App.css";
//import AuthLandingPage from "./Modules/Authentication/AuthLandingPage";
//import Footer from "./Modules/SharedModules/Footer";
//import Header from "./Modules/SharedModules/Header";
import LandingPage from "./Modules/Pages/LandingPage";
//import SignIn from "./Modules/Authentication/SignIn";
//import SignUp from "./Modules/Authentication/SignUp";
//import AuthLandingPage from "./Modules/Authentication/AuthLandingPage";


function App() {
  //const [userAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <div className="App">
       {/* <SignIn/> */}
       <LandingPage />
       {/* <SignUp/> */}
       {/* <AuthLandingPage /> */}
      
      {/* <Header />
      <hr />
      {userAuthenticated ? <AuthLandingPage /> : <LandingPage />}
      <hr />
      <Footer /> */}
    </div>
  );
}

export default App;

