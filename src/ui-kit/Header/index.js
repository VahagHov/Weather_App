import React from 'react'
import AboutModal from '../AboutModal'
import ContactModal from '../ContactModal'
import Container from '@mui/material/Container';
import { AppBar, Toolbar, Typography } from '@mui/material';


export const Header = () => { 
    
  return (
    
    <AppBar position='fixed' >
        <Container fixed>
            <Toolbar>
                <Typography  > Developer </Typography>
                <AboutModal  />
                <ContactModal />
            </Toolbar>
          </Container> 
    </AppBar>
  )
}
