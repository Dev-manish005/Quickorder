import Cardcontainer from "./Cardcontainer"
import Filters from "./Filters"
import Searchbar from "./Searchbar"

 const Body =() =>{
    return(
        <>
            <div className=" p-7">
               <div className="flex justify-between">
                 <Searchbar/>
                 <Filters/>
               </div>
                <Cardcontainer/>
            </div>
            
        </>
    )
}

export default Body