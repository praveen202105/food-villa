import { useEffect, useState } from "react"

const useOnline = ()=>{
    const [isOnline,SetisOnline]=useState(true);

     useEffect(() => {
        const handleonline =()=>{
            SetisOnline(true);
        }

        const handleoffline =()=>{
            SetisOnline(false);
        }

        window.addEventListener("online",handleonline);
    
        window.addEventListener("offline",handleoffline);

        return ()=>{
            window.removeEventListener("online",handleonline);
            window.removeEventListener("offline",handleoffline);
        }
        
     },[])

     return isOnline;
    

}

export default useOnline; 