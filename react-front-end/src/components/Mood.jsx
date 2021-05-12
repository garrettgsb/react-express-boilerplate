import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import smiley from '../emojis/smiley.ico';
import mild from '../emojis/mildly_happy.ico';
import neutral from '../emojis/neutral.ico';
import unhappy from '../emojis/unhappy.ico';
import angry from '../emojis/angry.ico';

const useStyles = makeStyles((theme) => ({
  root: {
    border: 0,
    borderRadius: 3,
    height: 48,
    padding: '0',
    margin: theme.spacing(1),
  }
}));

const Mood = () => {
  const classes = useStyles();

  // { setState, state } = useFormData();

  // function setMood() {
  //   const value = event.target.value;
  // setState({...state, mood: value})

  // }

  const stylingContainer = {display:'flex', flexDirection: 'row', 'list-style': 'none'}

  return (
    <Box className={classes.root}>
      <ol style={stylingContainer}
        onClick={event => console.log("you clicked a smiley ", event.target.alt)}>
        <li value="1"><img src={smiley} alt="smiley"/></li>
        <li value="2"><img src={mild} alt="mildly_happy"/></li>
        <li value="3"><img src={neutral} alt="neutral"/></li>
        <li value="4"><img src={unhappy} alt="unhappy"/></li>
        <li value="5"><img src={angry} alt="angry"/></li>
      </ol>
    </Box>
    
  )
}

export default Mood;