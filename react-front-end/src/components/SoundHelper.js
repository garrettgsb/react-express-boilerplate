import Switch_004 from '../asset/sounds/Switch_004.ogg'
import Select_008 from '../asset/sounds/Select_008.ogg'
import Question_003 from '../asset/sounds/Question_003.ogg'
import Error_008 from '../asset/sounds/Error_008.ogg'
import Glass_004 from '../asset/sounds/Glass_004.ogg'
import Close_003 from '../asset/sounds/Close_003.ogg'
import Scratch_004 from '../asset/sounds/Scratch_004.ogg'
import Select_005 from '../asset/sounds/Select_005.ogg'


const handleAudio = (volume, sound) => {
  if (volume && sound) {
    new Audio(sound).play()
  }
}

const sounds = {
  click: Switch_004,
  hover: Select_008,
  correct: Question_003,
  incorrect: Error_008,
  hint: Glass_004,
  skip: Close_003,
  fifty: Scratch_004,
  swap: Select_005
}

export { handleAudio, sounds };