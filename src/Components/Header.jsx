
const Header = () =>{
    return(
        <>
            <div className="flex justify-between p-4 bg-orange-500">
                <div>
                    {/* <img src=""alt="Munch Point"/> */}
                    <h1 className="text-3xl text-white font-semibold">MunchPoint</h1>
                </div>
                <div className="flex gap-7">
                    <div>Home🏠</div>
                    <div>About us</div>
                    <div>%Offers</div>
                    <div>Contact us📞</div>
                    <div>Cart🛒</div>
                    
                </div>    
            </div>        
        </>
    )
}

export default Header