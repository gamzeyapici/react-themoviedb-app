import {useEffect, useState} from "react";
import {useParams, useLocation} from "react-router-dom";
import {getMovie, getTv} from "services";

import './style.scss';

export const MovieDetail = () => {
  const [item, setItem] = useState(null);
  const params = useParams()
  const location = useLocation()

  useEffect(() => {
    const service = location.search.includes('tv') ? getTv : getMovie;

    service(params.id).then(res => {
      setItem(res.data)
    })
  }, [location, params.id])

  useEffect(() => {
    if (item) {
      const url = 'https://www.themoviedb.org/t/p/w440_and_h660_face'

      document.body.style.background = `url(${url + item.backdrop_path}) top center`
      document.body.style.backgroundSize = 'cover'

      return () => {
        document.body.style.background = `#FFF`
      }
    }
  }, [item])

  if (!item) return 'Loading...'

  return (
    <div className="movie-detail-page-container">
      <div className="backdrop"/>
      <div className="front-side">
        <div className="movie-item-picture">
          <img src={'https://www.themoviedb.org/t/p/w440_and_h660_face/' + item.poster_path} alt={item.title || item.name}
               height={500}/>
        </div>
        <div className="movie-item-info">
          <h2>{item.title || item.name}</h2>
          <p>{item.release_date || item.first_air_date}</p>
          <span>{item.vote_average * 10}%</span>
          <h3>Overview</h3>
          <p>{item.overview}</p>
        </div>
      </div>
    </div>
  );
}
