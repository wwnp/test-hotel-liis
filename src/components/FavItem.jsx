import React from 'react'
import { Heart } from './Heart';
import { Star } from './Star';

export const FavItem = () => {
  const s = [1, 2, 3, 4, 5]
  return (
    <div className='d-flex justify-between align-center'>
      <div className='d-flex align-center'>
        <div>
          <p style={{ fontSize: '17px' }}>hotelName</p>
          <p>28 June 2020 -- 1 день</p>
          {
            s.map((color, index) => {
              return <Star key={color + index + new Date().toLocaleString()} color={color}></Star>
            })
          }
        </div>
      </div>
      <div className='d-flex flex-column align-end align-center'>
        <Heart size='24px'></Heart>
        <p className='text-muted'>price: <span className='HomePage__price ml-2'>priceAvgp</span></p>
      </div>
    </div>
  )
}