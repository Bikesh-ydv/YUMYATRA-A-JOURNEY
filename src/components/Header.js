
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"


const Header = () =>{

    const cartItems = useSelector((store)=> store.cart.items);
console.log(cartItems)

    return(


        <div className="flex border-2 justify-between  shadow-md pb-5 z-20" >
            <div className="main-logo">
                <h1 className="pl-2 py-4 text-green-600 text-2xl font-bold"> <Link to={"/"}>YUMYATRA </Link></h1>
                {/* <img src="{image}"></img> */}
            </div>
            <div className="nav-items mt-[10px] ">
                <ul className="flex py-2 pr-1 text-md">
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