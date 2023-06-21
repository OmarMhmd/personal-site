import Education from "./Education"
import Expertise from "./Expertise"
import Languages from "./Languages"
import Skills from "./Skills"

function Resume()
{
    return(
        <>
        <div className="container">
            <div className="res"><h1><span className="MainOrganize">My</span> Resume</h1></div>
            <div className="row">
            <div className="col-4">
            <Expertise/>
            </div>
            <div className="col-4">
            <Education/>
            </div>
            <div className="col-4">
            <Skills/>
            <Languages/>
            </div>

            </div>
        </div>
      
        </>

       
    )
}

export default Resume