import React from "react";
import "./Venue.scss";

export default function Venue(props) {
  return (
    <main className="venue">
      <div className="venue--img">
        IMAGE
      </div>
      <div className="venue--name">
        Brassneck Brewery
      </div>
      <div className="data">
        <div className="data--values">
          <div className="data--values--item">Rating</div>
          <div className="data--values--item">Rtng-Amt</div>
          <div className="data--values--item">Price</div>
          <div className="data--values--item">My-Rtng</div>
        </div>
        <div className="data--description"> Insert description here!
        </div>
      </div>
    </main>
  )
}