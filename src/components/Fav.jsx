import React from 'react'
import { CgArrowsScrollV } from 'react-icons/cg';
import { FavItem } from './FavItem';
import { useSelector } from 'react-redux';

export const Fav = () => {
  const favs = useSelector(store => store.homepage.favs)


  const out = []
  for (let i = 0; i < favs.length; i++) {
    const fav = favs[i];
    if (i >= 2) {
      break
    }
    out.push((
      <FavItem
        key={fav.hotelId}
        hotel={fav}
      >
      </FavItem>
    ))

  }
  return (
    <>
      <h2>Избранное</h2>
      <div className='d-flex align-center'>
        <button className='btn d-flex align-center btn-active mr-1 btn-sm'>Рейтинг <CgArrowsScrollV></CgArrowsScrollV></button>
        <button className='btn d-flex align-center btn-sm'>Цена <CgArrowsScrollV></CgArrowsScrollV></button>
      </div>
      {out}
      {/* {
        favs.map((fav, index) => {
          // return <div>{fav.hotelName}</div>
          return (
            <FavItem
              key={fav.hotelId}
              hotel={fav}
            // hotelName={fav.hotelName}
            // stars={fav.stars}
            // priceAvg={fav.priceAvg}
            // hotelId={fav.hotelId}
            >
            </FavItem>
          )
        })
      } */}
    </>
  )
}
