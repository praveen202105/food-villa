import {Link} from "react-router-dom"
import city from "../utils/geoLocation";
import { useState } from "react";


function functionSetFilterCity(cityInput,cities){
    const CityData=cities.filter((city)=>
    city.name.toLowerCase().includes(cityInput.toLowerCase()));
    return CityData;
   }

const Cities=()=>{

    const [searchInput,setsearchInput] = useState("");
    const AllCity=city;
    const [FilterCity,SetFilterCity] = useState(city);
        
    return(
        <>
           <div className=" pt-32 search-container p-5 bg-pink-50 my-5">
            <p className="font-extrabold m-2">Search Your City</p>
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
               const data=functionSetFilterCity(searchInput,AllCity);
           
               SetFilterCity(data);
            
          }}>
            Search 
          </button>

        </div>

       
          <p className="text-6xl m-5 text-center">Some Popular Cities of <span className="font-bold"> India</span> </p>
          <p className="text-center ml-96 mr-96">From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
          <div className="flex flex-wrap ml-56 mr-56 ">
       
        {FilterCity.map((res)=>{
            return <Link to={`/city/${res.name}`} key={123}>
            <div className="w-72 m-3 h-16 border border-grey-500 rounded-lg text-center p-4  shadow-gray-500 shadow-md">{res.name+" Restaurants"}</div>
            </Link>
        })}
      </div>
     {/* </div> */}
        </>
    )
}

export default Cities;