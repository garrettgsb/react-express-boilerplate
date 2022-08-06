import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <StyledNavLink to="/">BOOK'D UP</StyledNavLink>
      </div>

      <div className="links">
        <ul>
          <li>
            <StyledNavLink to="/about" className="nav-item">
              About
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/search" className="nav-item">
              Search
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/match" className="nav-item">
              MatchBook
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/login" className="nav-item">
              Login
            </StyledNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const StyledNavLink = styled(NavLink)`
  text-emphasis: none;
  text-decoration: none;
  color: black;
  &:hover {
    text-emphasis: none;
    text-decoration: none;
    color: black;
  }
`;
