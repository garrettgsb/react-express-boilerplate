import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function SafetySend () {


  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));

  // const classes = useStyles();

  const [text, setText] = useState({
      recipient: '',
      textmessage: 'From <name>: \n I will be meeting with new people on: \n <date> at <time> \n to take photos of northern lights. I expect to return home at about <time>. I am sending this to you as a safety precaution.'
  })
    
  function sendText () {
    // pass variables in query string
    fetch(`http://localhost:8080/text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .then(() => console.log('successfully sent text'))
    .catch(err => console.log(err))
  }

  return (
    <div className='container'>
      <div className='safety-send' >
        <h2> Safety Precaution Text Message </h2>
        <br />
        <p>Your safety cannot be guaranteed when meeting with strangers. As a precaution we recommend sending your meetup details to a family member or friend.</p>
        <br />
      {/* </div> */}
    
    {/* <div className={classes.root}> */}
      <div>
        <TextField
          id="outlined-full-width"
          label="Contact Phone Number"
          style={{ margin: 8 }}
          helperText="Do not include country code with phone number"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value = {text.recipient} 
          onChange={e => setText({ ...text, recipient: e.target.value})}
        />
        <br />
        <br />
        <TextField
          id="outlined-full-width"
          label="Message"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Edit the above or create your own message"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          multiline="true"
          value={text.textmessage}
          onChange={e => setText({ ...text, textmessage: e.target.value })}
          variant="outlined"
        />
        <br />

         <button className='btn' onClick={sendText}> Send Text </button>
      </div>
    {/* </div> */}
    </div>

    </div>
  )
}

export default SafetySend;
