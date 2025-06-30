import RestaurantCard from "./Restaurantcard"

 const Cardcontainer =() =>{

    const resData =[
        {
            title:"Mcdonald's",
            Rating:4.5,
            Deliverytime:"25-30 min",
            cusines:"Burger, Beverages, Fast Food,...",
            location:"Chhindwara City"
        },
        {
            title:"Mcdonald",
            Rating:4.5,
            Deliverytime:"25-30 min",
            cusines:"Burger, Beverages, Fast Food,...",
            location:"Chhindwara City"
        },
        {
            title:"Mcdonald",
            Rating:4.5,
            Deliverytime:"25-45 min",
            cusines:"Burger, Beverages, Fast Food,...",
            location:"Chhindwara City"
        },
    ]

    return(
        <>
            <div>Cardcontainer</div>
            <div className="grid grid-cols-4 gap-5">
            {resData.map((restaurant)=>{
                return(
                    <RestaurantCard
                        // title={restaurant?.title}
                        // Rating={restaurant?.Rating}
                        // Deliverytime={restaurant?.Deliverytime}
                        // cusines={restaurant?.cusines}
                        // location={restaurant?.location}  
                        {...restaurant} //only can be used if the keys of obj are same.               
                        />
                )

            })}
                 {/* <RestaurantCard
                        title={"Mcdonalds"}
                        Rating={4.5}
                        Deliverytime={"25-30 min"}
                        cusines={"Burger, Beverages, Fast Food,..."}
                        location={"Chhindwara City"}                 
                        />
                 <RestaurantCard
                        // title={"Mcdonalds"}
                        // Rating={4.5}
                        // Deliverytime={"25-30 min"}
                        // cusines={"Burger, Beverages, Fast Food,..."}
                        // location={"Chhindwara City"}
                 />
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/> */}
            </div>
        </>
    )
}

export default Cardcontainer