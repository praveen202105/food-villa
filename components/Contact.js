import { useState } from "react";

const Contact=()=>{
    let c=4;
    // const[button,setbutton]=useState(<div><button>Add</button></div>)
    return(
        <>
        <div className="pt-36">
        {/* <div>{button}</div> */}
        {/* <h1>Contact me on </h1> */}
        <h2>Praveen Gupta</h2>
        <h3>Contact Number:- 7705858116</h3>
        <a href="https://wa.link/auyhkm"><h3><b>Whatsapp</b></h3></a>
        <a href="https://www.linkedin.com/in/praveen-gupta-45708b183/"><h3><b>Linkdin</b></h3></a>

      {/* {  (5===5 )?setbutton(<button>minus</button>):null}     */}
      {/* {setbutton(<div><button>remove</button></div>)} */}
      {/* <div>{button}</div>  */}
      </div>
        </>
    )
}

export default Contact;