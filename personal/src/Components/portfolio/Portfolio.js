import MyBackgroundImage from './1.jpg';
function Portfolio()
{
    const divStyle = {
        backgroundImage: "url('cal.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        /* Additional background properties can be added here */
      };
    return(
        <div className="container">
            <div className="res"><h1> <span>My</span> Portfolio</h1></div>
            <div className="row">
            <div className="col-4 col-12">
                <div className="frame">
                    <div className="upper"  style={{ backgroundImage: `url(${MyBackgroundImage})`,backgroundRepeat:'no-repeat',backgroundSize: '100%'}}>
                    </div>
                    <div className='lower'>
                        <h5>Calculator</h5>
                        <span>Full Design and Implementation</span>
                        <mark>06/22/2023</mark>
                    </div>
                </div>
            </div>

            <div className="col-4 col-12">
                <div className="frame">
                    <div className="upper"  style={{ backgroundImage: `url(${MyBackgroundImage})`,backgroundRepeat:'no-repeat',backgroundSize: '100%'}}>
                    </div>
                    <div className='lower'>
                        <h5>Calculator</h5>
                        <span>Full Design and Implementation</span>
                        <mark>06/22/2023</mark>
                    </div>
                </div>
            </div>
            <div className="col-4 col-12">
                <div className="frame">
                    <div className="upper"  style={{ backgroundImage: `url(${MyBackgroundImage})`,backgroundRepeat:'no-repeat',backgroundSize: '100%'}}>
                    </div>
                    <div className='lower'>
                        <h5>Calculator</h5>
                        <span>Full Design and Implementation</span>
                        <mark>06/22/2023</mark>
                    </div>
                </div>
            </div>
        </div>
        </div>

)
}

export default Portfolio