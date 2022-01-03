import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Header} from "layouts/Header";

// Pages
import {Home} from "pages/Home";
import {MovieDetail} from "pages/MovieDetail";

import './style.scss';

export const App = () => {
  return (
    <Router>
      <div className="app-container">
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<MovieDetail />} />
          </Routes>
      </div>
    </Router>
  );
}
