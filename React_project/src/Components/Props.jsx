import React from 'react'

function Props({text, color}) {
  return (
    <button className={`px-3 py-1 ${color} text-black-500 text-xs rounded-md m-2`}>{text}</button>
  )
}

export default Props

// Props use hote hai aapke components ko reusable banane ke liye, consider karo aapke pass 
// button hai and aapko us button ko alag alag jagah dalna hai aap me , to aap ek button 
// component banayee and uska data hard coded karne ki jagah parent component se send karde 
// and child component par use kar le 


//to do 
// hmara data actually main app component me hoga aur hum use props ke through pass karenge card me
// card par ek add friend button hoga and hemein add friedn button par clik hone par alert dena hai 
// 