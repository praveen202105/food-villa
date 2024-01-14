import {useParams} from "react-router-dom"
import Shimmer from "./Shimmer";
import DisplayMenu from "./DisplayMenu";
import { cloudimageurl } from "../constants";
import useRestaurant from "../utils/useRestaurant";

const Menu = ()=>{
    const {id} = useParams();
    const data=useRestaurant(id);
    const personal=data.RestaurantPersonalData;
    // const cusinies= personal?.cuisines.join(",")
// console.log(personal)
const c=personal?.cuisines?.join(",")
    const menu=data.MenuData;
    // console.log(menu);

    // if(!menu) return <Shimmer/>
//   console.log(personal.cuisines.join(", "))
   
    return menu.length===0?<Shimmer/>:(
        <>
        <div className="pt-32 ml-64 mr-64 py-10" >
            <div>
              <p className="font-bold text-3xl">{personal.name}</p>
              <p className="text-sm mt-2 text-gray-600" >{c}</p>
              <p className="text-sm text-gray-600">{personal.areaName},{personal.city}</p>
              <p className="text-sm">  Rating :- {personal.avgRating}</p>
              

              
              </div>
       
        <div className="mt-10">
         {menu.map((menu,index)=>{
           return <DisplayMenu key={index} {...menu.card.card}/>
            

        })}

        {/* </div> */}


        <h5>ID {id}</h5>

</div>
              
</div>         
        </>
    )
}

export default Menu;