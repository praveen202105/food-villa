import { createContext } from "react";

const userContext = createContext({
   user:{
    name:"Praveen",
    email:"pg444333@gmail.com"
   }
});

export default userContext;