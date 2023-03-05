import React from 'react'
import './features.css'

export default function Features(props) {
  return (
    <div className='this_component'>
      <div className="design"></div>
      <p>{props.data}</p>
    </div>
  )
}
