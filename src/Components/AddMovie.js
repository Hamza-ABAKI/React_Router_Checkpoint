import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Button, Modal, Form, FormControl, InputGroup } from 'react-bootstrap'

const AddMovie = ({ setMovies, movies }) => {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [image, setImage] = useState('')
  const [descrip, setDescrip] = useState('')
  const [trailer, setTrailer] = useState('')

  const handleAdd = () => {
    let newMovie = {
      id: uuidv4(),
      image,
      title,
      rating: Number(rating),
      descrip,
      trailer,
    }
    setMovies([...movies, newMovie])
    handleClose()
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        className='add-btn'
        variant='outline-secondary'
        onClick={handleShow}
      >
        Add Movie +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Adding New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='addmov'>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='Movie title'
                aria-describedby='basic-addon2'
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>

            <InputGroup className='mb-3'>
              <FormControl
                placeholder='Image url'
                aria-describedby='basic-addon2'
                onChange={(e) => setImage(e.target.value)}
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='Rating (from 1 to 5)'
                aria-describedby='basic-addon2'
                onChange={(e) => setRating(e.target.value)}
              />
            </InputGroup>

            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Control
                placeholder='Description'
                as='textarea'
                rows={7}
                onChange={(e) => setDescrip(e.target.value)}
              />
            </Form.Group>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='Youtube trailer url'
                aria-describedby='basic-addon2'
                onChange={(e) => setTrailer(e.target.value)}
              />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={handleClose}>
            Close
          </Button>
          <Button variant='success' onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddMovie
