import { useState } from "react";
const contact = ()=>{

   const [message, setMessage] = useState(false);
   const handleSubmit = (e) => {
       e.preventDefault();
       setMessage(true);
       console.log(e);
   }
    return(
        <div>
         <div className="w-[320px] h-[60px] lg:w-[640px] ">
            <h1 className=" text-5xl text-gray-600 mt-[40px] ml-[60px] lg:ml-[80px] font-thin">Contact Us</h1>
         </div>
         <div className="ml-2 my-8 ">
            <form onSubmit={handleSubmit}>
                <p className=" text-gray-600 lg:ml-8 p-1">Please fill out the form below and submit if you have any feedback or queries.</p>
               <div className="flex flex-col my-[30px] lg:flex-row">
               <div className="flex flex-col p-1 lg:ml-8">
                  <label className="text-sm font-medium">YOUR NAME</label>
                  <input type="text" placeholder="Your Name" required
                  className="w-[320px] h-[32px] md:w-[450px] lg:w-[320px] border mt-[5px] p-[10px]"
                  ></input>
                </div>
                <div className="flex flex-col ml-0 p-1 mt-2 lg:mt-0 lg:ml-8">
                  <label className="text-sm font-medium" >EMAIL ADDRESS </label>
                  <input type="email" placeholder= "Email " required
                   className="w-[320px] h-[32px] md:w-[450px] lg:w-[320px] border mt-[5px] p-[10px]"
                  ></input>
                </div>
               </div>
               <div className="flex flex-col p-1 lg:ml-8">
                 <label className="text-sm font-medium">ENQUIRY </label>
                 <input type="text" placeholder="Type your message here... "
                    className="w-[320px] lg:w-[680px] h-[100px] border mt-[5px] md:w-[450px] p-[10px] " required
                 ></input>
               </div>
               <button type="submit" className="w-[220px] lg:w-[680px] border mt-[20px] h-[30px] ml-9 bg-green-400 hover:bg-green-300">Submit</button>
             </form>  
             {message && <span className="text-lg text-green-500 ml-8"> Form Submitted Successfully!!!.</span>}  
            </div> 
         </div>
    )
    
}
export default contact;