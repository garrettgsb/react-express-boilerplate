import { Link } from 'react-router-dom';
import * as S from './styles';
import Navbarhelper from './Navbarhelper';

type Props = {
  children?: any;
}

export default function Navbar(props: Props){
  return (
    <nav>
      <S.Nav>
        <S.Logo img src="images/ChronicleLogo.png" alt="logo">
        </S.Logo>
      <Link to="/">Chronicle Your Day </Link>
      <Link to="/categories">Categories </Link>
      <Link to="/entries">Entries</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/graphs">Graphs</Link>
      </S.Nav>
      <Navbarhelper />
    </nav>
  )
};
