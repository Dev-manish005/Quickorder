import { useState } from "react";
// import Cardcontainer from "./Cardcontainer";

const Searchbar = () => {
  const [searchText,setsearchText]=useState("")
  const handleSearch=()=>{
    // const newArray=restaurantData?.filter(restaurant)=>restaurant;
    // console.log("newArray",newArray);
    
  }
  return (
    <div className="w-full flex items-center justify-center gap-2 sm:w-1/2 mx-auto p-2">
      <input
        type="text"
        value={searchText}
        onChange={(e)=>setsearchText(e.target.value)}
        placeholder="Search"
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button  onClick={handleSearch} className="px-4 py-2 bg-orange-400 text-white rounded-xl hover:bg-orange-500 transition">
        🔍
      </button>
    </div>
  );
};

export default Searchbar;