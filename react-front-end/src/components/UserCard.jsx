import { UserIcon, CakeIcon, MapIcon, BriefcaseIcon, AcademicCapIcon, BeakerIcon, SearchIcon, ChartBarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import {useState} from 'react';

const UserCard = (props) => {
  const [pager, setPager] = useState(0);

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

  return (
    <article className="user-profile flex flex-col user-card w-full drop-shadow-2xl h-full rounded-xl overflow-y-scroll" id={props.id}>
      <div className="user-photos-container rounded-t-xl h-3/4">
        <img src={props.photos[pager]} alt=""/>
      </div>
      <div className="h-3/4 flex flex-row justify-between fixed left-0 bg-transparent hover:bg-white/25">
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

        {/* <div className="user-bio">{props.bio}</div> */}
        <div className="user-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste autem sapiente vero voluptatibus magni odio optio repudiandae at laboriosam, quibusdam provident iusto unde. Ad ipsam quas incidunt a nihil, consequuntur totam eos maxime? Similique amet adipisci accusamus blanditiis. Possimus enim suscipit nostrum placeat dicta impedit reprehenderit harum porro nam.</div>

        <div className="h-5 border-b-2 border-gray-300 text-2xl text-center mt-1 mb-5">
        </div>

        <div className="more-info-carousel grid grid-cols-2 my-2 gap-2">
          <div className="gender flex align-center"><UserIcon className="h-5 w-5 mr-2" />{formatText(props.gender)}</div>
          <div className="age flex"><CakeIcon className="h-5 w-5 mr-2" />{props.age}</div>
          <div className="job flex"><BriefcaseIcon className="h-5 w-5 mr-2" />{formatText(props.occupation)}</div>
          <div className="edu flex"><AcademicCapIcon className="h-5 w-5 mr-2" />{formatText(props.education)}</div>
          <div className="height flex"><ChartBarIcon className="h-5 w-5 mr-2" />{`${cmToFeet(props.height)}`} / {props.height}cm</div>
          <div className="drinks flex"><BeakerIcon className="h-5 w-5 mr-2" />{formatText(props.drinks)}</div>
          {/* <div className="exercises flex">{props.exercises}</div> */}
          <div className="goal flex"><SearchIcon className="h-5 w-5 mr-2" />{formatText(props.goal)}</div>
        </div>

      </div>
    </article>
  );
};

export default UserCard;