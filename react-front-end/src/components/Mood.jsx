import { makeStyles } from '@material-ui/core/styles';
import useEntryData from '../hooks/useEntryData'

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

export default function Mood() {
  const classes = useStyles();
  const stylingContainer = {display:'flex', flexDirection: 'row', 'list-style': 'none'}

  const { moodData } = useEntryData();

  const emojiArr = [angry, unhappy, neutral, mild, smiley];
  const emojiList = emojiArr.map((item, index) => {  
    return (
      <li 
      key={index}  
      onClick={event => moodData((index + 1))}>
        <img src={item} alt={item.toString()}/>
        </li>
    )})

  return (
    <Box className={classes.root}>
      <ol style={stylingContainer}>
        {emojiList}
      </ol>
    </Box>
    
  )
}

