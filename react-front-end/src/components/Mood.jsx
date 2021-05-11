import Box from '@material-ui/core/Box';
import smiley from '../emojis/smiley.ico';
import mild from '../emojis/mildly_happy.ico';
import neutral from '../emojis/neutral.ico';
import unhappy from '../emojis/unhappy.ico';
import angry from '../emojis/angry.ico';

const Mood = () => {

  const stylingContainer = {display:'flex', flexDirection: 'row', 'list-style': 'none'}

  return (
    <Box display="flex">
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