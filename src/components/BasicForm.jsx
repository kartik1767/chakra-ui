import React, { useState } from 'react'

const BasicForm = () => {
    // *********************************** USE STATE ***********************************
    
    // const [name, setName] = useState(0)
    // const [num, setNum] = useState(0)
    let counter = 0

    let increament = () =>{
        counter = counter + 1
    }

    let decreament = () =>{
        counter = counter - 1
    }

    return (
        <div>
            {/* <form>
                <input 
                    type="text" 
                    placeholder='Name' 
                    onChange={(e) => setName(e.target.value)}
                    />
                    <br /> <br />
                <input type="text" placeholder='mail' />
                <br /><br />
                
            </form>

            <button onClick={() => console.log(name)}>Press</button>
                <p>{name}</p> */}

            <button onClick={() => increament()}>Inc</button>
                    <p>{counter}</p>
            <button onClick={() => decreament()}>dec</button>

        </div>
    )
}

export default BasicForm
