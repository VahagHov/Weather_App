import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400 ,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  bgcolor: '#8FBC8F',
  
};

export default function ContactModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button color='error' onClick={handleOpen}>Contacts</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} >
          <Typography fontFamily= '"Helvetica Neue"'  id="modal-modal-title" variant="h6" component="h2">
            For cooperation
          </Typography>
          <Typography fontFamily= '"Helvetica Neue"'  id="modal-modal-description" sx={{ mt: 2 }}>
            Adress: Baghramyan 2 lane <br />
            Mobile: (+374) 55-12-12-15 <br />
            Email:  vahaghov12@gmail.com <br />
            Linkedin: <Link to='https://www.linkedin.com/in/vahagn-hovhannisyan-b826111b6/'>This is my Linkdin page</Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}