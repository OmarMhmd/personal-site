import Education from "./Education"
import Expertise from "./Expertise"
import Languages from "./Languages"
import Skills from "./Skills"

function Resume()
{
    return(
        <>
        <div className="container">
            <div className="res "id="resume"><h1><span>My</span> Resume</h1></div>
            <div className="row">
                <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                <Expertise/>
                </div>
                <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                <Education/>
                </div>
                <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-12">
                        <Skills/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-12">
                        <Languages/>
                    </div>
                    </div>
                </div>
              
                </div>

            </div>
      
        </>

       
    )
}

export default Resume