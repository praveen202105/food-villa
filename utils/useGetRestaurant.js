import cities from "../utils/geoLocation";
import { useEffect ,useState} from "react";
import useOnline from "./useOnline"
const useGetRestaurants = (city)=>{
    const [AllRestaurants,SetAllRestaurant]=useState([]);
    const [FilterRestaurant,SetFilterRestaurant] = useState([]);
    useEffect(()=>{
        // getLocation(searchInput)
       
        getRestaurant();
    },[]);

     
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
        
      // const data =await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.43429&lng=80.36614&page_type=DESKTOP_WEB_LISTING`);
      
      
   
 
        const data =await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&page_type=DESKTOP_WEB_LISTING`);

         const jsondata = await data.json();
         const len=jsondata?.data?.cards?.length;
        // console.log("hello call");
        SetFilterRestaurant(jsondata?.data?.cards[len-1]?.data?.data?.cards)
        
        SetAllRestaurant(jsondata?.data?.cards[len-1]?.data?.data?.cards)
    }
    return {AllRestaurants,FilterRestaurant,SetFilterRestaurant,SetAllRestaurant};
}

export default useGetRestaurants;



























      // api for gett8ng long latitude
      // const url = 'https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/208004';
      // const options = {
      //   method: 'GET',
      //   headers: {
      //     'X-RapidAPI-Key': '2bd927ea57msh4179f8add1ce102p16642ajsn74be24610dca',
      //     'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
      //   }
      // };
      
      // try {
      //   const response = await fetch(url, options);
      //   const result = await response.text();
      //   console.log(result);
      // } catch (error) {
      //   console.error(error);
      // }
