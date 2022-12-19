import React, { useEffect, useState } from "react"; 

const GivenNumber = () => {
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        
            setTimeout(()=>setCounter(counter + 1), 1000)
        
    },[counter])


    return (   
        <div>
        <h1> 
            {counter}
        </h1>
        </div>  
    );
}

export default GivenNumber;