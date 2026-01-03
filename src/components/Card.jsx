import React, { useState } from 'react'

const Card = ({id, image, info, price, name, removeTour}) => {
    const [readMore, setReadMore] = useState(false);

    const description =readMore ? info : `${info.substring(0, 180)}...`;

function readMoreHandler(){
    setReadMore(!readMore )
}




  return (
    <div className='card'>
        <img src={image} alt="" />
        <div className='tour-info'>
        <div className='tour-details'>
            <h4 className='tour-price'>{price}</h4>
            <h4 className='tour-name'>{name}</h4>
        </div>
        <div className=''>
            {description}
            <span className='read-more' onClick={readMoreHandler}>
                {readMore ? `show less` : `read more`}
                </span>
        </div>
        </div>
        <button className='btn' onClick={()=>removeTour(id)} >Not Interested
        </button>
    </div>
  )
}

export default Card