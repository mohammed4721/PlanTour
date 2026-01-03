import { useState } from "react"
import Tours from "./components/Tours"
import data from "./data"


function App() {
const [tours, setTours] = useState(data)
function removeTour(id){
    const newTours = tours.filter(tour => tour.id != id)
    setTours(newTours);
}

if(tours.length === 0){
  return(

  <div className="flex flex-col items-center justify-center gap-4 mt-16">
    <h3 className="text-2xl font-bold text-slate-800">No Tours Left</h3>
    <button onClick={()=>setTours(data)} className="px-6 py-2.5 rounded-2xl font-semibold 
             backdrop-blur bg-white/40 border border-blue-400 
             text-blue-600 shadow-lg
             hover:bg-blue-500 hover:text-white transition">Refresh</button>
  </div>

  )
}

  return (
    <>
     <div >
      <Tours tours = {tours} removeTour = {removeTour} />
     </div>
    </>
  )
}

export default App
