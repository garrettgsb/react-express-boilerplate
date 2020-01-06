import React, {FC, useState, Fragment} from "react";
import styled from 'styled-components';
import { render } from 'react-dom';
import axios from "axios";
import PropTypes from 'prop-types';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture, useDrag } from 'react-use-gesture';


//static data for testing

const cards = [
  'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
]

interface AttractionPickerProps {
  // i?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  // r?: number,
  // s?: number,
  
}
export const AttractionPicker: FC<AttractionPickerProps> = () => {
  return (
    <h2>Swipe</h2>
  );
};