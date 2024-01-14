import React ,{lazy,Suspense,useState} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Errror";
import Menu from "./components/Menu";
// import Instamart from "./components/Instamart";
import Profile from "./components/Profile";
import { createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom";
import Cities from "./components/Cities";
import Cart from "./components/Cart";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
// import Cart from "./components/Cart";/




const Instamart =lazy(() => import("./components/Instamart"));

 const AppLayout =() =>{
  const [user,setuser]=useState({
    name:"Praveen",
    email:"adarsh#gmail.com"
  })
    return (
        <>
        <Provider store={store}>
        <userContext.Provider
        value={{
          user:user,
          setuser:setuser
          }}>


        <HeaderComponent/>
        <Outlet/>
        <Footer/>
        </userContext.Provider>
        </Provider>
        </>
    )
 }

 const appRouter =createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {

          path:"/",
          element:<Body/>},
        {
            path:"about",
            element:<About/>,
            children:[
              {
                path:"profile",
                element:<Profile/>
              }
            ]
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
          path:"/cities",
          element:<Cities/>
      },
      {
        path:"/instamart",
        element:
        <Suspense fallback={<Shimmer/>}>
        <Instamart/>
        </Suspense>

    },
    {
      path:"/cart",
      element:<Cart/>
      },
    {
        path:"/city/:city",
        element:<Body/>
    },
        {
          path:"/restaurant/:id",
          element:<Menu/>
        }
      ]
    },
    
 ]);



// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);