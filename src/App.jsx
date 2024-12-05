
import { useEffect } from 'react'
import './App.css'
import Rout from './router'

function App() {
  useEffect(()=>{
    const value =localStorage.getItem('theme')
    if(value){
      document.body.classList.add(value)
    }
  })
  const dark = ()=>{
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
      localStorage.setItem('theme', 'dark')
    }else{
      localStorage.setItem('theme', '')
    }
  }

  return (
    <div className='dark:bg-black dark:text-white'>
     <Rout />
    </div>
  )
}

export default App
