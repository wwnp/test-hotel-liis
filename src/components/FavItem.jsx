import React from 'react'
import { Heart } from './Heart';
import { Star } from './Star';

export const FavItem = () => {
  return (
    <div>
      <div className='d-flex justify-between align-center'>
        <p style={{ fontSize: '17px' }}>Moscow Marriott Grand Hotel</p>
        <Heart size='24px'></Heart>
      </div>
      <p>28 June 2020 -- 1 день</p>
      <p>
        <Star></Star>
        <Star></Star>
        <Star></Star>
        <Star color='grey'></Star>
        <Star color='grey' ></Star>
      </p>
    </div>
  )
}