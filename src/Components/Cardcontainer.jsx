import { useEffect, useState } from "react"
import RestaurantCard from "./Restaurantcard"
import { API_URL } from "./constants";

const Cardcontainer = () => {


    const [restaurantData, setrestaurantData] = useState([]);
    const [filteredData,setfilteredData]=useState([]);
    const [searchText, setsearchText] = useState("");
    // const resData =[
    //     {
    //         title:"Mcdonald's",
    //         Rating:4.5,
    //         Deliverytime:"25-30 min",
    //         cusines:"Burger, Beverages, Fast Food,...",
    //         location:"Chhindwara City"
    //     },
    //     {
    //         title:"cdd",
    //         Rating:4.5,
    //         Deliverytime:"25-30 min",
    //         cusines:"Burger, Beverages, Fast Food,...",
    //         location:"Chhindwara City"
    //     },
    //     {
    //         title:"pizza",
    //         Rating:4.5,
    //         Deliverytime:"25-45 min",
    //         cusines:"Burger, Beverages, Fast Food,...",
    //         location:"Chhindwara City"
    //     },
    //     {
    //         title:"star bucks",
    //         Rating:4.5,
    //         Deliverytime:"25-45 min",
    //         cusines:"Burger, Beverages, Fast Food,...",
    //         location:"Chhindwara City"
    //     },
    // ]

    const getData = async () => {
        try {
            const data = await fetch(API_URL);
            const json = await data.json();
            console.log("json", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilteredData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setrestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch (err) {
            console.log("error is...", err);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    
    const handleSearch = () => {
       
        const newArray=restaurantData?.filter(restaurant=>restaurant?.info?.name.toLowerCase().includes(searchText));
        console.log("newArray:|",newArray);
        setfilteredData(newArray);
    }


    return (
        <>

            <div className="w-full flex items-center justify-center gap-2 sm:w-1/2 mx-auto p-2 sticky">
                <input
                    type="text"
                    
                    onChange={(e) => setsearchText(e.target.value.toLowerCase().trim())}
                    placeholder="Search"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button onClick={handleSearch} className="px-4 py-2 bg-orange-400 text-white rounded-xl hover:bg-orange-500 transition">
                    🔍
                </button>
            </div>


            {filteredData && <div className="grid grid-cols-4 gap-5">

                {filteredData.map((restaurant) => {
                    return (
                        <RestaurantCard
                            title={restaurant?.info?.name}
                            Rating={restaurant?.info?.avgRating}
                            Deliverytime={restaurant?.info?.sla?.slaString}
                            cusines={restaurant?.info?.cuisines}
                            location={restaurant?.info?.locality}
                            Imgid={restaurant?.info?.cloudinaryImageId}
                            // {...restaurant} //only can be used if the keys of obj are same. 
                            key={restaurant?.info?.id}
                        />
                    )

                })}

            </div>}
        </>
    )
}

export default Cardcontainer