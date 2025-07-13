 import { Imgurl } from "./constants"
 
 const RestaurantCard =({title,Rating,Deliverytime,cusines,location,Imgid}) =>{
   
    // const props={
        // title:"Mcdonald's",
        // Rating:4.5,
        // Deliverytime:"25-30 min",
        // cusines:"Burger, Beverages, Fast Food,...",
        // location:"Chhindwara City"
    // }
//    console.log("props",props);
//    const {title,Rating,Deliverytime,cusines,location}=props;
    return(
        <>
            <div className="w-full max-w-[] drop-shadow-2xl">
                
                <div className="w-full rounded-2xl overflow-hidden">
                    <img className="w-full h-50 object-cover  " src={`${Imgurl+Imgid}`} alt="Burger" />
                </div>
                <div>
                    <h3 className="font-bold text-xl text-[18px]">{title}</h3>
                    <div className="flex gap-3">
                        <p className="font-semibold text-[16px]">⭐{Rating}</p>
                        <p className="font-semibold text-[16px]">{Deliverytime}</p>
                    </div>
                    <p className="text-gray-500 text-[16px]">{cusines}</p>
                    <p className="text-gray-500 text-[16px]">{location}</p>
                </div>
                
            </div>
        </>
    )
}

export default RestaurantCard