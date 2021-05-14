/* eslint-disable react/jsx-key */
import './style.scss';
import config from '../../Data/config';
import post from '../../Data/post';
import Card from '../../Components/Card/card';
import Tag from '../../Components/Tags/tag';
import React from 'react';
export default function App() {
  var doing = config.doing;
  var result = doing.map((element) => <Tag size="medium" text={element}></Tag>);
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
      <h2># {config.nick}</h2>
      {config.des}
      <div className="sns">
        <a href={config.instagram}>Instagram</a>{' '}
        <a href={config.github}>Github</a>
      </div>
      <div className="home-tags">{result}</div>
      <div className="home-cards">{resultPost}</div>
    </div>
  );
}
