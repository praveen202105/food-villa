import { useState } from "react";
import ProductCart from "./ProductCart";
    const DisplayMenu =({title,itemCards}) =>{

    if(!title || !itemCards) return null;
     console.log(itemCards)
    const[show,setshow]=useState(true);
//    onclick={handleAdd(item?.card?.info)}
    return (
        <>
        <div className="flex flex-col" >
        <div className="flex row justify-between">
        <ul className="text-xl font-bold">{title + " ("+ itemCards.length +")"}</ul>
        {show===true?
        <button onClick={()=>setshow(false)}>hide</button>:
        <button onClick={(()=>setshow(true))}> show</button>

        }
        </div>
      {show  && <div>
        {itemCards.map((item)=>
         <ProductCart key={item?.card?.info?.id} dish={item?.card?.info}/>    
             )}
        </div>

        }
        </div>
  
       </>
    )
}

export default DisplayMenu;