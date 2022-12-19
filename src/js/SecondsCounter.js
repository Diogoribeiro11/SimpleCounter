import React, { useEffect, useState } from "react"; 

const SecondsCounter = ({seconds}) => {
    const [counter, setCounter] = useState(seconds)

    useEffect(()=>{
            setTimeout(()=>setCounter(counter + 1), 1000)
    },[counter])

    if(counter==10){
        alert("Time is reached!!");
    }
    return (
        <h1>
            {counter}
        </h1>
    );
}
 
export default SecondsCounter;