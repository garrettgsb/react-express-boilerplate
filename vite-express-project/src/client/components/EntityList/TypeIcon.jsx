import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSprayCanSparkles,
  faHatWizard,
  faMusic,
  faCamera,
  faChildReaching,
  faPlus,
  faVideo,
  faPaintBrush,
  faMasksTheater
} from '@fortawesome/free-solid-svg-icons'
import { projectType } from '../../constants/TypeSelections.js';

const MAP_ARTIST_TYPE_TO_ICON = {
  2: faSprayCanSparkles,
  3: faMusic,
  4: faCamera,
  5: faHatWizard,
  6: faChildReaching,
  7: faPlus
}

const MAP_PROJECT_TYPE_TO_ICON = {
  [projectType[1].name]: faSprayCanSparkles,
  [projectType[2].name]: faVideo,
  [projectType[3].name]: faMusic,
  [projectType[4].name]: faPaintBrush,
  [projectType[5].name]: faMasksTheater,
  [projectType[6].name]: faPlus
}

export const TypeIcon = ({ isArtists, type }) => (
  <FontAwesomeIcon
    icon={
      isArtists
        ? MAP_ARTIST_TYPE_TO_ICON[type]
        : MAP_PROJECT_TYPE_TO_ICON[type]
    }
  />
);
