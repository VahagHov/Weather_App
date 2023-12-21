import React from 'react'
import Link from '@mui/material/Link';
import { Header } from '../Header'
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';


export const Main = () => {
  return (
 <>
    <Header />

  
        <Paper className='main_backround'>
        <div className='main'>
            <Typography 
                variant='h2' 
                color= 'black' 
                fontSize= '90px'
                marginLeft= '320px'
                >
                    Web Developer
            </Typography >
            <Typography 
              variant='h5' 
              color= 'black' 
              fontSize= '30px'
              marginLeft= '440px'>
                Bring Your Dreams To Life
            </Typography>
            
            <div >
                
                <Link   href='header' 
                        underline ='hover' 
                        fontSize='30px'
                        marginLeft='480px'
                        color='red'
                >
                        Go to my first Project
                 </Link>

                
            </div>
        </div>
        </Paper>

  
</>
  )
}
