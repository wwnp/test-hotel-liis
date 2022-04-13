import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { options } from '../config';
import { Gallery } from './Gallery';
import { HotelItem } from './HotelItem';

export const Main = () => {
  const loading = useSelector(store => store.homepage.loading)
  const hotels = useSelector(store => store.homepage.hotels)
  const favs = useSelector(store => store.homepage.favs)
  const { date } = useSelector(store => store.homepage.request)

  return (
    <div>
      <div className='d-flex justify-between'>
        <div className='d-flex align-center'>
          <h2 className='Main__header'>Отели</h2>
          <IoIosArrowForward className='ml-1' size={32}></IoIosArrowForward>
          <h2 className='Main__header ml-1'>Москва</h2>
        </div>
        <h3 style={{ fontSize: '24px', fontWeight: 400, color: '#41522E' }}>{new Date(date).toLocaleDateString('ru-RU', options)}</h3>
      </div>
      <Gallery></Gallery>
      <h2>Добавлено в избранное: {favs} отеля</h2>
      <div>
        {
          loading
            ? <h1>Loading</h1>
            : (
              hotels.map(hotel => {
                return (
                  <HotelItem
                    hotel={hotel}
                  >
                  </HotelItem>
                )
              })
            )
        }
      </div>
    </div>
  )
}
