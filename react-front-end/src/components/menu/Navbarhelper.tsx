import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import * as S from './styles';


const Navbarhelper = () => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <S.StyledNavbar open={open} onClick={() => setOpen(!open)}>
      <S.Ul open={open}>
            <S.LogoUl src="images/ChronicleLogo.png" alt="logo" />

            <NavLink to="/categories"
              activeStyle={{
                fontWeight: "bold",
                color: "#0DADEA"
              }}
            > 
              <li>Categories</li>
            </NavLink>
            <NavLink to="/entries"
              activeStyle={{
                fontWeight: "bold",
                color: "#0DADEA"
              }}
            >
              <li>entries</li>
            </NavLink>
            <NavLink to="/settings"
              activeStyle={{
                fontWeight: "bold",
                color: "#0DADEA"
              }}
            >
              <li>Settings</li>
            </NavLink>
            <NavLink to="/graphs"
              activeStyle={{
                fontWeight: "bold",
                color: "#0DADEA"
              }}
            >
              <li>Graphs</li>
              </NavLink>
              <NavLink to="/categories"
              activeStyle={{
                fontWeight: "bold",
                color: "#0DADEA"
              }}
            > 
              <li>Home</li>
            </NavLink>
          </S.Ul>
      </S.StyledNavbar>
      
    </>
  )
}
export default Navbarhelper