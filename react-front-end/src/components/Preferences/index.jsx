import PreferenceBox from './PreferenceBox';
import Select from './SelectPreference';
import {RefreshIcon, CheckIcon, ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/outline';
import { useState, useEffect } from 'react';
import SelectPreference from './SelectPreference';


const Preferences = (props) => {
  const [currentOpen, setCurrentOpen] = useState({});
  const [oldPref, setOldPref] = useState({...props.prefs});
  const [newPref, setNewPref] = useState({...props.prefs});
  const [open, setOpen] = useState(false);

  // Helper to allow toggling and render diff things
  const currentOpenHelper = (newOpen) => {
    setCurrentOpen({...newOpen});
    setOpen(true)
  };

  // helper to update newPref state to build new settings
  const prefBuilder = (newValue) => {
    setNewPref({...newPref, ...newValue});
  };

  // Takes newPref built to send post request
  const updatePref = () => {
    setCurrentOpen({});
    props.updatePreferences(newPref);
  };

  const prefs = Object.keys(props.prefs);
  const prefBoxes = prefs?.filter(name => name !== 'max_age' && name !==  'max_height_in_cm')
    .map((pref, index) => {
      return (
        <PreferenceBox    
          key={index}
          currentOpenHelper={currentOpenHelper}
          newPref={newPref}
          prefOptions={props.prefOptions}
          name={pref}
          currentVal={newPref[pref]}
        />
      )
  });

  if (!open) {
    return (
      <div className='h-full relative preferences-container bg-white flex flex-col '>
        <div className="preferences-header bg-white font-semibold text-lg self-center p-4 rounded-t-xl border border-gray-300 w-full text-center">
          Dating Preferences
        </div>
        <div className="preferences-items py-3 px-5 bg-white flex flex-col border-l border-r border-gray-300">
          {prefBoxes}
        </div>
        <div onClick={updatePref} className="preferences-header bg-white font-semibold text-lg self-center p-4 rounded-b-xl border border-gray-300 w-full text-center cursor-pointer">
          Save
        </div>
      </div>
    )
  };

  if (open) {
    return (
      <div className='h-full relative preferences-container bg-white flex flex-col'>
        <div className="preferences-header bg-white font-semibold text-lg self-center p-4 rounded-t-xl border border-gray-300 w-full text-center flex items-center justify-start">
          <ChevronLeftIcon className='w-5 h-5 bg-white' onClick={() => setOpen(false)} />
          <div className='bg-white ml-2'>
          {
            currentOpen.name === 'genders'
            ? 'I want to meet...'
            : currentOpen.name === 'location'
            ? 'Living in...'
            : currentOpen.name === 'drinks'
            ? 'Someone who drinks...'
            : currentOpen.name === 'exercises'
            ? 'Someone who exercises...'
            : currentOpen.name === 'dating_goals'
            ? 'Looking for...'
            : currentOpen.name === 'min_age'
            ? 'Between the ages of...'
            : currentOpen.name === 'min_height_in_cm'
            ? 'Someone who\'s around...'
            : ''
          }
          </div>
          <></>
        </div>
        <div className="preferences-items py-3 px-5 bg-white flex flex-col border border-gray-300 h-full rounded-b-xl">
          <SelectPreference 
            open={open}
            currentOpen={currentOpen} 
            newPref={newPref}
            setNewPref={setNewPref} 
            prefOptions={props.prefOptions}
            setOpen={setOpen}
            prefBuilder={prefBuilder}
          />
        </div>
      </div>
    )
  };
};

export default Preferences;