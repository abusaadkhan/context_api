import React, { useContext } from "react";
import { myContext } from "../App";


const Navbar = () => {
    const data = useContext(myContext)
    return(
    <div className='w-full h-screen ' style={{background:data.bgColor,color:data.color}} >
     <div className="w-screen h-5 p-8 bg-blue-400 flex  items-center justify-end  " >
         <button onClick={data.btnClicked} style={{backgroundColor:data.bgColor}} 
         className="px-2 py-1 rounded-md">click</button>
     </div>
    </div>
    )
}

export default Navbar