import {useEffect} from 'react';

const SelectPreferenceItem = (props) => {

  const onCheckHandler = (id) => {
    const newValue = {
      [props.currentOpen.name]: Number(id)
    };

    const timed = setTimeout(() => {
      props.newPrefBuilder(newValue);
    }, 200);

    return timed;
    };

    useEffect(() => {
      return () => {
        clearTimeout(onCheckHandler);
      }
  });


  if (!props.editView) {
    return (
      <div className='bg-white flex w-full justify-between my-2'>
  
        <div className='bg-white text-gray-900'>
          {props.defaultValue === 'Not sure yet'
            ? 'See where it goes'
            : props.defaultValue}
        </div>
  
        <input 
          type="radio" 
          checked={
            props.currentOpen.currentVal === props.id ? props.currentOpen.currentVal : null
          } 
          value={props.id} 
          onChange={(e) => onCheckHandler(e.target.value)}/>
      </div>
    );
  };

  if (props.editView) {
    const newProfileHelper = (id, value) => {
      const dbColumnName = 
        props.name === 'drinks' ? 'drink_id' 
        : props.name === 'exercises' ? 'exercise_id'
        : props.name === 'goal' ? 'dating_goal_id'
        : '';
      const newValues = {
        [props.name]: value,
        [dbColumnName]: id
      };
      props.setNewProfile({...props.newProfile, ...newValues});
    };

    return (
      <div className='bg-white flex w-full justify-between my-2'>
  
        <div className='bg-white text-gray-900'>
          {props.defaultValue}
        </div>
  
        <input 
          type="radio" 
          checked={props.defaultValue === props.currentValue} 
          value={props.id} 
          onChange={(e) => newProfileHelper(e.target.value, props.defaultValue)}/>
      </div>
    );
  };

};

export default SelectPreferenceItem;