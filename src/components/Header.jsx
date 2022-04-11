import React from 'react'
import { MdOutlineExitToApp } from 'react-icons/md';
import { IconContext } from "react-icons";

export const Header = () => {
  return (
    <div className='Header'>
      <h2>Simple Hotel Check</h2>
      <div className='d-flex align-center pointer'>
        <button className='btn-outline'>Выйти</button>
        <IconContext.Provider value={{ color: "#41522E", className: "global-class-name" }}>
          <MdOutlineExitToApp size={32}></MdOutlineExitToApp>
        </IconContext.Provider>
      </div>
    </div>
  )
}
