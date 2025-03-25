import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeamMemberCard from '../components/teamMemberCard'

function App() {
  const data = [{
    name: "Ashish Yadav",
    age: "18 years",
    gender: "male",
    favouriteMovie: "titanic"
  }, 
{
  name: "Avinash Guleria",
  age: "17 years",
  gender: "male",
  favouriteMovie: "Spiderman"
}]

  return (
    <div className='grid'>
      <div className='grid1'><TeamMemberCard data={data[0]}/></div>
      <div className='grid2'><TeamMemberCard data={data[1]}/></div>
    </div>
     
  )
}

export default App
