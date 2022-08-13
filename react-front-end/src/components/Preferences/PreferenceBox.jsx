import {RefreshIcon, CheckIcon, ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/outline';

const PreferenceBox = (props) => {

  const selectOption = () => {
    if (props.editView) {
      const currentVals = {
        name: props.name,
        currentVal: props.currentValue
      };
      props.selectableHelper(currentVals);
    } else {
      const openPref = {
        name: props.name,
        currentVal: props.currentVal
      };
      props.currentOpenHelper(openPref);
    }
  };

  if (props.editView) {
    return (
      <div className='flex items-center bg-white justify-between my-3' onClick={selectOption}>
        <div>
          <div className="preference-name bg-white font-semibold">
            { props.name === 'drinks'
              ? 'I drink ...'
              : props.name === 'exercises'
              ? 'I exercise ...'
              : props.name === 'goal'
              ? 'My dating goal is ...' 
              : ''
            }
          </div>
          <div className="preference-current-val bg-white text-sm font-light text-gray-900/70">
            {props.currentValue}
          </div>
        </div>
        <ChevronRightIcon className='bg-white w-5 h-5 text-gray-900' />
      </div>
    );
  };

  if (!props.editView) {
    return (
      <div className='cursor-pointer flex items-center bg-white justify-between my-3' onClick={selectOption}>
        <div>
          <div className="preference-name bg-white font-semibold">
            {
              props.name === 'genders'
              ? 'I want to meet...'
              : props.name === 'location'
              ? 'Living in...'
              : props.name === 'drinks'
              ? 'Someone who drinks...'
              : props.name === 'exercises'
              ? 'Someone who exercises...'
              : props.name === 'dating_goals'
              ? 'Looking for...'
              : props.name === 'min_age'
              ? 'Between the ages of...'
              : props.name === 'min_height_in_cm'
              ? 'Someone who\'s around...'
              : ''
            }
          </div>
          <div className="preference-current-val bg-white text-sm font-light text-gray-900/70">
            {props.prefOptions[props.name] 
              ? props.prefOptions[props.name][props.currentVal - 1].value 
              : props.name === 'location'
              ? props.newPref.location
              : props.name === 'min_age' 
              ? `${props.newPref.min_age} ~ ${props.newPref.max_age} years old`
              : props.name === 'min_height_in_cm'
              ? `${props.newPref.min_height_in_cm} ~ ${props.newPref.max_height_in_cm} cm`
              : ''
            }
          </div>
        </div>
        <ChevronRightIcon className='bg-white w-5 h-5 text-gray-900' />
      </div>
    );
  };
 
};

export default PreferenceBox;