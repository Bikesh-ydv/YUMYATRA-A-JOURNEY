
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"


const Header = () =>{

    const cartItems = useSelector((store)=> store.cart.items);
console.log(cartItems)

    return(


        <div className="flex border-2 justify-between shadow-md pb-1 z-10  sm:w-full md:w-full lg:w-full " >
            <div className="main-logo">
                <h1 className=" py-4 text-green-600 text-xl lg:text-2xl font-medium lg:font-bold"> <Link to={"/"}>YUMYATRA </Link></h1>
                {/* <img src="{image}"></img> */}
            </div>
            <div className="nav-items mt-[10px] space-x-1">
                <ul className="flex py-2 pl-2 text-base md:text-xl lg:text-xl">
                <li className="text-gray-600  hover:text-gray-900 px-2"> <Link to={"/"}> Home </Link> </li>
                <li className="text-gray-600  hover:text-gray-900 px-2"><Link to={"/contact"}>Contact</Link></li>
                <li className="text-gray-600  hover:text-gray-900 px-2"> <Link to={"/about"}>About </Link></li>
                <li className="text-gray-600  hover:text-gray-900 px-2 font-medium"> <Link to={"/cart"}>Cart {cartItems.length}</Link></li>
                </ul>
                
            </div>
        </div>
        
       



    )
};
export default Header