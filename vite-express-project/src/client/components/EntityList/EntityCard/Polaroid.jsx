import { TypeIcon } from '../TypeIcon';
import { projectType, artistType } from '../../../constants/TypeSelections.js';

const polaroidStyle = {
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
};

export const Polaroid = ({
  className,
  data,
  location,
  transform,
  isArtists,
  handleMouseEnter,
  handleMouseLeave,
  elementId,
  displayName,
  handleLike,
  handleDislike,
  liked,
  showLikeButton,
  onClickCard,
  imgSrc,
  iconType,
  zIndex,
  isHovering,
  hasBack,
  hideFooter,
}) => {
  return (
    <div className={"card-inner" + (isHovering ? " flipped" : "")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.8s',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        position: 'relative',
        width: '300px',
        height: '360px',
        zIndex: isHovering ? 10 : 4,
        fontFamily: "'Kalam', cursive",
        fontSize: '1.2rem'
      }}
      onClick={onClickCard}
    >
      <div
        className={className || "card-front entity-image-wrapper w-60 h-72 rounded-md cursor-pointer"}
        id={elementId}
        style={{
          ...polaroidStyle,
          transition: 'transform 0.4s',
          transform: transform + (isHovering ? " rotateY(180deg)" : ""),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ffffff",
          paddingTop: "0.5rem",
          zIndex,
          position: "absolute",
          backfaceVisibility: "hidden"
        }}
      >
        <img
          src={imgSrc}
          alt={displayName}
          title={displayName}
          className="w-56 h-56 object-cover cursor-pointer"
        />
        {!hideFooter && (
          <footer className="flex justify-between w-full pl-4 pr-3">
            <div className="flex justify-center items-center">
              {iconType && <TypeIcon isArtists={isArtists} type={iconType} />}
            </div>
            <div className="flex flex-col truncate px-3">
              <span
                className="text-slate-950 truncate"
                style={{
                  fontFamily: "'Kalam', cursive",
                  fontSize: '1.2rem'
                }}
              >
                {displayName}
              </span>
              <span
                className="text-gray-400 truncate"
                style={{
                  fontFamily: "'Kalam', cursive",
                  fontSize: '1.2rem'
                }}
              >
                {location}
              </span>
            </div>
            <aside className="flex justify-end items-center">
              {showLikeButton && (liked
                ? <button onClick={handleDislike}>♥️</button>
                : <button onClick={handleLike}>♡</button>
              )}
              {/* <FontAwesomeIcon icon={faHeart} color={displayName.length > 12 ? 'red' : 'gray'}/> */}
            </aside>
          </footer>
        )}
      </div>
      {hasBack && (
        <div
          className={"card-back entity-image-wrapper w-60 h-72 rounded-md cursor-pointer p-2" + (isHovering ? "" : " flipped")} 
          style={{
            ...polaroidStyle,
            transition: 'transform 0.5s',
            transform: transform + (isHovering ? "" : " rotateY(180deg)"),
            backgroundColor: "#ffffff",
            zIndex: isHovering ? 10 : 5,
            position: "absolute",
            backfaceVisibility: "hidden"
          }}
        >
          <div
            className="flex flex-col justify-evenly p-4"
            style={{ width: '280px', height: '280px', backgroundColor: "#c0c0c0"
          }}>
            <div
              className="flex flex-col justify-center items-center"
            >
              {iconType && (
                <TypeIcon
                  isArtists={isArtists}
                  type={iconType}
                  size="3x"
                  color="#e91e63"
                  effect={iconType === 2 ? { shake: true } : { bounce: true}}
                />
              )}
            </div>
            <div className="text-black">
              {artistType[iconType - 1]?.name}
            </div>
            <div style={{ color: '#05AA32' }}>
              ${(data.wage / 100).toFixed(2)}/hr 
            </div>
            <div className="text-black"
              style={{ fontSize: '1rem' }}
            >
              {data.email}
            </div>
          </div>
          <div className="text-black">
            {data.name}
          </div>
          <div
            className="text-gray-400 truncate"
          >
            {data.location}
          </div>
        </div>
      )}
    </div>
  )
}