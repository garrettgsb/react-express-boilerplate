import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MeetupsContext } from '../../MeetupsContext.jsx'
import { CheckedContext }from './CheckedContext.jsx'
import { authContext } from '../../AuthProvider'

function SafetySend () {

  const contextCheck = useContext(CheckedContext);
  const context = useContext(MeetupsContext);
  const [ name, setName ] = useState('');
  const { user } = useContext(authContext);

  const [attendees, setAttendees] = useState([
    {
      id: 1,
      name: "Alice Anderson"
    },
    {
      id: 2,
      name: "Betty Boop"
    },
    {
      id: 3,
      name: "Charlie Chapman"
    },
  ])
  

  const [text, setText] = useState({
      recipient: '',
      textmessage: `From ${user.name}: \n I will be meeting with some new people on: \n ${context.meetup.date} at ${context.meetup.time} \n to take photos of northern lights. I expect to return home around 1am. I am sending this to you as a safety precaution.`
      // textmessage: `From ${user.name}: \n I will be meeting with ${attendees} (some new people) on: \n ${context.meetup.date} at ${context.meetup.time} \n to take photos of northern lights. I expect to return home around 1am. I am sending this to you as a safety precaution.`
  });

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

  const classes = useStyles();

 
    
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
