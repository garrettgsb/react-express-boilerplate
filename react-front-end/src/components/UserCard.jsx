import { UserIcon, CakeIcon, MapIcon, BriefcaseIcon, AcademicCapIcon, BeakerIcon, SearchIcon, ChartBarIcon, ChevronLeftIcon, ChevronRightIcon, CheckIcon, RefreshIcon, PencilIcon } from '@heroicons/react/outline';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import ImageReplacer from './ImageReplacer';
import SelectAspects from './SelectAspects';

const UserCard = (props) => {
  const [pager, setPager] = useState(0);
  const [profileHistory, setProfileHistory] = useState({...props.currentProfile});
  const [newProfile, setNewProfile] = useState({...props.currentProfile});
  const [editView, setEditView] = useState(props.editMode);

  // Helper function to capitalize first letter of user-more-info content
  const formatText = (text) => {
    const newText = text.toLowerCase().split('').map((letter, index) => {
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
    <div className='fixed w-full flex flex-row justify-between items-center p-1 z-50'>
      <button><RefreshIcon className='h-5 w-5 text-black hover:text-fuchsia-800'/></button>
      <button onClick={() => setEditView(false)} className='hover:text-fuchsia-800'>View</button>
      <button onClick={() => setEditView(true)} className='hover:text-fuchsia-800'>Edit</button>
      <button onClick={profileUpdater}><CheckIcon className='h-5 w-5 text-black hover:text-fuchsia-800'/></button>
    </div>
  );

  // Mapping over images for edit mode
  const imgReplaceMap = newProfile.photos?.map((photo, index) => {
    return (
      <ImageReplacer 
        key={index}
        index={index}
        url={photo.f2}
        newProfile={newProfile}
        photos={newProfile.photos}
        setNewProfile={setNewProfile}
      />
    );
  });

  if (editView) {
    return (
      <article className="user-profile flex flex-col user-card" id={props.id}>
      {props.profile ? profileView : <></>}
      
        <div className="user-edit-info p-5">
          <div className="disabled-info mt-7">
            <div>
              <span className="name text-4xl font-bold">{props.name}</span>
              <span className="age text-3xl font-semibold ml-5">{props.age}</span>
            </div>
            <div className="mt-3">
              <span className="age text-lg font-regular">{props.gender}</span>
              <span className="age text-lg font-regular ml-5">{`${cmToFeet(props.height)}`} / {props.height}cm</span>
            </div>
          </div>

          <div className="h-5 mb-5 border-b-2 border-gray-300 text-2xl text-center">
          </div>

          {imgReplaceMap}

          <div className="h-1 border-b-2 border-gray-300 text-2xl text-center my-5">
          </div>

          <div className='flex items-center my-3'><PencilIcon className="h-5 w-5 text-black mr-1" /><span className="text-lg font-semibold">Bio</span></div>
          <textarea value={newProfile.bio} onChange={(e) => setNewProfile({...newProfile, bio: e.target.value})} className="user-bio resize-none w-full h-56 border border-gray-900 rounded-lg p-2">{newProfile.bio}</textarea>

          <div className='flex items-center my-3'><MapIcon className="h-5 w-5 text-black mr-1" /><span className="text-lg font-semibold">Location</span></div>
          <textarea value={newProfile.location} onChange={(e) => setNewProfile({...newProfile, location: e.target.value})} className="user-bio resize-none w-full h-11 border border-gray-900 rounded-lg p-2">{newProfile.location}</textarea>

          <div className='flex items-center my-3'><AcademicCapIcon className="h-5 w-5 text-black mr-1" /><span className="text-lg font-semibold">Education</span></div>
          <textarea value={newProfile.education} onChange={(e) => setNewProfile({...newProfile, education: e.target.value})} className="user-bio resize-none w-full h-11 border border-gray-900 rounded-lg p-2">{newProfile.education}</textarea>

          <div className='flex items-center my-3'><BriefcaseIcon className="h-5 w-5 text-black mr-1" /><span className="text-lg font-semibold">Job</span></div>
          <textarea value={newProfile.occupation} onChange={(e) => setNewProfile({...newProfile, occupation: e.target.value})} className="user-bio resize-none w-full h-11 border border-gray-900 rounded-lg p-2">{newProfile.occupation}</textarea>
         
         <div className="more-info-carousel grid grid-cols-2 my-2 gap-2">
            <div className="drinks flex"><BeakerIcon className="h-5 w-5 mr-2" />{formatText(newProfile.drinks)}</div>
            {/* <div className="exercises flex">{props.exercises}</div> */}
            <div className="goal flex"><SearchIcon className="h-5 w-5 mr-2" />{formatText(newProfile.goal)}</div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="user-profile flex flex-col user-card w-full" id={props.id}>
      {props.profile ? profileView : <></>}
      <div className="user-photos-container rounded-t-xl h-3/4">
        <img src={props.profile ? props.photos[pager].f2 : props.photos[pager]} alt=""/>
      </div>
      <div className="h-3/4 flex flex-row justify-between absolute left-0 bg-transparent hover:bg-white/25">
        <button onClick={() => handlePager('prev')}><ChevronLeftIcon className='h-5 w-5 bg-transparent text-white'/></button>
      </div>
      <div className="h-3/4 flex flex-row justify-between fixed right-0 bg-transparent hover:bg-white/25">
        <button onClick={() => handlePager('next')}><ChevronRightIcon className='h-5 w-5 bg-transparent text-white'/></button>
      </div>

      <div className="user-info p-5">
        <div className="user-basic-info">
          <div className="location mb-3">{props.location}</div>
          <span className="name text-4xl font-bold">{props.name}</span>
          <span className="age text-3xl font-semibold ml-5">{props.age}</span>
        </div>  

        <div className="h-5 border-b-2 border-gray-300 text-2xl text-center mt-1 mb-5">
        </div>

        <div className="user-bio">{props.bio}</div>
        
        <div className="h-5 border-b-2 border-gray-300 text-2xl text-center mt-1 mb-5">
        </div>

        <div className="more-info-carousel grid grid-cols-2 my-2 gap-2">
          <div className="gender flex align-center"><UserIcon className="h-5 w-5 mr-2" />{formatText(props.gender)}</div>
          <div className="age flex"><CakeIcon className="h-5 w-5 mr-2" />{props.age}</div>
          <div className="age flex"><MapIcon className="h-5 w-5 mr-2" />{props.location}</div>
          <div className="job flex"><BriefcaseIcon className="h-5 w-5 mr-2" />{formatText(props.occupation)}</div>
          <div className="edu flex"><AcademicCapIcon className="h-5 w-5 mr-2" />{formatText(props.education)}</div>
          <div className="height flex"><ChartBarIcon className="h-5 w-5 mr-2" />{`${cmToFeet(props.height)}`} / {props.height}cm</div>
          <div className="drinks flex"><BeakerIcon className="h-5 w-5 mr-2" />{formatText(props.drinks)}</div>
          {/* <div className="exercises flex">{newProfile.exercises}</div> */}
          <div className="goal flex"><SearchIcon className="h-5 w-5 mr-2" />{formatText(props.goal)}</div>
        </div>

      </div>
    </article>
  );
};

export default UserCard;