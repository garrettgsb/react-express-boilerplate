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

  const emojiArr = [angry, unhappy, neutral, mild, smiley];
  const emojiList = emojiArr.map((item, index) => {  
    return (
      <li key={index} id={(index + 1)} onClick={event => console.log(event.currentTarget)}><img src={item} alt={item.toString()}/></li>
    )})

  return (
    <Box className={classes.root}>
      <ol style={stylingContainer}>
        {emojiList}
      </ol>
    </Box>
    
  )
}

export default Mood;