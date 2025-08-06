import { useRouteError } from "react-router";

const Errorpage=()=>{
    const error=useRouteError();
    console.log("error",error);
    const {status,statusText}=error;
    
    return(
       <div className="flex items-center justify-center h-screen flex-col gap-2">
        <h1 className="font-extrabold text-9xl text-orange-400 font-serif">{status}</h1>
        <h1 className="font-bold text-3xl text-red-300">{statusText}!</h1>
       </div>
    )
}

export default Errorpage;