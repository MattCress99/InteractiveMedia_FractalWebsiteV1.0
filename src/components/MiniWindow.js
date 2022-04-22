import React from 'react';
import { Link } from 'react-router-dom';

function MiniWindow(props){
  return (
    <>
      <li className='miniWindow'>
        <Link className='miniWindow__link' to={props.path}>
          <figure className='miniWindow__pic-wrap' data-category={props.label}>
            <img
              className='miniWindow__img'
              alt='Travel Img'
              src={props.src}
            />
          </figure>
          <div className='miniWindow__info'>
            <h5 className='miniWindow__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default MiniWindow;