import { Outlet } from "react-router-dom";
const About =()=>{

    return (

        <>
                <div className="pt-36">
        <h1>Food Vila Food Ordering Platform</h1>
        <br/>
        
     <Outlet/>
      
     </div>
        </>
    )
}
export default About;