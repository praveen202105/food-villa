import userContext from "../utils/userContext";
import { useContext } from "react";
const Footer =() =>{
    const {user}=useContext(userContext)
    return (
        <h1 className="flex font-semibold justify-center fixed bg-pink-200 bottom-0  w-full">Made with Love {user.name}</h1>

    )
}

export default Footer;