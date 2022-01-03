import {useState} from "react";

import './style.scss';

export const ToggleMovieTv = ({onClick}) => {
  const [selected, setSelected] = useState('movie');

  const onClickItem = async (type) => {
    setSelected(type)
    onClick(type)
  };

  return (
    <div className="toggle-button-container">
      <button onClick={() => onClickItem('movie')} className={selected === 'movie' ? 'selected' : undefined}>Movie</button>
      <button onClick={() => onClickItem('tv')} className={selected === 'tv' ? 'selected' : undefined}>TV</button>
    </div>
  );
}
