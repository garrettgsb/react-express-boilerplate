import React from 'react'
import {Dialog, DialogTitle, DialogContent, Button} from '@material-ui/core';

export default function Popup(props) {
  const { children, openPopup, setOpenPopup} = props;

  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div>
          <Button 
            className="popup-close" 
            color="secondary" 
            onClick = {() => setOpenPopup(false)}>X</Button>
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}