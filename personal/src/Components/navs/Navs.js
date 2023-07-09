
function Navs()
{
    let mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    var my;
    window.addEventListener('scroll',()=>{
        if(window.pageYOffset>=500)
        {
            document.getElementsByClassName("area2")[0].style.position = "fixed";
            // <Navs/>
        }
    })

    return(
        <>
        <div className="area area2" style={mystyle}>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <a href="/">Home</a>
                        <a href="#generalInformation">About</a>
                        <a href="#resume">Resume</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>
       
          
        </>
     
    )
}

export default Navs