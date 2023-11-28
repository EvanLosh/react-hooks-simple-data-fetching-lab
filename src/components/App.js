// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const apiurl = 'https://dog.ceo/api/breeds/image/random'

    const [image, setImage] = useState(<p>Loading...</p>)

    useEffect(() => {
        fetch(apiurl).then(r => r.json()).then(data => setImage(<img src={data.message} alt='A Random Dog'></img>))
    }, [])



    return <div>
        {image}
    </div>
}

export default App