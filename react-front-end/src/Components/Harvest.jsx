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
    marginLeft: '7%',
    marginTop: '7%',
    display: 'flex',
    flexDirection: 'row',
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

export default function Harvest() {
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
                Beans
              </td>
              <td>
                2 weeks
              </td>
              <td>
              <CardActions>
                <Button size="small" variant="contained" color="primary">Complete</Button>
              </CardActions>
              </td>
            </tr>
            <tr>
              <td>
                Peas
              </td>
              <td>
              4 weeks
              </td>
              <td>
              <CardActions>
                <Button size="small" variant="contained" color="primary">Complete</Button>
              </CardActions>
              </td>
            </tr>
            <tr>
              <td>
                Cauliflower
              </td>
              <td>
              12 weeks
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