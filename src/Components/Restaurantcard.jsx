 import { Imgurl } from "./constants"
 
 const RestaurantCard =() =>{
   
    const details={
        title:"Mcdonald's",
        Rating:4.5,
        Deliverytime:"25-30 min",
        cusines:"Burger, Beverages, Fast Food,...",
        location:"Chhindwara City"
    }
   
    return(
        <>
            <div className="w-full max-w-[] drop-shadow-2xl">
                <div className="w-full rounded-2xl overflow-hidden">
                    <img className="w-full h-50 object-cover  " src={Imgurl} alt="Burger" />
                </div>
                <div>
                    <h3 className="font-bold text-xl text-[18px]">{details?.title}</h3>
                    <div className="flex gap-3">
                        <p className="font-semibold text-[16px]">⭐{details?.Rating}</p>
                        <p className="font-semibold text-[16px]">{details?.Deliverytime}</p>
                    </div>
                    <p className="text-gray-500 text-[16px]">{details?.cusines}</p>
                    <p className="text-gray-500 text-[16px]">{details?.location}</p>
                </div>
                
            </div>
        </>
    )
}

export default RestaurantCard