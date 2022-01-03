import {useRef, useState} from "react";
import {searchMovieByQuery} from "services";

import './style.scss';

export const SearchContainer = ({onLoadItems}) => {
  const inputRef = useRef()
  const [lastSearchItems, setLastSearchItems] = useState(localStorage.getItem('last_keywords') ? JSON.parse(localStorage.getItem('last_keywords')) : [])

  const onSubmit = async (e) => {
    e.preventDefault()

    const value = inputRef.current.value;

    const res = await searchMovieByQuery(value)

    onLoadItems({query: value, items: res.data.results})

    inputRef.current.value = ''

    let lastKeywords = localStorage.getItem('last_keywords')
    lastKeywords = JSON.parse(lastKeywords) || []
    localStorage.setItem('last_keywords', JSON.stringify([value, ...lastKeywords]))
    setLastSearchItems([value, ...lastKeywords])
  };

  return (
    <div className="search-container">
      <h1>Welcome.</h1>
      <h2>Millions of movies, TV shows and people to discover. Explore now.
      </h2>
      <form className="input-container" onSubmit={onSubmit}>
        <input ref={inputRef} placeholder="Write a movie..." />
        <button>Search</button>
        <div className="last-search-items">
          {lastSearchItems.slice(0, 3).map((item, index) => (
            <div key={index}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </form>

    </div>
  );
}
