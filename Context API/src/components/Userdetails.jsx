import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useParams } from 'react-router-dom';

function Userdetails() {
  const {id} = useParams();
  const {user} = useContext(UserContext);
  console.log(user[id]);
  return (
    <div></div>
  )
}

export default Userdetails