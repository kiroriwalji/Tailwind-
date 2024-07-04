import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    username:"Vishal",
    age: 21
  }

  return (
    <>
     <h1 className='bg-slate-500 p-4 rounded-3xl'>Hey Tailwind Css</h1>
     <h1 className='bg-amber-500 p-4 rounded-2xl m-4'>hey Spring boot</h1>
     
     <div className>
      <Card username={"MAcbook"}/>
      <Card username ="Code Or Chai"/>
      <Card username="vishal kiroriwal"/>
     </div>
    </>
  )
}

export default App
