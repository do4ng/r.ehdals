import config from '../../Data/config';
import './style.scss';
import React from 'react';

export default function Nav() {
  return (
    <div className="nav" id="nav">
      <h3>
        <a href="/">@{config.nick}</a>
        <a href={`/user/${config.nick}`}>
          <img src={config.img} alt=""></img>
        </a>
      </h3>
    </div>
  );
}
