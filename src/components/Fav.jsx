import React from 'react'
import { CgArrowsScrollV } from 'react-icons/cg';
import { FavItem } from './FavItem';

export const Fav = () => {
  return (
    <div>
      <h2>Избранное</h2>
      <div className='d-flex align-center'>
        <button className='btn d-flex align-center btn-active mr-1 btn-sm'>Рейтинг <CgArrowsScrollV></CgArrowsScrollV></button>
        <button className='btn d-flex align-center btn-sm'>Цена <CgArrowsScrollV></CgArrowsScrollV></button>
      </div>
      <FavItem></FavItem>
      <FavItem></FavItem>
      <FavItem></FavItem>
    </div>
  )
}
