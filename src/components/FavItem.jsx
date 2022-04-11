import React from 'react'
import { AiFillStar } from 'react-icons/ai';

export const FavItem = () => {
  return (
    <div>
      <div className='d-flex justify-between align-center'>
        <p>Moscow Marriott Grand Hotel</p>
        <span>@</span>
      </div>
      <p>28 June 2020 -- 1 день</p>
      <p>
        <AiFillStar></AiFillStar>
        <AiFillStar></AiFillStar>
        <AiFillStar></AiFillStar>
        <AiFillStar></AiFillStar>
        <AiFillStar></AiFillStar>
      </p>
    </div>
  )
}