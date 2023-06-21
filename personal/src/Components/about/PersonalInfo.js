import { AiTwotoneMail } from "react-icons/ai";
import { BsPersonVcard, BsPhoneFill, BsSkype } from "react-icons/bs";

function PersonalInfo()
{
    return(
    <>
     <h1><div className="wrap"><span>P</span></div>ersonal Info</h1>
     <AiTwotoneMail className="organize"/><p> Email:</p><mark>algburi89@gmail.com</mark><br/>
     <BsPhoneFill className="organize"/><p>Phone: </p> <mark>+1 (641) 233-9012</mark><br/>
     <BsSkype className="organize"/> <p>Skype:</p><mark>omermhmd</mark><br/>
     <BsPersonVcard className="organize"/> <p>Address: </p><mark>Iowa, Fairfield 52557-0001</mark><br/>
        
        </>
      
    )
}

export default PersonalInfo