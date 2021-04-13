import React from 'react';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';
import './LeftSearch.scss';

export default function Leftsearch() {

  return (
    <section className="leftsearch">
      <EqualizerOutlinedIcon />
      <DoubleArrowOutlinedIcon />
      <div> show data here - graph / charts/ word cloud</div>
    </section>
  );
}