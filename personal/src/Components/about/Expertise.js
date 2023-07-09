import { HiCodeBracket,HiOutlineTv } from "react-icons/hi2";

function Expertise()
{
    return(
    <>
    <h1 className=" text-center  text-md-start"><div className="wrap"><span>M</span></div>y Expertise</h1>
 
    <HiCodeBracket className="organize"/><h2>Web Development </h2><br/>
    <span className="spanMe">Full stack web developer</span>
    <hr/>
    <div>
    
    <HiOutlineTv className="organize"/><h2>UX Design </h2><br/>
    <span className="spanMe">High skill to design a website from scratch</span>
    <hr/>
    </div>
       
        </>
        
    )
}

export default Expertise