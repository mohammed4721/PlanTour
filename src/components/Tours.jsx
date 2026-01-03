import React from 'react'
import Card from "./Card"

function Tours({tours, removeTour}) {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center mb-6 text-slate-900">
            Plan With Love!
        </h1>
        {tours.map((tour) => {
            return <Card {...tour} removeTour={removeTour}  />
        })}
    </div>
  )
}

export default Tours