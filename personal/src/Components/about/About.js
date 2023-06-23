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
            <div className="col-4 col-12">
            <Who/>
            </div>
            <div className="col-4 col-12">
            <PersonalInfo/>
            </div>
            <div className="col-4 col-12">
            <Expertise/>
            </div>
        </div>

       </div>
       </>
    )
}

export default About