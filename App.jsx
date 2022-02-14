
import React from 'react';
import { useState } from 'react/cjs/react.development';


const App = () => {
   let currentTime = new Date().toLocaleTimeString();
    const [Ctime, setCtime] = useState(currentTime);

    const UpdateTime = () =>{
   currentTime = new Date().toLocaleTimeString();
    setCtime(currentTime);
    }

    return(
        <>
        <h1>{Ctime}</h1>
        <button onClick={UpdateTime}>Get Time</button>
        
        </>
    );
}

export default App;