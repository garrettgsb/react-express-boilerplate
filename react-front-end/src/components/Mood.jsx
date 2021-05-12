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

  const stylingContainer = {display:'flex', flexDirection: 'row', 'list-style': 'none'}

  return (
    <Box className={classes.root}>
      <ul style={stylingContainer}
        onClick={event => event.target}>
        <li><img src={smiley} alt="smiley"/></li>
        <li><img src={mild} alt="mildly_happy"/></li>
        <li><img src={neutral} alt="neutral"/></li>
        <li><img src={unhappy} alt="unhappy"/></li>
        <li><img src={angry} alt="angry"/></li>
      </ul>
    </Box>
    
  )
}

export default Mood;