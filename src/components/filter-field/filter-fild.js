import React from 'react'
import './filter-field.css'

export default function FilterFild({onPrivate}) {

  function handleClick(){
    onPrivate()
  }

  return (
    <button className='button-filter' onClick ={handleClick}><img className='filtrimage' src="./icons/filter.png"/></button>
  )
}
