import { Link } from 'react-router-dom';
import * as ROUTES from './routes';

const NoUsersLeft = (props) => {
  return (
    <div className='no-users-left-container whitespace-pre-line flex flex-col'>
      <div className="no-more-text my-1">
        That's all for everyone who fits your prefernces. <br/>
        Check back later to see new people or update your preferences.
      </div>
      <button className='bg-fuchsia-800 text-white font-semibold rounded-md px-2 py-1 my-1'><Link to={ROUTES.PREF} className='bg-fuchsia-800'>Update Preferences</Link></button>
    </div>
  )
};

export default NoUsersLeft;