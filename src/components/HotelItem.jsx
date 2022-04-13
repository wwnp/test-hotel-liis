import React from 'react'
import { Heart } from './Heart'
import { Star } from './Star'
import { FaHome } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { options } from './../config';

export const HotelItem = ({ hotel }) => {

  const { date, days } = useSelector(store => store.homepage.request)
  const {
    hotelName,
    stars,
    priceAvg,
  } = hotel

  const s = []
  for (let i = 0; i < stars; i++) {
    s.push('gold')
  }
  const dif = 5 - s.length
  for (let i = 0; i < dif; i++) {
    s.push('grey')
  }

  return (
    <div className='d-flex justify-between align-center' style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px ' }}>
      <div className='d-flex align-center'>
        <div style={{ padding: '24px' }}><FaHome size={'36px'} ></FaHome></div>
        <div>
          <p style={{ fontSize: '17px' }}>{hotelName}</p>
          <p>{new Date(date).toLocaleDateString('ru-RU', options)} -- {days} {checkDays(days)}</p>
          {
            s.map(color => {
              return <Star color={color}></Star>
            })
          }
        </div>
      </div>
      <div className='d-flex flex-column align-end align-center'>
        <Heart size='24px'></Heart>
        <p className='text-muted'>price: <span className='HomePage__price ml-2'>{parseInt(priceAvg)}p</span></p>
      </div>
    </div>
  )
}
function checkDays(days) {
  if (days >= 5) {
    return 'дней'
  }
  if (days >= 2) {
    return 'дня'
  }
  return 'день'
}