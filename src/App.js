import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import NavBar from './Components/NavBar.js'
import MovieList from './Components/MovieList.js'
import { moviesData } from './Components/MovieData'
// import SearchByRating from './Components/SearchByRating.js'

// import Home from './Components/Home'
import DescripTrailer from './Components/DescripTrailer/DescripTrailer.js'

function App() {
  const [rateSearch, setRateSearch] = useState(0)
  const [titleSearch, setTitleSearch] = useState('')
  const [movies, setMovies] = useState(moviesData)
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='App'>
            <NavBar
              setTitleSearch={setTitleSearch}
              setMovies={setMovies}
              movies={movies}
              setRateSearch={setRateSearch}
              rateSearch={rateSearch}
            />

            {/* <SearchByRating
              setRateSearch={setRateSearch}
              rateSearch={rateSearch}
            /> */}

            <MovieList
              movies={movies}
              titleSearch={titleSearch}
              rateSearch={rateSearch}
            />
          </div>
        </Route>
        <Route exact path='/DescripTrailer/:id'>
          <DescripTrailer movies={movies} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

//    // <BrowserRouter>
//    <div className='App'>
//    {/* <Router exact path='/' component={Home} />
//    <Router path='/DescripTrailer' component={DescripTrailer} /> */}
//    <DescripTrailer />
//  </div>
// {/* </BrowserRouter> */}
