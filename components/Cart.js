 import { useDispatch, useSelector } from "react-redux";
 
import { cloudimageurl } from "../constants"
import ProductCart from "./ProductCart";
import { clearCart ,removeItem} from "../utils/cartSlice";
 
const Cart=()=>{
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);
  const dispatch=useDispatch();
  // console.log(cartItems);
    const handleClear =()=>{
      // console.log("clear")
      dispatch(clearCart());
    }

    const handleRemove =(i)=>{
      // console.log(i);
       dispatch(removeItem(i));
    }

    const findtotal =()=>{
        var i=0;
        cartItems.map((e)=>
            e.price?
            i+=(e.price/100):
            i+=(e.defaultPrice/100)
            
        )
        
       return Math.floor(i);
    };

  return (
    <>
    <div className="pt-36 ml-80 mr-80 py-10 bg-slate-100">
    {/* <h1>cart page</h1>  */}
    <div className="flex justify-between">

    <p className="text-5xl font-extrabold">Cart</p>
    <button className="w-40 bg-green-500 text-cyan-50 rounded-md shadow-2xl hover:bg-green-700 text-3xl font-bold" onClick={handleClear}>Clear Cart</button>
    </div>
    {/* <h2>total :{findtotal()}</h2> */}
    {/* <h2>{cartItems[0]}</h2> */}
    <div>
      {cartItems.map((c)=>
      <div>
                   <div className="flex mt-10">
          <div className="grow">

        <p className="text-xl font-semibold" >{c.name}</p>
        {(!c.price)?<h1>Rs {c.defaultPrice/100}</h1>:<h1>Rs {c.price/100}</h1>}
        
  {/* <p className="product-description">{description?.length<100?description:(description.substring(0,110)+"...")}</p> */}
          <p className="text-s text-gray-600 pt-5" >{c.description?(c.description.length<100?c.description:(c.description.substring(0,110)+"...")):""}</p>
          

        </div>
        <div>

          
        <img className="w-36 h-34 rounded-md" src={cloudimageurl+c.imageId} alt="Food Image"/>
        <button className=" ml-4 bg-white rounded-lg -m-5 p-2 w-28 shadow-xl shadow-grey-500/50 hover:p-3 hover:bg-pink-200 " onClick={()=>handleRemove(c.id)} >
          Remove </button>
          
        </div>
        {/* border-2 -m-5 border:5 border-green */}
      </div>

    {/* <button className="quick-view" onClick={()=>handleRemove(c.id)}>remove</button> */}
    </div>
       
       )}
    </div>
    <div className="flex space-x-72 m-9">
  <div className="text-5xl font-extrabold justify-center">Total    {findtotal()}</div>
  <button className="w-64 bg-pink-400 text-cyan-50 rounded-2xl shadow-2xl hover:bg-purple-500 text-3xl font-bold">Order Now</button>
  </div>
    </div>
    </>
  )

}

export default Cart;