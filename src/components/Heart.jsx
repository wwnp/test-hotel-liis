import React from 'react'
import { IconContext } from 'react-icons'
import { AiTwotoneHeart } from 'react-icons/ai';

export const Heart = ({ color = 'red', size = '16px' }) => {
  return (
    <IconContext.Provider
      value={{ color, size }}
    >
      <span>
        <AiTwotoneHeart className={'pointer'} />
      </span>
    </IconContext.Provider>
  )
}