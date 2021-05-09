import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 400,
    marginLeft: '10%',
    marginTop: '7%',
    display: 'flex',
    flexDirection: 'row',
    maxHeight: '300px',
    overflow: 'auto',
    // justifyContent: 'space-between'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  heads: {
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default function Maintenance() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <table >
          <thead >
            <tr >
              <th>Task</th>
              <th>Date</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>
                Water
              </td>
              <td>
              1 day
              </td>
              <td>
              <CardActions>
                <Button size="small" variant="contained" color="primary">Complete</Button>
              </CardActions>
              </td>
            </tr>
            <tr>
              <td>
                Water
              </td>
              <td>
              4 day
              </td>
              <td>
              <CardActions>
                <Button size="small" variant="contained" color="primary">Complete</Button>
              </CardActions>
              </td>
            </tr>
            <tr>
              <td>
                Fertilize
              </td>
              <td>
              4 day
              </td>
              <td>
              <CardActions>
                <Button size="small" variant="contained" color="primary">Complete</Button>
              </CardActions>
              </td>
            </tr>
            <tr>
              <td>
                Fertilize
              </td>
              <td>
              5 day
              </td>
              <td>
              <CardActions>
                <Button size="small" variant="contained" color="primary">Complete</Button>
              </CardActions>
              </td>
            </tr>
            <tr>
              <td>
                Fertilize
              </td>
              <td>
              6 day
              </td>
              <td>
              <CardActions>
                <Button size="small" variant="contained" color="primary">Complete</Button>
              </CardActions>
              </td>
            </tr>
            <tr>
              <td>
                Fertilize
              </td>
              <td>
              7 day
              </td>
              <td>
              <CardActions>
                <Button size="small" variant="contained" color="primary">Complete</Button>
              </CardActions>
              </td>
            </tr>
            <tr>
              <td>
                Fertilize
              </td>
              <td>
              8 day
              </td>
              <td>
              <CardActions>
                <Button size="small" variant="contained" color="primary">Complete</Button>
              </CardActions>
              </td>
            </tr>
            
          </tbody>
          
        </table>
      </CardContent>
    </Card>
  );
}