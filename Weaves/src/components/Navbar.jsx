import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <AppBar color='error'>
                
                <Toolbar>
                    <Typography variant="h5" >Weaves</Typography>
                    &nbsp;&nbsp;
                    <Link to='/h'>
                        <Button variant='contained' color='warning'>Home</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Link to='/a'>
                        <Button variant='contained' color='warning'>Add</Button>
                    </Link>&nbsp;&nbsp;
                </Toolbar>
            </AppBar>
            <br /><br />
        </div>
  )
}
   
export default Navbar