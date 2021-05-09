import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 1000,
    // marginLeft: 'auto',
    marginTop: '7%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  centerCard: {
    display: 'flex',
    justifyContent: 'center',
  }
});

export default function Weather() {
  const classes = useStyles();

  return (
    <div className={classes.centerCard}>
    <Card className={classes.root}>
      <CardContent>
        <table >
          <thead >
            <tr >
              <th>Weather</th>
            </tr>
          </thead>
          <tbody >
            <tr>
            <td>
                Hot   |
                Real Hot   |
                Warmish    |
                Cool   |
                Warm Again   
              </td>
  
            </tr>
          </tbody>
          
        </table>
      </CardContent>
    </Card>
    </div>
  );
}