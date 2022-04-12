import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { Gallery } from './Gallery';



export const Main = () => {
  return (
    <div>
      <div className='d-flex justify-between'>
        <div className='d-flex align-center'>
          <h2 className='Main__header'>Отели</h2>
          <IoIosArrowForward className='ml-1' size={32}></IoIosArrowForward>
          <h2 className='Main__header'>Москва</h2>
        </div>
        <h3 style={{ fontSize: '24px', fontWeight: 400, color: '#41522E' }}>07 июля 2020</h3>
      </div>
      <Gallery></Gallery>
    </div>
  )
}
