import { useContext, useState } from "react"
import userContext from "../utils/userContext"
import { addItem } from "../utils/cartSlice"
import { useDispatch, useSelector } from "react-redux"

 
// const Section =({h,desc,isvisible,setisvisisble})=>{
//     // const [isvisible,setisvisisble]=useState(false);
//     console.log(isvisible)
//     return (
//         <>
        
//         <div className="pt-36">
//             <h2>{h}</h2>
//             {isvisible?
//             <button onClick={()=>setisvisisble()}>hide</button>:
//             <button onClick={()=>setisvisisble()}>Show</button>

//             }

//             {isvisible && <p>{desc}</p>}
//         </div>
//         </>
//     )
// }

const Instamart =()=>{
    // const [sectionConfig,SetsectionConfig]=useState({
    //     showMy:false,
    //     showabout:false,
    //     showhistory:false,
    // });

    // const {user,setuser}=useContext(userContext);
    // const [show,setshow]=useState("my");
    // const dispatch = useDispatch();
    
    // const Handlecartitem =()=>{
    //     dispatch(addItem("grapes"));
    // }

    
    return (
        <>
        <div className="pt-32">
        <h1 className="text-5xl font-semibold text-red-500 text-center">Instamart Fast Delivery</h1>
        <h1 className="text-3xl font-semibold text-center">Coming Soon</h1>
        
        </div>
     
        {/* <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={user.name}
          onChange={(e)=>{
            setuser({
                name:e.target.value
            })
          }}
          />
          
          <button onClick={Handlecartitem}>add to cart</button>



        <div>
            <Section h={"my heading"} desc={"this is my decription"} 
            isvisible={show==="my"} 
            setisvisisble={()=>
                // SetsectionConfig({
                //     showMy:true,
                //     showabout:false,
                //     showhistory:false,
                // })
                setshow("my")
            }
            />
            <Section h={"about"} desc={"this is my about page of instamart page"} 
            isvisible={show==="about"}
            setisvisisble={()=>
                // SetsectionConfig({
                //     showMy:false,
                //     showabout:true,
                //     showhistory:false,
                // })
                setshow("about")
            } />
            <Section h={"history"} desc={"this is my history page of instamart page"} 
            isvisible={show==="history"} 
            setisvisisble={()=>
                // SetsectionConfig({
                //     showMy:false,
                //     showabout:false,
                //     showhistory:true,
                // })
                setshow("history")
            }/>          
             */}

        {/* </div> */}
        </>
    )
}

export default Instamart;