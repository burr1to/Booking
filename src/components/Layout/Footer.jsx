import React from "react";
import "./css/layout.css";

export default function Footer() {
  return (
    <div className='bottom'>
      <div className='mail'>
        <h1 className='mailTitle'>Save time, save money!</h1>
        <span className='mailDesc'></span>
        <div className='inputCon'>
          <input type='text' placeholder='Your Email' />
          <button className='subscribeEmail'>Subscribe</button>
        </div>
      </div>
      <div className='footer'>
        <ul className='fList'>
          <li className='fListItem'>Countries</li>
          <li className='fListItem'>Regions</li>
          <li className='fListItem'>Cities</li>
          <li className='fListItem'>Airports</li>
          <li className='fListItem'>Hotels</li>
        </ul>
      </div>
    </div>
  );
}
