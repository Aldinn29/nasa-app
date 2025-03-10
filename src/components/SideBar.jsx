import React from 'react'

export default function SideBar(props) {
    const { data, toggleSideBar } = props

  return (
    <div className='sidebar vh-100 w-25 w-md-50 bg-dark text-white p-3 top-0 end-0 position-fixed d-flex flex-column justify-content-between z-2'>
      <div>
        <h1>{data.title}</h1>
        <h3 className='my-3'>{data.date}</h3>
        <p>{data.explanation}</p>
      </div>
      <div>
        <button className='btn btn-light mb-4 py-0 px-2 fs-5' onClick={toggleSideBar}>
            <i class="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  )
}
