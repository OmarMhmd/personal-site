import Expertise from "./Expertise"
import PersonalInfo from "./PersonalInfo"
import Who from "./Who"
function About()
{
    return(
       <>
       <div className="container">
       <div className="res"><h1><span className="res">General</span> Information</h1></div>
            <div className="row">
            <div className="col-4">
            <Who/>
            </div>
            <div className="col-4">
            <PersonalInfo/>
            </div>
            <div className="col-4">
            <Expertise/>
            </div>
        </div>

       </div>
       </>
    )
}

export default About