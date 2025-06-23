import RestaurantCard from "./Restaurantcard"

 const Cardcontainer =() =>{
    return(
        <>
            <div>Cardcontainer</div>
            <div className="grid grid-cols-4 gap-5">
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
            </div>
        </>
    )
}

export default Cardcontainer