// import useEntryData from '../../hooks/useEntryData';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


export default function PrivacySetting() {

  let val = true;
  // const { privacyData } = useEntryData();
  const handleChange = () => {
    console.log("switch");
    val ? val = false : val = true;
  }

  return (
    <FormControlLabel
        control={<Switch  checked={val} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
  )
} 
