import React from 'react';

import ReactWordcloud from 'react-wordcloud';
import words from './tempWords';
import Paper from '@material-ui/core/Paper';

import './LeftData.scss';


const callbacks = {
  getWordColor: word => word.value > 50 ? 'green' : "pink",
  getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
}
const options = {
  rotations: 2,
  rotationAngles: [0, 0],
  fontFamily: 'UniNeue'

};
const size = [200, 500];


export default function LeftData() {

  return (
    <section className="leftData">
      <Paper elevation={10} className='wordCloud' variant='outlined'>
        <ReactWordcloud
          callbacks={callbacks}
          options={options}
          size={size}
          words={words}
        />
      </Paper>
    </section>
  );
}