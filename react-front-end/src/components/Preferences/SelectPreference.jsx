import {useState, useEffect} from 'react';
import SelectPreferenceItem from './SelectPreferenceItem';
import MultiRangeSlider from "multi-range-slider-react";

const SelectPreference = (props) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let loading = true;

    if (props.editView) {
      const categoryName = props.name === 'goal' ? 'dating_goals' : props.name;
      const optionList = props.prefOptions[categoryName];
      setOptions([...props.prefOptions[categoryName]]);
    } else {
      const categoryName = props.currentOpen.name;
      const optionList = props.prefOptions[categoryName];
      if (Array.isArray(optionList)) {
        setOptions([...props.prefOptions[categoryName]]);
      }
    };

    return () => {
      loading = false;
    };
  }, [loading]);

  // For radio options
  const newPrefBuilder = (newValue) => {
    props.prefBuilder(newValue);
    props.setOpen(false);
  };

  // inputs
  const inputPrefBuilder = (newValue) => {
    props.setNewPref({...props.newPref, location: newValue});
  }

  // range input
  const handleAgeInput = (e) => {
    console.log('age input');
    props.setNewPref({...props.newPref, min_age: e.minValue, max_age: e.maxValue});
  };

  // range input
  const handleHeightInput = (e) => {
    console.log('height input');
    props.setNewPref({...props.newPref, min_height_in_cm: e.minValue, max_height_in_cm: e.maxValue});
  };

  // For selectable options when updating your profile
  if (props.editView) {
    const mappedList = options?.map((options) => {
      return (
        <SelectPreferenceItem 
          id={options.id}
          defaultValue={options.value}
          name={props.name}
          currentValue={props.currentValue}
          editView={props.editView}
          setNewProfile={props.setNewProfile}
          newProfile={props.newProfile}
        />
      )
    });

    return (
      <div className='bg-white flex flex-col text-sm text-gray-900/70 px-4'>
        <div className='bg-white mb-2'>
          Select who you'd like to see
        </div>
        {mappedList}
      </div>
    )
  }


  // Render pref settings where they have their own ref table in db
  if (options.length > 0 && !props.editView) {
    const mappedList = options?.map((options) => {
      return (
        <SelectPreferenceItem 
          key={options.id}
          id={options.id}
          defaultValue={options.value}
          newPrefBuilder={newPrefBuilder}
          currentOpen={props.currentOpen}
        />
      )
    });
    
    return (
      <div className='bg-white flex flex-col text-sm text-gray-900/70 px-2'>
      <div className='bg-white mb-2'>
        Select who you'd like to see
      </div>
        {mappedList}
      </div>
    )
  };

  // location pref setting
  if (options.length < 1 && props.currentOpen.name === 'location' && !props.editView) {
    return (
      <div className='bg-white flex flex-col w-full justify-between my-2'>
        <div className='bg-white text-gray-900/70 my-1'>
          Set a location preference
        </div>
        <div className='bg-whtie my-3'>
          <input 
            onChange={(e) => props.setNewPref({...props.newPref, location: e.target.value})}
            placeholder={props.newPref.location} 
            type="text" 
            className='px-1 bg-white text-lg h-[50px] border-2 border-gray-300 rounded-md w-full' />
        </div>

      </div>
    )
  };

  // age pref settings
  if (options.length < 1 && props.currentOpen.name === 'min_age' && !props.editView) {
    return (
      <div className='bg-white flex flex-col w-full justify-between my-2'>
        <div className='bg-white text-gray-900/70 my-1'>
          Set an age range for your matches
        </div>
        <div className='bg-whtie my-3'>
        <MultiRangeSlider
          min={18}
          max={99}
          step={5}
          ruler={false}
          label={true}
          preventWheel={false}
          minValue={props.newPref.min_age}
          maxValue={props.newPref.max_age}
          onInput={(e) => {
            handleAgeInput(e);
          }}
          />
        </div>
      </div>
    )
  };

  // height pref settings
  if (options.length < 1 && props.currentOpen.name === 'min_height_in_cm' && !props.editView) {
    return (
      <div className='bg-white flex flex-col w-full justify-between my-2'>
        <div className='bg-white text-gray-900/70 my-1'>
          Set a height range for your matches
        </div>
        <div className='bg-whtie my-3'>
        <MultiRangeSlider
          min={150}
          max={275}
          step={5}
          ruler={false}
          label={true}
          preventWheel={false}
          minValue={props.newPref.min_height_in_cm}
          maxValue={props.newPref.max_height_in_cm}
          onInput={(e) => {
            handleHeightInput(e);
          }}
          />
        </div>
      </div>
    )
  }

  else {
    return (
      <div>is this the error?</div>
    )
  }
};

export default SelectPreference;