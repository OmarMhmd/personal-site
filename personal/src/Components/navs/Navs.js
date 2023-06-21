import { Link } from "react-router-dom"
function Navs()
{
    return(
        <>
        <div className="area">
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <Link to="/about">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/about">Resume</Link>
                        <Link to="/about">Portfolio</Link>
                        <Link to="/about">Blog</Link>
                        <Link to="/about">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
       
          
        </>
     
    )
}

export default Navs