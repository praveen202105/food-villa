import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import cities from "../utils/geoLocation";
import { funfilterRestaurant } from "../utils/helper";
import useGetRestaurants from "../utils/useGetRestaurant";
import useOnline from "../utils/useOnline";



const Body =() =>{
    const {city}= useParams();
    const [searchInput,setsearchInput]=useState("");
    const [sort,setsort]=useState();
    const [sortname,setsortname]=useState();
    const [sorttime,setsorttime]=useState();
    const isonline=useOnline();

    //  const Resdata=useGetRestaurants(city);





      const [AllRestaurants,SetAllRestaurant]=useState([]);
      const [FilterRestaurant,SetFilterRestaurant] = useState([]);
      useEffect(()=>{
          // getLocation(searchInput)
         
          getRestaurant();
      },[]);
  
       let d;
      async function getRestaurant(){
     
  
        const citydata=cities.filter((c)=>
          c.name.includes(city));
          console.log(citydata);
           let long=80.949997
           let lat=26.850000
          if(citydata.length!==0){
            long=citydata[0].lon;
            lat=citydata[0].lat;         
             }
          
          // const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=26.8466937&lng=80.94616599999999");
          // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
          // const mydata= await my.json();
          // console.log(mydata);
           
          const data =await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&page_type=DESKTOP_WEB_LISTING`);
          //  const data =await("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
           const jsondata = await data?.json();
          //  d=jsondata
          //  const len=jsondata?.data?.cards?.length;
           console.log(jsondata?.data);
          

          // console.log("hello call");
          // SetFilterRestaurant(jsondata?.data?.cards[len-1]?.data?.data?.cards)
          SetFilterRestaurant(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          // SetFilterRestaurant(jsondata?.data);2
          // SetAllRestaurant(jsondata?.data?.cards[len-1]?.data?.data?.cards)
          SetAllRestaurant(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          // SetAllRestaurant(jsondata?.data)




                  


          
      }

     if(!isonline) return <h1>Network not avilable please check your internet connection</h1>     

    console.log(AllRestaurants)

    if(!AllRestaurants) return ;
      
    if(FilterRestaurant.length===0 && AllRestaurants.length) return <h1>No Restaurant find your search</h1>
    return AllRestaurants.length === 0?<Shimmer/>:  (
        <>
        <div className=" pt-32 search-container p-5 bg-pink-50 my-5">
          <input
          type="text"
          className="  focus:bg-pink-200 border-2 border-pink-500 p-2 rounded-md  focus:border-blue-1000 m-2 p-2"
          placeholder="Search"
          value={searchInput}
          onChange={(e)=>{
            setsearchInput(e.target.value);
          }}
          />

          

          <button className="search-btn p-2 bg-purple-900 text-white rounded-md" onClick={()=>{
            const data=funfilterRestaurant(searchInput,AllRestaurants);
            console.log(data)
            console.log(searchInput);
            SetFilterRestaurant(data);
          }}>
            Search 
          </button>
          
           <button className="ml-20 mr-5 bg-pink-100 border-2 border-pink-400 rounded-md p-1 hover:bg-pink-200" onClick={()=>{
            
            FilterRestaurant.sort((a,b)=>b?.info?.avgRating-a?.info?.avgRating);
  
            setsort(true);

           }}
           >
           Sort by High Rating 
           </button>

           <button className="bg-pink-100 border-2 border-pink-400 rounded-md p-1 m-5 hover:bg-pink-200"onClick={()=>{
              FilterRestaurant.sort((a,b)=>a?.info?.costForTwo.substring(1,4)-b?.info?.costForTwo.substring(1,4));
 
            setsortname(true);
    //  useEffect();
           }}
           >
            Sort by Price
           </button>
           
           <button className="bg-pink-100 border-2 border-pink-400 rounded-md p-1 m-5 hover:bg-pink-200" onClick={()=>{
            FilterRestaurant.sort((a,b)=>a?.info?.sla?.deliveryTime-b?.info?.sla?.deliveryTime);
            // SetFilterRestaurant(d)
            console.log("time");
            setsorttime(true);
    //  useEffect();
           }}
           >
            Sort by delivery Time
           </button>
        </div>

        <div className="flex flex-wrap">

         {FilterRestaurant.map((res)=>{
            return <Link to={"/restaurant/"+res.info.id} key={res.info.id}>
            <RestrauntCard {...res.info} key={res.info.id}/>
            </Link>
        })}


             </div>
             </>
    );
};


export default Body;