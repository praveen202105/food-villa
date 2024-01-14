
const Shimmer =()=>{
  return (
  <>
  <div className=" pt-32 flex flex-wrap">
    {Array(18).fill("").map((e,index)=> 
  <div key={index} className="w-56 h-60 shadow-lg shadow-gray-600 bg-white m-3">
    <div className="w-44 h-32 p-2 m-5 shadow-lg shadow-gray-400 bg-white">

    </div>
    <div className=" w-44 h-5 p-2 m-5 shadow-lg shadow-gray-400 bg-white"></div>
    <div className="w-44 h-5 p-2 m-5 shadow-lg shadow-gray-400 bg-white"></div>
  </div>)}
  </div>
  </>
  )
  }

  export default Shimmer;