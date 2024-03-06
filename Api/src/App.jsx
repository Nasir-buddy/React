import { Link, Route, Routes } from "react-router-dom"
import Show from "./components/Show"
import Home from "./components/Home"
import Services from "./components/Services.jsx"


function App() {
  
  return (
    <div className="p-4 bg-blue-200 rounded">
    <nav className="flex justify-center gap-3">
    <Link to='/'>Home</Link>    
    <Link to='/Show'>Show</Link>    
    <Link to='/Services'>Services</Link>    
    </nav>

    <hr />

    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/show" element={<Show/>}></Route>
       <Route path="/Services" element={<Services/>}></Route>

    </Routes>
    </div>
    
  )
}

export default App