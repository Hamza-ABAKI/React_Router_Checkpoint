import React, { useState } from 'react'
import Modal from 'react-modal'
import { Button } from 'react-bootstrap'
import ReactPlayer from 'react-player/youtube'
import './DescripTrailer.css'
import StarRatings from 'react-star-ratings'

import { Link, useParams } from 'react-router-dom'

Modal.setAppElement('#root')
const DescripTrailer = ({ movies }) => {
  const { id } = useParams()
  const movie = movies.filter((mov) => mov.id === id)[0]

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className='desTrai'>
      <Link to='/'>
        <button class='homeBtn'>
          <i class='fas fa-home fa-lg'></i>
        </button>
      </Link>

      <div className='movieInfo'>
        <img src={movie.image} alt='' />

        <div className='movieDetails'>
          <h2>{movie.title}</h2>

          <div className='ratingSatrs'>
            <StarRatings
              rating={movie.rating}
              starRatedColor='#F9AB21'
              numberOfStars={5}
              starDimension='40px'
              starSpacing='5px'
              name='rating'
            />
          </div>

          <h3>Description</h3>
          <h4>{movie.descrip}</h4>

          <Button
            className='trailerBtn'
            variant='primary'
            onClick={() => setModalIsOpen(true)}
          >
            Watch Trailer
          </Button>
          <Modal
            className='trailerContainer'
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={{ overlay: { backgroundColor: '#1d1c1ce6' } }}
          >
            <div className='vid'>
              <ReactPlayer
                width={720}
                height={480}
                controls={true}
                url={movie.trailer}
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default DescripTrailer
