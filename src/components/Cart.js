import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";



const Cart= ()=>{
    const cartItems =useSelector((store)=> store.cart.items)
    const dispatch = useDispatch();

    const handleRemoveCartItem = (item) =>
        { dispatch(removeItem(item?.id))
          toast.success("Item removed from your cart");
        }; 

        const handleResetCartItem = (item) =>
            { dispatch(clearCart(item))
              toast.success("Cart is cleared");
            }; 

            function getItemPrice(item){
              return (item.defaultPrice
            ? item.defaultPrice / 100
            : item.price / 100);
            }
            let sum=0;
            function totalCost(item)
            {
              
               sum= sum + getItemPrice(item)
            }
            const getPlaceOrder = () =>
              { 
                toast.error("I am working on it promise!!!.");
                 
              }; 

          

    return (cartItems.length===0)?
    ( <div className="flex flex-col ">
        <img 
        className="w-[450px] mx-auto "
        src="https://www.adasglobal.com/img/empty-cart.png"></img>
         <h1 className="text-2xl font-semi text-center text-gray-600">Looks like you have not added anything to your cart. Go ahead & explore items in menu.</h1>
   
    <button className="my-[10px] mx-auto border-green-600 hover:bg-white hover:text-green-600 w-[125px] h-19 p-2 border bg-green-600  font-bold  text-white"> <Link to = {"/"}>Go to homepage</Link></button>
   
    </div>
   ):(

        <div>
            <Toaster toastOptions={{
        className: 'font-ProximaNovaSemiBold',
        position: 'top-center',
        duration: 1500,
          }} />
           <div className="my-[10px] w-[342px] md:w-[700px] lg:w-[850px] mx-auto  border-2 shadow-md p-2  z-20 bg-green-600">
                        <h2 className="text-center text-2xl font-bold my-auto">Cart Items</h2>
                        
                      </div>

             { 
                 cartItems.map((item) =>(
                  
                  <div className="flex flex-col mx-auto px-1  w-[342px] md:w-[700px] lg:w-[850px] hover:shadow-md z-20" key={item?.id}>
                     {totalCost(item)}
                     <div>
                      
                       <h3 className=" flex flex-initial overflow-hidden text-2xl">{item?.name}</h3> 
                        <p>Rs {getItemPrice(item)}</p> 
                      <div>
                      <div>
                            <div className="flex justify-start text-gray-500">{item?.description}
                              </div>
                          <div className="text-right ">
                                 <button 
                                 onClick={()=>handleRemoveCartItem(item)}
                                 className=" justify-center pr-1.5 w-24 h-10  bg-red-600 rounded border shadow-md z-20 font-bold text-center mr-[8px] border-gray p-1 text-white"> REMOVE</button>
                                 
                         </div>
                     </div>

                  </div>
                  <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
                 </div>

               
                
                </div>
               
                ))
               }
               <div className="">

               <Toaster toastOptions={{
        className: 'font-ProximaNovaSemiBold',
        position: 'top-center',
        duration: 1500,
          }} />

                    <div className="flex w-[342px] md:w-[700px] lg:w-[850px] h-[50px] my-2 justify-between mx-auto sm:mx-auto md:mx-auto lg:mx-auto bg-green-600">
                        <h1 className="text-xl font-bold text-white my-auto ml-[8px]">Total Price</h1>
                        <h1 className="text-xl font-bold text-white my-auto mr-[8px]">Rs {sum}</h1>
                    </div>
                    <div className="flex justify-around w-[342px] md:w-[700px] lg:w-[850px] mx-auto  h-[50px]   ">
                   
                    <button 
                    onClick={()=>getPlaceOrder()}
                    className=" md:ml-[80px] border-green-600 hover:bg-white hover:text-green-600 w-[120px] border bg-green-600  font-bold  text-white">Place Order</button>
                   
                    
                    <button 
                     onClick={()=>handleResetCartItem(cartItems)}
                    className=" border md:ml-[30px] border-red-600 hover:bg-white hover:text-red-600 w-[120px] bg-red-600 l font-bold  text-white">Clear All</button>
                 
                    </div>
                </div>

        </div>
        

    )
}
export default Cart