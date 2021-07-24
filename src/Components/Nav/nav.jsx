import config from '../../Data/config';
import './style.scss';
import React from 'react';
var pr = 0;
var scrollDownNum = 0;
var community = <span></span>;
var gohref = '/';
if (document.location.href.split('/')[3] === 'community') {
  community = <span className="nav-community"></span>;
  gohref = '/community';
}
document.addEventListener('scroll', function () {
  var scrollT = document.documentElement.scrollTop;
  if (scrollT === 0) {
    if (!document.getElementById('nav').classList.contains('hide')) return;
    document.getElementById('nav').classList.remove('hide');
  }
  if (pr < scrollT) {
    // down
    pr = scrollT;
    if (document.getElementById('nav').classList.contains('hide')) return;
    document.getElementById('nav').classList.add('hide');
    scrollDownNum = 0;
  } else if (pr > scrollT) {
    // up
    pr = scrollT;
    // console.log(scrollDownNum);
    if (!document.getElementById('nav').classList.contains('hide')) return;
    if (scrollDownNum < 5) {
      scrollDownNum = scrollDownNum + 1;
      return;
    }
    scrollDownNum = scrollDownNum + 1;
    document.getElementById('nav').classList.remove('hide');
  }
});

export default function Nav() {
  return (
    <div className="nav" id="nav">
      <h3>
        <a href={gohref}>
          @ r.ehdals
          {community}
        </a>
      </h3>
      <div className="nav-img-container">
        <a href={`/user/${config.nick}`}>
          <img src={config.img} alt=""></img>
        </a>
      </div>
    </div>
  );
}
