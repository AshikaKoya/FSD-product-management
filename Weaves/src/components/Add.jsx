import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const navigate=useNavigate()

  // navigate
  const handleSubmit=()=>{
    navigate('/h')
  }

  return (
    <div>
      <h4 >ADD PRODUCT</h4>
      <TextField label="Title" variant="outlined" /><br /><br />
      <TextField label="Image" variant="outlined" /><br /><br />
      <TextField label="Price" variant="outlined" /><br /><br />
      <TextField label="Category" variant="outlined" /><br /><br />
      <Button variant="contained"  onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default Add