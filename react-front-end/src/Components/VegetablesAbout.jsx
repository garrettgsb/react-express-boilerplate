import React from 'react';
// import ReactCardFlip from 'react-card-flip';
// import { makeStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';
import 'VegetablesAbout.scss';

// const images = [
//   {
//     url: 'basil.png',
//     title: 'Basil',
//     width: '30%',
//   },
//   {
//     url: 'Beets.png',
//     title: 'Beets',
//     width: '30%',
//   },
//   {
//     url: 'cabbage.png',
//     title: 'Cabbage',
//     width: '30%',
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: '10%',
//     marginLeft: '8%',
//     display: 'flex',
//     flexWrap: 'wrap',
//     minWidth: 300,
//     width: '100%',
//   },
//   image: {
//     position: 'relative',
//     height: 200,
//     [theme.breakpoints.down('xs')]: {
//       width: '100% !important', // Overrides inline-style
//       height: 100,
//     },
//     '&:hover, &$focusVisible': {
//       zIndex: 1,
//       '& $imageBackdrop': {
//         opacity: 0.15,
//       },
//       '& $imageMarked': {
//         opacity: 0,
//       },
//       '& $imageTitle': {
//         border: '4px solid currentColor',
//       },
//     },
//   },
//   focusVisible: {},
//   imageButton: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: theme.palette.common.white,
//   },
//   imageSrc: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center 40%',
//   },
//   imageBackdrop: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: theme.palette.common.black,
//     opacity: 0.4,
//     transition: theme.transitions.create('opacity'),
//   },
//   imageTitle: {
//     position: 'relative',
//     padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
//   },
//   imageMarked: {
//     height: 3,
//     width: 18,
//     backgroundColor: theme.palette.common.white,
//     position: 'absolute',
//     bottom: -2,
//     left: 'calc(50% - 9px)',
//     transition: theme.transitions.create('opacity'),
//   }
// }));

// export default function Vegetables() {
//   const classes = useStyles();

//   return (
//     <div >
//       {images.map((image) => (
//         <ButtonBase
//           focusRipple
//           key={image.title}
//           className={classes.image}
//           focusVisibleClassName={classes.focusVisible}
//           style={{ width: image.width }}
//         >
//           <img src={'images/vegetables/basil.png'} alt={''} style={{width:'300px'}, {height: '200px'}}>
//           </img>

//           <span className={classes.imageBackdrop} />
//           <span className={classes.imageButton}>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               className={classes.imageTitle}
//             >
//               {image.title}
//               <span className={classes.imageMarked} />
//             </Typography>
//           </span>
//         </ButtonBase>
//       ))}
//     </div>
//   );
// }


export default function VegetablesAbout() {

  return (
 
      <div className="flipCard">
        <div className="flipCardInner">
          <div className="flipCardFront">
            <img src={'images/vegetables/basil.png'} alt={'image'} style={{ width: '300px' }, { height: '300px' }}>
            </img>
          </div>
          <div className="flipCardBack">
            <h2>Basil</h2>
            <p>Grow me!</p>
          </div>
        </div>
      </div>
    
  )
}