import { useDispatch ,useSelector} from "react-redux";
import { addItem ,removeItem} from "../utils/cartSlice";

import { cloudimageurl } from "../constants"

const ProductCart =(props)=>{
    
    const carts =useSelector(store=>store.cart.items)

    const item=props.dish;
    const {name,price,imageId,description,defaultPrice,id}={...item}
  
    const dispatch=useDispatch();
     const handleAdd=(product)=>{
        dispatch(addItem(product))
     }

     const handleRemove =(i)=>{
      // console.log(i);
       dispatch(removeItem(i));
    }

    //  const getCount =(i)=>{
    //   return item.findIndex((i)=>obj.id === i)
    
    // }
    const getCount =(id) =>{
        const count=carts.filter((i)=>i === id )
        // const filteredData=restaurants.filter((restaurant)=>
        // restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase()));
  // console.log(count)
        return count.length;
    }


    
     return( 
      <>
        <div className="flex mt-10">
          <div className="grow">

        <p className="text-xl font-semibold" >{name}</p>
        {(!price)?<h1>Rs {defaultPrice/100}</h1>:<h1>Rs {price/100}</h1>}
        
  {/* <p className="product-description">{description?.length<100?description:(description.substring(0,110)+"...")}</p> */}
          <p className="text-s text-gray-600 pt-5" >{description?(description.length<100?description:(description.substring(0,110)+"...")):""}</p>
          

        </div>
        <div>

          
        <img className="w-36 h-28 rounded-lg block" src={cloudimageurl+imageId} alt="Food Image"/>
        {/* <button className=" ml-4 bg-white rounded-lg -m-5 p-2 w-28 shadow-xl shadow-grey-500/50 hover:p-3 text-green-500 font-bold hover:bg-green-200 " onClick={()=>handleAdd(item)} >
        {getCount(item)===0 ? "ADD": 
          <div>
           <button onClick= {()=>handleAdd(item) }>+</button>
           {getCount(item)}
           <button>-</button>
          </div>
         
        } </button> */}

        {getCount(item)===0 ?
           <button className=" ml-6 bg-white rounded-lg -m-5 p-2 w-24 shadow-xl shadow-grey-500/50 text-green-500 font-bold hover:text-green-800" onClick={()=>handleAdd(item)} >
            Add
            </button>
           :   <div className=" relative flex justify-between ml-6 bg-white rounded-lg -m-2 p-2 w-24 shadow-xl shadow-grey-500/50 "  >
           <button className="  text-green-500   font-bold aria-busy: hover:text-green-800" onClick={(()=>handleRemove(item))}>-</button>
           
          <div className="text-green-500 font-bold aria-busy:"> {getCount(item)}</div>
          <button className="  text-green-500 font-bold aria-busy:  hover:text-green-800" onClick={()=>handleAdd(item)}>+</button>
           </div>

        }
          
        </div>

        {/* border-2 -m-5 border:5 border-green */}
      </div>
              <div className="w-full h-0.5 m-5 -ml-1 bg-gray-500"></div>
              </>
     )
}

export default ProductCart;