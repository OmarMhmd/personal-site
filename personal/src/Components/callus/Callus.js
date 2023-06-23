import GetInTouch from "./GetInTouch"
import "./callus.css"
function Callus()
{
    return(
        <div className="container">
         <div className="res"> <h1><span >Send</span> Message</h1></div>

            <div className="row">
                <form className="col-8">
                    <input className="col-2"type="text" placeholder="Name*"/>
                    <input type="text" placeholder="email*"/>
                    <textarea type="text" placeholder="message*"/>
                    <input type="submit" value="Send Message"/>
                </form>
            </div>
        </div>
       
       


    )
}
export default Callus