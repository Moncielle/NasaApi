import useGetData from '../hooks/useGetData'

const Card = ({dateUser}) => {
  //const date = '2022-05-22'
  console.log(dateUser);
  const KEY = 'dALxbPGlGJuYe5xeXnic7H2fCvGlga5LV0i6Va1j'
  const photos = useGetData(`https://api.nasa.gov/planetary/apod?api_key=${KEY}&date=${dateUser}`)
  return (
    <div className="container card">
        <h5 className="card-title">{photos.title}</h5>
        <div className="card mb-3">
            <img src={photos.url} className="card-img-top" alt={photos.title} />
            <div className="card-body">
                <p className="card-text">
                    <small>Fotografo: {photos.copyright}</small>
                </p>
                <p className="card-text">{photos.explanation}</p>
            </div>
        </div>                                                                                                                                                                                                                                                                                                                                                             
    </div>
  )
}

export default Card