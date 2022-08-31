import { useState } from 'react'
import { FaCalendarDay } from 'react-icons/fa'
import { todayDate } from '../utils/todayDate'

const Search = (props) => {
  const [date, setDate]= useState ('')

  const onSubmit = (e) => {
    e.preventDefault();
    setDate(date)
    props.passDate(date)
  }
  
  const today = todayDate();

  return (
    <div className='container box background'>
        <form onSubmit={onSubmit} >
            <h6>Buscar</h6>
            <input 
                type='date' 
                className='date'
                max={today}
                value={date}
                onChange={(e)=>setDate(e.target.value)}
            />
            <FaCalendarDay />
            <input type='submit' className='button' value='Buscar' />
        </form>
    </div>
  )
}

export default Search