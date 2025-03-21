import React from 'react'

export default function Footer(props) {
    const { data, toggleSideBar } = props
  return (
    <div className='footer text-white position-fixed bottom-0 w-100 p-2 p-md-3 d-flex justify-content-between align-items-center gap-3 z-1'>
      <div className='d-flex flex-column gap-2'>
        <h1>{data.title}</h1>
        <h1>APOD PROJECT</h1>
      </div>
      <div>
        <button className='btn text-white fs-1' onClick={toggleSideBar}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </div>
  )
}
