import React from 'react'

export default function Footer () {

  var style = {
    backgroundColor: "#092a3c",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    color: "#f8f9fa",
  }

  var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
  }

  return (
    <footer className="footer">
      <div style={phantom} />
      <div style={style}> 
      Dylan Rogers, Gavin Swan, & Samantha Knoop
      </div>
    </footer>
  )
}