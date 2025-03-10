import React from 'react'

export default function Main(props) {
    const { data } = props
  return (
    <div className='vh-100 w-100 position-relative'>
      <img src={data.url} alt={data.title} className='h-100 w-100'/>
    </div>
  )
}
