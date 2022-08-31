import { useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Search from './components/Search'
import { todayDate } from './utils/todayDate'


function App() {
  //const today = todayDate()
  const [date, setDate]= useState (todayDate())

  const getDate = (date) =>{
    setDate(date)
  }

  return (
    <div>
      <Header />
      <Search passDate={getDate} />
      <Card dateUser={date} />
    </div>
  )
}

export default App
