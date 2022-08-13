import { UserIcon, CakeIcon, MapIcon, BriefcaseIcon, AcademicCapIcon, BeakerIcon, SearchIcon, ChartBarIcon, ChevronLeftIcon, ChevronRightIcon, CheckIcon, RefreshIcon, PencilIcon } from '@heroicons/react/outline';
import {useState} from 'react';
import ImageReplacer from './ImageReplacer';
import PreferenceBox from './Preferences/PreferenceBox';
import SelectPreference from './Preferences/SelectPreference';
import SelectPreferenceItem from './Preferences/SelectPreferenceItem';

const UserCard = (props) => {
  const [pager, setPager] = useState(0);
  const [profileHistory, setProfileHistory] = useState({...props.currentProfile});
  const [newProfile, setNewProfile] = useState({...props.currentProfile});
  const [editView, setEditView] = useState(props.editMode);
  const [editSelectable, setEditSelectable] = useState({
    open: false
  });

  // Helper function to capitalize first letter of user-more-info content
  const formatText = (text) => {
    const newText = text?.toLowerCase()?.split('')?.map((letter, index) => {
      if (index === 0) {
        return letter.toUpperCase();
      } else {
        return letter;
      }
    }).join('');

    return newText;
  };

  // Helper function to get imperial units for height
  const cmToFeet = (height) => {
    const toImperial = height / 30.48;
    const result = Math.round(toImperial * 10) / 10;
    return result.toString().split('').map((char) => {
      if (char === '.') {
        return '\'';
      } else {
        return char;
      }
    }).join('');
  };  

  // Helper to navigate photos
  const handlePager = (direction) => {
    if (direction === 'prev' && pager !== 0) {
      setPager(prev => prev - 1)
    } else if (direction === 'next' && pager !== props.photos.length - 1) {
      setPager(prev => prev + 1);
    }
  };

  // Helper to undo changes
  const undoChanges = () => {
    console.log('undo clicked, go back to old values', profileHistory)
  };

  // Helper to update your profile
  const profileUpdater = () => {
    props.updateProfile(newProfile);
  };

  // user profile edit html
  const profileView = (
    <div className='bg-white sticky top-0 w-full flex flex-row justify-between items-center p-1 z-50 border-b border-gray-300'>
      { !editSelectable.open 
      ? <>
        <button><RefreshIcon className='bg-white h-5 w-5 text-black hover:text-fuchsia-800'/></button>
        <button onClick={() => setEditView(false)} className='hover:text-fuchsia-800 bg-white '>View</button>
        <button onClick={() => setEditView(true)} className='hover:text-fuchsia-800 bg-white '>Edit</button>
        <button onClick={profileUpdater}><CheckIcon className='bg-white h-5 w-5 text-black hover:text-fuchsia-800'/></button>
        </>
      :
        <div className='bg-white px-4 py-2 font-semibold'>
          {editSelectable.name === 'drinks'
            ? 'I drink ...'
            : editSelectable.name === 'exercises'
            ? 'I exercise ...'
            : editSelectable.name === 'goal'
            ? 'My dating goal is ...'
            : ''
          }
        </div>
      }
      
    </div>
  );

  // Mapping over images for edit mode
  const imgReplaceMap = newProfile.photos?.map((photo, index) => {
    return (
      <ImageReplacer 
        key={index}
        index={index}
        url={photo.url}
        newProfile={newProfile}
        photos={newProfile.photos}
        setNewProfile={setNewProfile}
      />
    );
  });


  // Helper for selectable options for editing profile
  const selectableHelper = (currentValues) => {
    if (!currentValues.open) {
      console.log('moving up', currentValues);
      setEditSelectable({...editSelectable, open: true, ...currentValues});
    } else {
      setEditSelectable({open: false});
    }
  };

  // reusing and rendering PreferenceBox comp for selecting options for editing profile
  const profileKeys = Object.keys(newProfile);
  const filteredSelectables = profileKeys
    .filter((keyName) => {
      if (keyName === 'drinks' || keyName === 'exercises' || keyName === 'goal') {
        return keyName;
      }
    })
    .map((key, index) => {
      return (
        <PreferenceBox 
          key={index}
          name={key}
          currentValue={newProfile[key]}
          editView={editView}
          selectableHelper={selectableHelper}
        />
      )
  });

  if (editView) {
    return (
      <article className="bg-white user-profile flex flex-col user-card relative h-full" id={props.id}>

      {props.profile ? profileView : <></>}
      
      { !editSelectable.open 
        ? 
          <div className="bg-white user-edit-info p-5">
            <div className="bg-white disabled-info mt-7">
              <div className='bg-white'>
                <span className="bg-white name text-4xl font-bold">{props.name}</span>
                <span className="bg-white age text-3xl font-semibold ml-5">{props.age}</span>
              </div>
              <div className="bg-white mt-3">
                <span className="bg-white age text-lg font-regular">{props.gender}</span>
                <span className="bg-white age text-lg font-regular ml-5">{`${cmToFeet(props.height)}`} / {props.height}cm</span>
              </div>
            </div>

            <div className="bg-white h-5 mb-5 border-b-2 border-gray-300 text-2xl text-center">
            </div>

            {imgReplaceMap}

            <div className="bg-white h-1 border-b-2 border-gray-300 text-2xl text-center my-5">
            </div>

            <div className='bg-white flex items-center my-3'><PencilIcon className="h-5 w-5 text-black mr-1" /><span className="bg-white text-lg font-semibold">Bio</span></div>
            <textarea value={newProfile.bio} onChange={(e) => setNewProfile({...newProfile, bio: e.target.value})} className="bg-white user-bio resize-none w-full h-56 border border-gray-900 rounded-lg p-2">{newProfile.bio}</textarea>

            <div className='bg-white flex items-center my-3'><MapIcon className="h-5 w-5 text-black mr-1" /><span className="bg-white text-lg font-semibold">Location</span></div>
            <textarea value={newProfile.location} onChange={(e) => setNewProfile({...newProfile, location: e.target.value})} className="bg-white user-bio resize-none w-full h-11 border border-gray-900 rounded-lg p-2">{newProfile.location}</textarea>

            <div className='bg-white flex items-center my-3'><AcademicCapIcon className="h-5 w-5 text-black mr-1" /><span className="bg-white text-lg font-semibold">Education</span></div>
            <textarea value={newProfile.education} onChange={(e) => setNewProfile({...newProfile, education: e.target.value})} className="bg-white user-bio resize-none w-full h-11 border border-gray-900 rounded-lg p-2">{newProfile.education}</textarea>

            <div className='bg-white flex items-center my-3'><BriefcaseIcon className="bg-white h-5 w-5 text-black mr-1" /><span className="text-lg font-semibold">Job</span></div>
            <textarea value={newProfile.occupation} onChange={(e) => setNewProfile({...newProfile, occupation: e.target.value})} className="bg-white user-bio resize-none w-full h-11 border border-gray-900 rounded-lg p-2">{newProfile.occupation}</textarea>

            {filteredSelectables}
            
          </div>
        : 
          <div className='bg-white p-2' onClick={() => selectableHelper({open: false})}>
            <SelectPreference 
              name={editSelectable.name}
              currentValue={editSelectable.currentVal}
              prefOptions={props.prefOptions}
              editView={editView}
              setNewProfile={setNewProfile}
              newProfile={newProfile}
            />
          </div>
      }
      </article>
    )
  }

  return (
    <article className="bg-white user-profile flex flex-col user-card w-full relative" id={props.id}>
      {props.profile ? profileView : <></>}
      <div className="bg-white user-photos-container rounded-t-xl h-3/4">
        <img src={props.profile ? newProfile.photos[pager].url : props.photos[pager].url} alt="" className='h-[600px]'/>
      </div>
      <div className="h-3/4 flex flex-row justify-between fixed left-0 bg-transparent hover:bg-white/25">
        <button onClick={() => handlePager('prev')}><ChevronLeftIcon className='h-5 w-5 bg-transparent text-white'/></button>
      </div>
      <div className="h-3/4 flex flex-row justify-between fixed right-0 bg-transparent hover:bg-white/25">
        <button onClick={() => handlePager('next')}><ChevronRightIcon className='h-5 w-5 bg-transparent text-white'/></button>
      </div>

      <div className="bg-white user-info p-5">
        <div className="bg-white user-basic-info">
          <div className="bg-white location mb-3">{props.profile ? newProfile.location : props.location}</div>
          <span className="bg-white name text-4xl font-bold">{props.name}</span>
          <span className="bg-white age text-3xl font-semibold ml-5">{props.age}</span>
        </div>  

        <div className="bg-white h-5 border-b-2 border-gray-300 text-2xl text-center mt-1 mb-5">
        </div>

        <div className="bg-white user-bio">{props.profile ? newProfile.bio : props.bio}</div>
        
        <div className="bg-white h-5 border-b-2 border-gray-300 text-2xl text-center mt-1 mb-5">
        </div>

        <div className="bg-white more-info-carousel grid grid-cols-2 my-2 gap-2">
          <div className="bg-white gender flex align-center items-center"><UserIcon className="h-5 w-5 mr-2" />{formatText(props.gender)}</div>
          <div className="bg-white age flex align-center items-center"><CakeIcon className="bg-white h-5 w-5 mr-2" />{props.age}</div>
          <div className="bg-white age flex align-center items-center"><MapIcon className="bg-white h-5 w-5 mr-2" />{props.profile ? newProfile.location : props.location}</div>
          <div className="bg-white job flex align-center items-center"><BriefcaseIcon className="bg-white h-5 w-5 mr-2" />{formatText(props.profile ? newProfile.occupation : props.occupation)}</div>
          <div className="bg-white edu flex align-center items-center"><AcademicCapIcon className="bg-white h-5 w-5 mr-2" />{formatText(props.profile ? newProfile.education : props.education)}</div>
          <div className="bg-white height flex align-center items-center"><ChartBarIcon className="bg-white h-5 w-5 mr-2" />{`${cmToFeet(props.height)}`} / {props.height}cm</div>
          <div className="bg-white drinks flex align-center items-center"><BeakerIcon className="bg-white h-5 w-5 mr-2" />{formatText(props.profile ? newProfile.drinks : props.drinks)}</div>
          <div className="bg-white exercises flex align-center items-center"><img src="https://www.svgrepo.com/show/362452/barbell-bold.svg" className='bg-white h-5 w-5 mr-2' alt="" />{props.profile ? newProfile.exercises : props.exercises}</div>
          <div className="bg-white goal flex align-center items-center"><SearchIcon className="bg-white h-5 w-5 mr-2" />{formatText(props.profile ? newProfile.goal : props.goal)}</div>
        </div>

      </div>
    </article>
  );
};

export default UserCard;