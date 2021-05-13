import useEntryData from '../../hooks/useEntryData';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


export default function Switch() {

  return (
    <FormControlLabel
        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
  )
} 
