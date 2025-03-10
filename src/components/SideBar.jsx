import React from 'react'

export default function SideBar(props) {
    const { data, toggleSideBar } = props

  return (
    <div className='sidebar vh-100 w-50 bg-dark text-white p-3 top-0 end-0 position-fixed d-flex flex-column justify-content-between z-2 overflow-auto'>
      <div className='d-flex flex-column gap-2'>
        <h1>{data.title}</h1>
        <h3>{data.date}</h3>
        <p>{data.explanation}</p>
        <h3>{data.copyright}</h3>
      </div>
      <div>
        <button className='btn btn-light mb-4 py-0 px-2 fs-5' onClick={toggleSideBar}>
            <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  )
}
