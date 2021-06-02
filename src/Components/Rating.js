import React from 'react'

const Rating = ({ rating, color }) => {
  return (
    <>
      <span>
        <i
          style={{ color }}
          className={rating >= 1 ? 'fas fa-star' : 'far fa-star'}
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={rating >= 2 ? 'fas fa-star' : 'far fa-star'}
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={rating >= 3 ? 'fas fa-star' : 'far fa-star'}
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={rating >= 4 ? 'fas fa-star' : 'far fa-star'}
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={rating >= 5 ? 'fas fa-star' : 'far fa-star'}
        ></i>
      </span>
    </>
  )
}

Rating.defaultProps = {
  color: '#F9AB21',
}

export default Rating
