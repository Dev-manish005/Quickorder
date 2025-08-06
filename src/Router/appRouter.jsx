import { createBrowserRouter } from "react-router";//use "react-router"
import App from "../App"; 
import About from "../Components/About";
// import Body from "../Components/Body";
import Contactus from "../Components/Contactus";
import Cart from "../Components/Cart";
import Body from "../Components/Body";
import Errorpage from "../Components/Errorpage";

const appRouter = createBrowserRouter([
  {
    path: "",
    Component:App,
    children:[
      {
        path:"/",
        Component:Body,
      },
      {
        path: "/about",
        Component:About,
      },
      {
        path: "/contact",
        Component:Contactus,
      },
      {
        path: "/cart",
        Component:Cart,
      },

    ],
    errorElement:<Errorpage/>
  },
  
]);

export default appRouter;
