import React from "react"
function Card() {
    const data = [{
        image: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Apple",
        description: 'Hey my name is nasir ali and i study in accurate institute of management and technology.',
        inStock: true
    },{
        image: 'https://plus.unsplash.com/premium_photo-1666264200762-f2ae0643b9ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Amazon",
        description: 'Accurate institute of management and technology.',
    inStock: false        
    },{
        image: 'https://images.unsplash.com/photo-1590005354167-6da97870c757?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Basic",
        description: 'Hey my name is nasir Ali',
        inStock: false
    }];
    const clickHandeler = ()=>{
        alert("Clicked the button by the user.")
    }
    return (
        <div className="bg-zinc-500 w-full h-screen flex justify-center items-center gap-10">
           {data.map((value, index)=>(
            <div key={index} className="w-52  bg-zinc-300 rounded-md overflow-hidden">
                <div className="w-full h-32">
                    <img className="w-full h-full object-fit-cover" src={value.image}></img>
                </div>
                <div className="w-full h-full px-4 py-3">
                    <h2 className="font-semibold ">{value.name}</h2>
                    <p className="text-xs mt-5">{value.description}</p>
            <button onClick={clickHandeler} className={`p-2 bg-blue-500 mt-4 rounded-md ${value.inStock ? 'bg-green-500': 'bg-red-500'}`}>{value.inStock ? 'Show more':'Not Available'}</button>
                </div>
            </div>
           ))}
        </div>
    )
}
export default Card