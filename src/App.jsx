import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Main from './components/Main'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

function App() {
  const [modal, ShowModal] = useState(true)
  const [sideBar, ShowSideBar] = useState(false)
  const [data, setData] = useState(null)

  function toggleSideBar(){
    ShowSideBar(!sideBar)
  }

  useEffect(() =>{
    async function fetchApiData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`

      const today = (new Date()).toString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(localKey)
        return
      }
      try{
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log(apiData)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchApiData()
  },[])

  return (
    <>
      {data ? (<Main data={data}/>) :
        <div className='container-fluid bg-dark vh-100 w-100 d-flex justify-content-center align-items-center'>
          <div className='spinner-border text-light' role='status'>
            <span className='sr-only'></span>
          </div>
        </div>
      }
      {sideBar && (<SideBar data={data} toggleSideBar={toggleSideBar}/>)}
      {data && (<Footer data={data} toggleSideBar={toggleSideBar}/>)}
    </>
  )
}

export default App
