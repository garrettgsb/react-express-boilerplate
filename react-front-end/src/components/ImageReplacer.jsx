import { PhotographIcon } from '@heroicons/react/outline';

const ImageReplacer = (props) => {

  // Helper to replace image changes
  const imgReplace = (newImg, index) => {
    const newPhotos = [...props.photos];
    newPhotos[index].url = newImg;
    props.setNewProfile({...props.newProfile, photos: newPhotos});
  };

  return (
    <>
      <div className='flex items-center my-3'>
        <PhotographIcon className="h-5 w-5 text-black" />
        <input value={props.url} onChange={(e) => imgReplace(e.target.value, props.index)} className="user-bio resize-none w-full h-11 border border-gray-900 rounded-lg ml-2 p-2 overflow-hidden overflow-x-hidden" />
      </div>
    </>
  )
};

export default ImageReplacer;