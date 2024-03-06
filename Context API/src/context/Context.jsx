import React, { useState, createContext } from 'react'
export const UserContext = createContext();


const Context = (props) => {

  const [user, setUser] = useState([
    {
      id: 0, 
      username: "Nasir Ali", 
      ciry: "Greater Nodida"
    },
    {
      id: 1, 
      username: "Adarsh", 
      ciry: "Greater Nodida"
    },
    {
      id: 3, 
      username: "Rohit", 
      ciry: "Nodida"
    }
  ]);

  return <UserContext.Provider value={{ user, setUser }}>
    {props.children}
  </UserContext.Provider>

}
export default Context