import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/Constants";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";







const RestaurantMenu = ()=>{

    const [restaurantInfo, setrestaurantInfo] = useState({});
    const [restaurantMenu, setrestaurantMenu] = useState([]);

    const   RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

    const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

    useEffect(()=>{
        getRestaurantMenu();
    },[]);

    const dispatch = useDispatch();
    const handleCartItem = (item) =>
      { dispatch(addItem(item))
        toast.success("Item added in your cart");
      }; 
    

      function getItemPrice(item){
        return (item.defaultPrice
      ? item.defaultPrice / 100
      : item.price / 100);
      }
      
    
    async function getRestaurantMenu(){
      const menudata = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+ id);

      const json = await menudata.json();

    //   console.log(json.data.cards[4].groupedCard.
    //     cardGroupMap.REGULAR.cards[1].card.card.itemCards
    //     );
      setrestaurantInfo(json?.data?.cards[2]?.card?.card?.info)
     console.log(json.data);
    
      const menuitem =  json?.data?.cards
      .find((x) => x.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (x) => x.card?.card
      )
      ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
      ?.map((x) => x.itemCards)
      .flat()
      .map((x) => x.card?.info) || [];
      console.log(menuitem);

      const uniqueMenuItems = [];
      menuitem.forEach((item) => {
          if (!uniqueMenuItems.find((x) => x.id === item.id)) {
              uniqueMenuItems.push(item);
          }
      });
    //   console.log(uniqueMenuItems);
    setrestaurantMenu(uniqueMenuItems);
    }

    const {id} = useParams();

    return (!restaurantInfo) ? 
        <Shimmer/>
     : (
        <div className=" mt-2 min-h-screen w-auto ">
            
            <Toaster toastOptions={{
        className: 'font-ProximaNovaSemiBold',
        position: 'top-center',
        duration: 1500,
      }} />

            <div className="w-fit sm:w-full md:w-full lg:w-full flex h-52 justify-center align-middle overflow-y-hidden bg-gray-500 text-cyan-50 ">
            <img 
            className="w-70 h-50   "
            src= {IMG_CDN_URL+ restaurantInfo.cloudinaryImageId}></img>
            <div className="flex flex-col m-2 w-[400px]">
              <h2 className=" text-2xl max-w-lg text-opacity-70">{restaurantInfo.name}</h2>
              <h3 className="flex-nowrap opacity-70 text-base max-w-lg">{restaurantInfo.areaName}</h3>
              <h4 className="flex-nowrap opacity-70 text-base max-w-lg">{restaurantInfo.avgRating} Ratings</h4>
            </div>
            </div>
            <div className=" flex justify-between flex-col border">
            <div className="my-[10px] w-[400px] md:w-[700px] lg:w-[850px] mx-2 sm:mx-auto md:mx-auto lg:mx-auto border-2 shadow-md pb-5 z-20 bg-green-400">
                        <h2 className="text-center text-2xl ">Menu Cards</h2>
                        
                      </div>
               { 
                  restaurantMenu.map((item) => (

                    

                  <div className="flex flex-col mx-2 sm:mx-auto md:mx-auto lg:mx-auto mt-[5px] w-[400px] md:w-[700px] lg:w-[850px] text-center hover:shadow-md z-20  " key={item?.id}>
                     <div className="ml-[10px]">
                       <h3 className=" flex flex-initial overflow-hidden text-2xl">{item?.name}</h3> 
                        <p className="text-start">Rs {getItemPrice(item)}</p> 
                      <div>
                      <div className="">
                            <div className="flex justify-start ml-[10px] text-gray-500">{item?.description}
                              </div>
                          <div className="text-right ">
                                 <button 
                                 onClick={()=>handleCartItem(item)}
                                 className="  justify-center pr-1.5 w-24 h-10  bg-white-600 rounded border shadow-md z-20 font-bold text-center mr-[8px] border-gray p-1 text-green-600"> ADD+</button>
                                 
                         </div>
                     </div>

                  </div>
                  <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 "></hr>
                 </div>

                  {/* // <li key={item.id}>{item.name}</li> */}
                </div>
                ))
               }
            </div>
            </div>
          
              )
};
export default RestaurantMenu;