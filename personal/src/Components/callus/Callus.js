import { Link } from "react-router-dom";
import GetInTouch from "./GetInTouch"
import "./callus.css"
import { BsFacebook,BsInstagram,BsTwitter } from 'react-icons/bs';

function Callus()
{
    return(
        <div className="container"id="contact">
        <div className="row">
         <div className="res col-12 col-md-12 col-lg-6"> <h1><span >Send</span> Message</h1>
         <form >
            <input type="text" placeholder="Name*"/>
             <input type="text" placeholder="email*"/>
            <textarea type="text" placeholder="message*"/>
            <input type="submit" value="Send Message"/>
            </form>
            </div>
            <div className="res col-12 col-md-12 col-lg-6"><h1 className="text-center"><span >Get</span> in Touch</h1>
            <p id="bottom">I am full stakc web developer with mor than 6 years of experience using many techniques
                and I can design, develop and implement your project accurately in a short time
                 and feasible price. Feel free to contact with me by any media and I will try to answer you shortly
            </p>
            <div className="social-medai">
            <Link to="" ><BsFacebook/> </Link>
            <Link to=""><BsInstagram/> </Link>
            <Link to=""><BsTwitter/> </Link>
            </div>
          
            
            </div>
        
            </div>
        </div>
       
       


    )
}
export default Callus