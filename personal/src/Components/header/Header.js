import { AiFillAmazonCircle, AiOutlinePrinter, IconName } from "react-icons/ai";

function Header()
{
    return(
        <div className="header">
         <div className="innerDiv">
        <h2 className="fromTop">Hello, I am</h2>
        <h1 >Omar Al Gburi</h1>
        <h2>Full Stack Web Developer</h2>
        <button className="printerButton"> <AiOutlinePrinter />Print Resume</button>
       
        </div>
        </div>
    )
}

export default Header