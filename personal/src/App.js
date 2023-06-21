import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Components/header/Header';
import Navs from './Components/navs/Navs';
import Details from './Components/details/Details';
import Resume from './Components/resume/Resume';
import Portfolio from './Components/portfolio/Portfolio';
import Callus from './Components/callus/Callus';
import Footer from './Components/footer/Footer';
import About from './Components/about/About';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>

    {/* <div className="container app"> */}
     <Header/>
     <Navs/>
     <About/>
     {/* <Details/> */}
     <Resume/>
     <Portfolio/>
     <Callus/>
     <Footer/>
  
   {/* </div> */}
    </>
  );
}

export default App;
