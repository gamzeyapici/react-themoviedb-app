import './style.scss';
import {NavLink} from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-container">
      <NavLink to="/" className="logo">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="" height={20}/>
      </NavLink>
    </header>
  );
}
