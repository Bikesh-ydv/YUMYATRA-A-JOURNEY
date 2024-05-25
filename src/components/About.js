import aboutme from "../images/aboutme.jpg"
const About = ()=>{
    return(
        <div className="">
            <div className="text-center mt-2 w-[360px] md:w-[460px] h-[63px] mx-auto  rounded-2xl bg-orange-400 text-gray-600">
                <h1 className="text-2xl font-mono mt-2 font-bold p-2">About Me</h1>
                {/* <hr className="my-1"></hr> */}
            </div>
            <div className=" mx-auto  rounded-xl bg-orange-400 w-[330px] md:w-[390px]">
            <img className="w-[100px] mx-auto rounded-full" src={aboutme}></img>
            <h1 className="text-center  text-gray-200 text-3xl font-mono   font-bold"> 
            Bikesh Yadav
             </h1>
             <h2 className="  text-2xl font-mono   text-gray-300 rounded-md mx-2 p-2 ">Frontend developer🍀.   Loves coding, 
              reading books, playing video games,watching anime or enjoying my favorite music🍁.</h2>
            </div>
            <div className="text-center mt-2 w-[360px] md:w-[460px] h-[60px] mx-auto  rounded-2xl bg-orange-400 text-2xl font-mono font-bold text-gray-600 p-4">
               <h1>About Project </h1>
               {/* <hr className="my-1"></hr> */}
            </div> 
             <div className="text-center w-[330px] md:w-[390px] mx-auto rounded-2xl bg-orange-400 text-xl font-mono text-gray-300" >
             <h1 className="text-gray-600 p-2">YUMYATRA-A journey for delicious food </h1>
                <p className="mx-2  p-2">Welcome to YUMYATRA, your ultimate destination for delicious and convenient food delivery!
                Our mission is to connect food lovers with their favorite local restaurants, offering a seamless and enjoyable dining experience from the comfort of your home.Powered by the robust Swiggy API, YUMYATRA ensures a smooth and reliable food delivery experience. With a user-friendly interface and a wide selection of cuisines, YUMYATRA makes it easy to discover new flavors and satisfy your cravings
                </p>
            </div>
        </div>
    )
}
export default About;