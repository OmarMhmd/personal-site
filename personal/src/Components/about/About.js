import Expertise from "./Expertise"
import PersonalInfo from "./PersonalInfo"
import Who from "./Who"
function About()
{
    return(
       <>
       <div className="container" id="generalInformation">
       <div className="res"><h1><span className="res">General</span> Information</h1></div>
            <div className="row">
            <div className="col-4 col-12 col-lg-4 col-md-6 col-sm-6">
            <Who/>
            </div>
            <div className="col-4 col-12 col-lg-4 col-md-6 col-sm-6">
            <PersonalInfo/>
            </div>
            <div className="col-4 col-12 col-lg-4 col-md-6 col-sm-6">
            <Expertise/>
            </div>
        </div>

       </div>
       </>
    )
}

export default About