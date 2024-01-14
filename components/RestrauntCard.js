import { cloudimageurl } from "../constants"
// import hh from "../utils/"

const RestrauntCard =({name,cuisines,costForTwo,cloudinaryImageId,address,sla,avgRating,area}) =>{
    const description=cuisines.join(", ");
    // const {name,cuisines,costForTwoString,cloudinaryImageId}=restaurant.data;
    console.log(costForTwo);
    return (
        // <div  className="card">
        //     <img src={cloudimageurl+cloudinaryImageId}/> 
        //     <h2>{name}</h2>
        //     <h4>{cuisines.join(", ")}</h4>
        //     <h5>{avgRating+"      "+deliveryTime+"              "+costForTwoString}</h5>
        //     {/* <h5>{costForTwoString}</h5> */}
        //     {/* <h5>{deliveryTime} minutes</h5> */}
        //     <h5>{address}</h5>

        // </div>

        <div className="w-56 p-2 m-2 ">
          <div className="w-56 hover:p-1">
        <img className="rounded-2xl" src={cloudimageurl+cloudinaryImageId} alt="Food Image"/>
        <div className="product-details p-2">

          <h3 className="font-bold text-l">{(name.length>20)?name.slice(0,21).trim(" ")+"...":name}</h3>
         <div className="flex justify-between text-xs">
         <p className="product-price">{avgRating}</p>
         <p>{sla?.deliveryTime+" min"}</p>
         <p className="product-price">{costForTwo}</p>
         
          </div> 
          {/* <p className="text-xs">{(description.length>20)?description.slice(0,22)+"...":description}</p> */}
          {/* <p className="text-xs">{(area.length>20)?area.slice(0,22)+"...":area}</p> */}
        
          </div>
          </div>
        </div>

    )
}

export default RestrauntCard;