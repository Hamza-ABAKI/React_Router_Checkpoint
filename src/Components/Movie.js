import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Movie({ movie }) {
  const { id, image, title, rating } = movie
  return (
    <div className='movie'>
      <Card className='movie-card'>
        <Card.Img
          style={{ width: '15rem', height: '22rem' }}
          variant='top'
          src={image}
        />

        <div className='overview'>
          <Card.Title style={{ fontSize: '1.25rem', color: 'honeydew' }}>
            {title}
          </Card.Title>
          <div style={{ display: 'flex', margin: '10px 0px' }}>
            <Rating rating={rating} />
          </div>

          {/* <Link
            to={{
              pathname: `/DescripTrailer/${id}`,
              mov: {
                image: image,
                title: title,
                rating: rating,
                descrip: descrip,
                trailer: trailer,
              },
            }}
          > */}
          <Link to={`/DescripTrailer/${id}`}>
            <Button variant='info'>More Details</Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default Movie
