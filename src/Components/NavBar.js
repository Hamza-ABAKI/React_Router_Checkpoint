import React from 'react'
import AddMovie from './AddMovie.js'
import SearchByRating from './SearchByRating.js'

import { Form, FormControl, Navbar } from 'react-bootstrap'

function NavBar({
  setTitleSearch,
  setMovies,
  movies,
  setRateSearch,
  rateSearch,
}) {
  return (
    <div className='navBar'>
      <Navbar className='bg-light justify-content-between'>
        <Form inline className='logo'>
          <img src='./MovieIcon.png' alt='' />
          <h2>Movies</h2>
        </Form>
        <Form inline>
          <div className='search'>
            <FormControl
              type='text'
              placeholder='Enter Movie Title'
              className=' mr-sm-2'
              onChange={(e) => setTitleSearch(e.target.value)}
            />
            <SearchByRating
              setRateSearch={setRateSearch}
              rateSearch={rateSearch}
            />
          </div>
        </Form>
        <Form inline>
          <AddMovie setMovies={setMovies} movies={movies} />
        </Form>
      </Navbar>
    </div>
  )
}

export default NavBar
