import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';

import { useHistory } from 'react-router-dom'

function HomeButton() {

  const history = useHistory();

const goHome = () => {
  history.push('/')
}

  return(
<Fab size="small" aria-label="add" onClick={goHome}>
  <CloseIcon />
</Fab>

  )
}

export default HomeButton