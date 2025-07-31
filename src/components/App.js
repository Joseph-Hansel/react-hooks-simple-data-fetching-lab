// create your App component here

import React, {useEffect, useState} from "react"

function App(){

    const [picture, setPicture] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((pic)=>pic.json())
            .then((pic)=>{
                setPicture(pic.message)
                setIsLoaded(true)
            })
    },[])

    return <div>
        {isLoaded ? <img alt="A Random Dog" src={picture}/> : <h3>Loading...</h3>}
    </div>
};

export default App;