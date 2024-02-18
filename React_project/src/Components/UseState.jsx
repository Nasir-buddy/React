import React, { useState } from 'react'

function UseState() {
    const [val, setval] = useState([
        { name: "Nasir Ali", age: 23 },
        { name: "Prachi Karn", age: 22 },
        { name: "Adarsh Raj", age: 21 }
    ]);
    return (
        <>
            <div>
                {val.map((item) => (
                    <div>
                        <h1>{item.name}</h1>
                        <h2>{item.age}</h2>
                    </div>
                ))}
                <button className='bg-blue-300 p-2 rounded-xl mt-2'
                    onClick={() => setval(
                        val.map(
                            (item => item.name === "Nasir Ali" ? ({ name: "Nasir", age: 20 }) : ({ name: "Prachi", age: 20 })
                            )))}
                >Click</button>
            </div>
        </>
    )
}

export default UseState 