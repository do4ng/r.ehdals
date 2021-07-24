/* eslint-disable react/jsx-key */
import './style.scss';
import config from '../../Data/config';
import post from '../../Data/post';
import Card from '../../Components/Card/card';
import React from 'react';
export default function App() {
  var resultPost = post.map((element) => (
    <Card
      url={element.url}
      title={element.title}
      des={element.des}
      time={element.time}
    ></Card>
  ));
  resultPost = resultPost.reverse();
  return (
    <div className="container">
      <div className="home-left">
        <div>
          <h2>{config.nick}</h2>
          <div>{config.des}</div>
        </div>
      </div>
      <div className="home-cards">
        <div className="post-length">
          <span>
            <b>{`${resultPost.length}`}</b> Posts
          </span>
        </div>
        <div>{resultPost}</div>
      </div>
    </div>
  );
}
