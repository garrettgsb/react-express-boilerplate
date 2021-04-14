import React from 'react';

import ReactWordcloud from 'react-wordcloud';
import words from './tempWords';

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
const size = [500, 200];


export default function LeftData() {

  return (
    <section className="leftData">
      <div className='dataContainer'>
        more data
        </ div>
      <div className='dataContainer'>
        more data
        </ div>

      <div className='dataContainer'>
        more data
        </ div>
      <div className='dataContainer'>
        <ReactWordcloud
          callbacks={callbacks}
          options={options}
          size={size}
          words={words}
          className='wordCloud'
        />
      </ div>
    </section>
  );
}