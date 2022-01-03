import {NavLink} from "react-router-dom";

import './style.scss';

export const Movies = ({title, items}) => {
  return (
    <div className="movies-container">
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <NavLink to={"/detail/" + item.id + (item.name ? '?tv' : '')}>
              <div className="movie-item-picture">
                <img src={'https://www.themoviedb.org/t/p/w440_and_h660_face/' + item.poster_path} alt={item.title || item.name}
                     height={300}/>
                <span>{item.vote_average * 10}%</span>
              </div>
              <div className="movies-container__item-info">
                <h3>{item.title || item.name}</h3>
                <p>{item.release_date || item.first_air_date}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
