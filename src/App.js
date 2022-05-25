import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/home/index'
import MovieInfo from './pages/moveinfo/index';

function App() {
  return (
    <Router>
      <Link to ="/"></Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieInfo/:id" element={<MovieInfo />} />
      </Routes>
    </Router>
    
  );

}

export default App;

/*
import React from "react";
import MovieList from "./components/movieList/index"
import { Wrapper } from "./styles";

<Wrapper>
<MovieList />
</Wrapper>
*/