import config from '../../Data/config';
import './style.scss';
import React from 'react';
var pr = 0;
var scrollDownNum = 0;
document.addEventListener('scroll', function () {
  var scrollT = document.documentElement.scrollTop;
  if (pr > scrollT) {
    // up
    pr = scrollT;
    if (document.getElementById('nav').classList.contains('show')) return;
    document.getElementById('nav').classList.add('show');
    scrollDownNum = 0;
  } else if (pr < scrollT) {
    // down
    pr = scrollT;
    // console.log(scrollDownNum);
    if (!document.getElementById('nav').classList.contains('show')) return;
    if (scrollDownNum < 20) {
      scrollDownNum = scrollDownNum + 1;
      return;
    }
    scrollDownNum = scrollDownNum + 1;
    document.getElementById('nav').classList.remove('show');
  }
});

export default function Nav() {
  return (
    <div className="nav show" id="nav">
      <h3>
        <a href="/">@{config.nick}</a>
      </h3>
    </div>
  );
}
