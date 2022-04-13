import React from 'react'
import { Fav } from '../components/Fav'
import { Filter } from '../components/Filter'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SET_HOTELS, SET_TEST } from '../redux/contants'

export const HomePage = () => {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch({ type: SET_HOTELS })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
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
