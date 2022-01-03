import {useEffect, useState} from 'react';
import {SearchContainer} from "components/SearchContainer";
import {Movies} from "components/Movies";
import {ToggleMovieTv} from "components/ToggleMovieTv";
import {getFreeToWatchItems} from "services";

import './style.scss';

export const Home = () => {
  const [freeWatchItems, setFreeWatchItems] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  const onLoadItems = (value) => {
    setSearchResult(value)
  };

  const onClickToggle = (type) => {
    getFreeToWatchItems(type).then(res => {
      setFreeWatchItems(res.data.results)
    });
  };

  useEffect(() => {
    getFreeToWatchItems().then(res => {
      setFreeWatchItems(res.data.results)
    });
  }, [])

  return (
      <div className="home-page-container">
        <SearchContainer onLoadItems={onLoadItems} />
        {searchResult && <Movies title={<span>'{searchResult.query}' results:</span>} items={searchResult.items}/>}
        <Movies title={<div>Free To Watch <ToggleMovieTv onClick={onClickToggle} /></div>} items={freeWatchItems}/>
      </div>
  );
}
