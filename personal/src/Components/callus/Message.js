
function Message()
{
    return(
        <>
        <div className="container">
            < div className="row">
            <div className="res"> <h1><span className="MainOrganize">Send </span> Message</h1></div>
                <form>
                    <input type="text" placeholder="Name*"/>
                    <input type="text" placeholder="email*"/>
                    <textarea type="text" placeholder="message*"/>
                    <input type="submit" value="Send Message"/>
                </form>
            </div>
            
        </div>
      
        </>
        
    )
}

export default Message