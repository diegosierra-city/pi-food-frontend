import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
//
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Error404 from "./views/Error404/Error404";
import Home from "./views/Home/Home";
import NewRecipe from "./views/NewRecipe/NewRecipe";

import LandingPage from "./views/LandingPage/LandingPage";
//
import {Routes, Route, useLocation} from 'react-router-dom';



export default function App() {

  let {pathname} = useLocation();

  return (
    <div className="App">
  {pathname!='/' && <NavBar />}
      
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/detail/:id" element={<Detail />} />
<Route path="/new-recipe" element={<NewRecipe />} />
<Route path="*" element={<Error404 />} />
</Routes>
{pathname!='/' && <Footer />}
    
    </div>
  );
}
