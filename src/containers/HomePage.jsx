import React from 'react'
import { Fav } from '../components/Fav'
import { Filter } from '../components/Filter'
import { Header } from '../components/Header'
import { Main } from '../components/Main'

export const HomePage = () => {
  return (
    <div className='HomePage'>
      <Header></Header>
      <div className="HomePage__grid container">
        <div className="HomePage__filter HomePage__block">
          <Filter></Filter>
        </div>
        <div className="HomePage__main HomePage__block">
          <Main></Main>
        </div>
        <div className="HomePage__fav HomePage__block">
          <Fav></Fav>
        </div>
      </div>
    </div>
  )
}
