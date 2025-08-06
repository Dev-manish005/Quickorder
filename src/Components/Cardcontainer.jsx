import { useEffect, useState } from "react"
import RestaurantCard from "./Restaurantcard"
import { API_URL } from "./constants";


const Cardcontainer = () => {


    const [restaurantData, setrestaurantData] = useState([]);
    const [filteredData, setfilteredData] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [headerTitle, setheaderTitle] = useState("");
    const [isloading, setisloading] = useState(true);
    const [errormessage, seterrormessage] = useState("");
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
            console.log("data", data);
            if (!data.ok) {
                switch (data.status) {
                    case 401:
                        throw new Error(`${data.status} Unauthorized request`);
                    case 402:
                        throw new Error(`${data.status} Payment Required`);
                    case 403:
                        throw new Error(`${data.status} Forbidden Content`);
                    case 404:
                        throw new Error(`${data.status} Not Found`);
                    default:
                        throw new Error("Something Went Wrong!...");
                }
                // throw new Error("Some thing went wrong");
            }
            const json = await data.json();
            console.log("j", json?.data?.cards[1]?.card?.card?.header?.title);
            setheaderTitle(json?.data?.cards[1]?.card?.card?.header?.title);
            console.log("json", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilteredData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setrestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch (err) {
            seterrormessage(err.message);
            console.log("error:", err.message);
        }
        finally {
            setisloading(false);
        }
    }



    useEffect(() => {
        getData();
    }, [])


    const handleSearch = () => {

        const newArray =restaurantData?.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText));
        console.log("newArray:|", newArray);
        setfilteredData(newArray);
    }

    if (isloading) {
        return (<div className="flex items-center justify-center h-screen flex-col">
            <div className="w-8 h-8 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
            <h1 className="font-bold text-3xl text-gray-400">Getting the Best Restaurants nearby...</h1>
        </div>)
    }

    if (errormessage) {
        return (<div className="container border-2 border-gray-500 rounded-4xl w-full mx-w-[250px] h-60 flex justify-center items-center">
            <h1 className="font-bold text-6xl text-gray-400 ">{errormessage}</h1>
        </div>)

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
                <button onClick={handleSearch} className="px-4 py-2 bg-orange-400 text-white rounded-2xl hover:bg-orange-500 transition hover:rounded-3xl">
                    🔍
                </button>
            </div>

            {headerTitle && (
                <h2 className="text-2xl font-bold text-left my-6 text-black">
                    {headerTitle}
                </h2>
            )}

            {filteredData.length === 0 ? (<div className="flex items-center justify-center h-screen flex-col">
                <h1 className="font-bold text-3xl text-gray-400">NO! Restaurants Matched Your Search... </h1>
                </div>) : (<div className="grid grid-cols-4 gap-5">

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

            </div>)}
        </>
    )
}

export default Cardcontainer