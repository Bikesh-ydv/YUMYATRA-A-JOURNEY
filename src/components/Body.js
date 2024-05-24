import { useState } from "react";
import { restaurantLists } from "../utils/Constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/helper";









const Body = () => {
   
  const [allRestaurant, setallRestaurant] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [ChangingText, setChangingText] = useState('Tired of the same old meals?');
  const [SearchInput,setSearchInput]=useState("");
   
   
     useEffect(()=>{
     fetchrestaurants();

     },[]);

     useEffect(() => {
      const timer = setInterval(() => {
        const texts = [
          'Cooking gone wrong?',
          'Game night?',
          'Hungry?',
          'Movie Marathon?',
          'Late night at office?',
          'Unexpected Guests?',
          'Craving your favourite food?',
          'Fight with wife?',
          'Why wait in line?',
          'No time to cook?',
          'Why cook when you can click?',
          'Unexpected guests?',

        ];
  
        const randomIndex = Math.floor(Math.random() * texts.length);
        setChangingText(texts[randomIndex]);
      }, 3000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
      
     async function fetchrestaurants(){
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING")

     const json = await data.json();  

     async function checkJsonData(jsonData) {

      for (let i = 0; i < jsonData?.data?.cards.length; i++) {

        // initialize checkData for Swiggy Restaurant data
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    const resData = await checkJsonData(json);
      
      // console.log(json);
      // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //  setallRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //         // console.log(setallRestaurant);
    //  setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   
          setallRestaurant(resData);
          setfilteredRestaurants(resData);

     }

   //  

  

    return (allRestaurant?.length === 0)? <Shimmer/> :(
       
       <div>
            
            <div className="flex flex-col items-center my-8 ">
    {/* <div>
    <span class="text-xl uppercase cursor-pointer sm:text-2xl font-ProximaNovaBold text-center">Food Kitchen</span>
    </div> */}
    <div className="flex flex-col px-5 ">
    <h2 class="font-ProximaNovaSemiBold text-3xl py-2 text-[#282c3f] font-bold">{ChangingText}</h2>
    <p class="font-ProximaNovaThin text-2xl py-2 text-[#686b78] my-2">Order food from widest range of restaurants near you.</p>
    </div>
    <div className="flex flex-col  w-full  my-[15px]">
    <div className="flex  flew-col ">
     <div className="flex flex-col justify-center w-full mx-2 px-2 lg:flex-row">
  
   <input className=" h-[40px] w-65 border border-[#bebfc5] 
   
   focus:outline-none mx-1 lg:w-[600px] lg:ml-[300px] font-ProximaNovaMed text-sm text-[#282c3f] p-3" type="text" placeholder="Restaurants or Cuisines"value={SearchInput} 
    onChange={(e)=>{
     setSearchInput(e.target.value);
    }}
    ></input>
  
  <button className="bg-green-600 content-center w-40 mx-auto  mt-2 lg:mt-0 lg:ml-1 h-10 border-spacing-1.5 border-black p-1"
    onClick={()=>{
     // filtering data
     const filtereddata = filterdata(SearchInput, allRestaurant);
     setfilteredRestaurants(filtereddata);

     
    }}>
    Find Restaurants</button>

    </div>

    <div>
    
    
    </div>

   </div>

   
    </div>

    </div> 

            <div className="flex gap-8 flex-wrap mt-10 2xl:justify-start justify-center">
              {
                (filteredRestaurants?.length === 0 ? <h1>No data match your filter</h1> :
              filteredRestaurants?.map((restaurant)=>{
                return  (
                <Link className='relative transition-all hover:scale-95 ' to={"/restaurant/" + restaurant?.info.id} key={restaurant?.info.id}>
                <RestaurantCard {...restaurant.info} />
                </Link>
                // console.log(restaurant.info)
                )
              }))}
            </div>

        </div>
            
    )
}

export default Body;