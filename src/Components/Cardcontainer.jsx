import { useEffect, useState } from "react"
import RestaurantCard from "./Restaurantcard"
import { API_URL } from "./constants";

 const Cardcontainer =() =>{

    const[count,setcount] = useState(1);
    const [restaurantData,setrestaurantData]=useState([]);

    const resData =[
        {
            title:"Mcdonald's",
            Rating:4.5,
            Deliverytime:"25-30 min",
            cusines:"Burger, Beverages, Fast Food,...",
            location:"Chhindwara City"
        },
        {
            title:"cdd",
            Rating:4.5,
            Deliverytime:"25-30 min",
            cusines:"Burger, Beverages, Fast Food,...",
            location:"Chhindwara City"
        },
        {
            title:"pizza",
            Rating:4.5,
            Deliverytime:"25-45 min",
            cusines:"Burger, Beverages, Fast Food,...",
            location:"Chhindwara City"
        },
        {
            title:"star bucks",
            Rating:4.5,
            Deliverytime:"25-45 min",
            cusines:"Burger, Beverages, Fast Food,...",
            location:"Chhindwara City"
        },
    ]

    const getData= async()=>{
        try{
            const data = await fetch(API_URL);
            const json = await data.json();
            console.log("json",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setrestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(err){
            console.log("error is...",err);
        }
    }

    useEffect(()=>{
        getData();
    },[])
    
    const increasecount=()=>{
        console.log(count);
        setcount(count+1);
    }
    return(
        <>
             <h1>increase {count} </h1>
            <button onClick={increasecount} className="in-hover:cursor-pointer hover:bg-green-300 bg-red-300 p-3 rounded-md">increase +1</button>
            <div>Cardcontainer</div>
            <div className="grid grid-cols-4 gap-5">
           
            {restaurantData.map((restaurant)=>{
                return(
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
                 
            </div>
        </>
    )
}

export default Cardcontainer