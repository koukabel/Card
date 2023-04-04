import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Card() {
  return (
    <div id="container">
     <div id="first-half">  </div>
     <div id="second-half">
      <div id="intro">
      <h2>Title</h2>
      <div className='stars'>
       
        <p> ⭐ ⭐ ⭐ ⭐ ⭐ 4.5 (413)</p>
      </div>
    <h3>Secondary text</h3>
    <p>Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <hr></hr>
      </div>
      <div id="subtitles">
          <h3>Subtitles</h3>
          <span className="item">Item 1 </span>
          <span className="item">Item 2 </span>
          <span className="item">Item 3 </span>
          <span className="item">Item 4 </span>
        </div>
      <span className='action'> Action 1</span>
      
       </div>
    </div>
  );
}

export default Card;
