import { AiTwotoneMail } from "react-icons/ai";
import {  ImSkype } from "react-icons/im";
import {  MdPhoneAndroid } from "react-icons/md";
import {  MdLocationPin } from "react-icons/md";

function PersonalInfo()
{
    return(
    <>
     <h1 className=" text-center  text-md-start"><div className="wrap"><span>P</span></div>ersonal Info</h1>
     <AiTwotoneMail className="organize"/><p> Email:</p><mark>algburi89@gmail.com</mark><br/>
     <MdPhoneAndroid className="organize"/><p>Phone: </p> <mark>+1 (641) 233-9012</mark><br/>
     <ImSkype className="organize"/> <p>Skype:</p><mark>omermhmd</mark><br/>
     <MdLocationPin className="organize"/> <p>Address: </p><mark>Iowa, Fairfield 52557-0001</mark><br/>
    </>
    )
}

export default PersonalInfo