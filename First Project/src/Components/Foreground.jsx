import React from 'react'
import Card from './Card'

function Foreground() {
    const data = [
        {
             desc: "This is the background color of the card that will be displayed", 
             fileSize: ".9mb", 
             close : false, 
             tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "This is the background color of the card that will be displayed", 
            fileSize: ".9mb", 
            close : false, 
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
       },
       {
        desc: "This is the background color of the card that will be displayed", 
        fileSize: ".9mb", 
        close : true, 
        tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"},
   },
   {
             desc: "This is the background color of the card that will be displayed", 
             fileSize: ".9mb", 
             close : false, 
             tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue"},
        },
    ]
    return (
        <div className='fixed w-full h-screen top-0 left-0 z-[3] p-5 flex flex-wrap gap-5'>
           {data.map((item, index)=>(
            <Card key={index} data={item}/>
           ))}
        </div>

    )
}

export default Foreground