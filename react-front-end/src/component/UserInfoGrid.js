// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import User from "./User";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function UserInfoGrid() {
//   const classes = useStyles();

//   function FormRow() {
//     return (
//       <React.Fragment>
//         <Grid item xs={4}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={4}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={4}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//       </React.Fragment>
//     );
//   }

//   return (
//     <div className={classes.root}>
//       {/* PROFILE PIC */}
//       <Grid item xs={12} sm={6} md={4}>
//         <User />
//       </Grid>

//       {/* USER INFO */}
//       <Grid item xs={12} sm={6} md={4}>
//         <User
//           title={user.username}
//           image={artpiece.img_link}
//           description={artpiece.descrip}
//           price={artpiece.price}
//           forSale={artpiece.for_sale}
//           url={artpiece.project_link}
//         />
//       </Grid>

//       {/* ADD ARTWORK BUTTON */}
//       <Grid item xs={12} sm={6} md={4}>
//         <User
//           title={artpiece.title}
//           image={artpiece.img_link}
//           description={artpiece.descrip}
//           price={artpiece.price}
//           forSale={artpiece.for_sale}
//           url={artpiece.project_link}
//         />
//       </Grid>
//     </div>
//   );
// }
