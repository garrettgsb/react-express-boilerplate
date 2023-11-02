import Switch_004 from '../asset/sounds/Switch_004.ogg'
import Select_008 from '../asset/sounds/Select_008.ogg'

const handleAudio = (sound) => {
  new Audio(sound).play()
}

const sounds = {
  click1: Switch_004,
  hover1: Select_008
}

function muteButton() {

}

export { handleAudio, sounds, muteButton };