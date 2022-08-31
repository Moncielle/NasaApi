import { FaRocket } from 'react-icons/fa'
const Header = () => {
  return (
    <div className='container title background'>
        <h1><FaRocket /> NASA Astronomy Picture of the day</h1>
        <h4>Desarrollado por: Monciel Lugo </h4>
        <div className='api'>
          <h6>API:</h6>
          <a href='https://api.nasa.gov/planetary/apod'> https://api.nasa.gov/planetary/apod</a>
        </div>
    </div>
  )
}

export default Header