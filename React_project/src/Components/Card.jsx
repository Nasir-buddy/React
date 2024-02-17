import React from "react"
function Card() {
    const data = [{
        image: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Amazon Basic",
        description: "Hey my name is nasir ali and i study in accurate institute of management and technology"
    },
    {
        image: 'https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?q=80&w=916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Amazon",
        description: " accurate institute of management and technology"
    },
    {
        image: 'https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Apple",
        description: "Hey my name is nasir ali "
    }];
    return (
        <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
            {data.map((value, index) => (
                <div key={index} className=" w-52 bg-zinc-100 overflow-hidden rounded-md">
                    <div className="w-full h-32 bg-zinc-300">
                        <img className="w-full h-full object-fit-cover" src={value.image}></img>
                    </div>
                    <div className="w-full px-3 py-4">
                        <h2 className="font-semibold">{value.name}</h2>
                        <p className="text-xs mt-5">{value.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Card