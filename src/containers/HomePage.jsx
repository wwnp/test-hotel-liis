import React from 'react'
import { Fav } from '../components/Fav'
import { Filter } from '../components/Filter'
import { Header } from '../components/Header'

export const HomePage = () => {
  return (
    <div className='HomePage'>
      <Header></Header>
      <div className="HomePage__grid">
        <Filter></Filter>
        <div className="HomePage__main"></div>
        <div className="HomePage__fav">
          <Fav></Fav>
          {/* <Filter></Filter> */}
        </div>
      </div>
    </div>
  )
}
