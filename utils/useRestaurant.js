import { useEffect, useState } from "react";
const useRestaurant =(id)=>{
    const [RestaurantPersonalData,setRestaurantPersonalData]=useState({});
    const [MenuData,SetMenuData]=useState([]);
    useEffect(()=>{
        getRestaurantDetails();
        // getMenuDetails();
    },[])

    

    async function getRestaurantDetails(){
        const long=80.3318736;
        const lat=26.449923;
        // if(city=="lucknow"){

        // }
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${long}&restaurantId=${id}&submitAction=ENTER`)
        const jsondata=await data.json();
        setRestaurantPersonalData(jsondata?.data?.cards[0]?.card?.card?.info);
        // console.log(RestaurantPersonalData);
        const d=jsondata?.data?.cards;
        const len=d.length-1;
        // SetMenuData(d[len]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards);
        SetMenuData(d[len]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
         
        // const data= [RestaurantPersonalData,MenuData];
        
   
}
return {RestaurantPersonalData,MenuData};
   
}
export default useRestaurant;