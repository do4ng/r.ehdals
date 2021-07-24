/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import './style.scss';
import Card from '../../Components/Card/card';
import pst from '../../Data/post';
export default function Tags({ match }) {
  var post = [];
  pst.forEach((e) => {
    if (e.tags.includes(match.params.t)) {
      post.push(e);
    }
  });
  var resultPost = post.map((element) => (
    <Card
      url={element.url}
      title={element.title}
      des={element.des}
      time={element.time}
    ></Card>
  ));
  return (
    <>
      <div className="tags-match">
        <div className="tags-text">
          #<b>{match.params.t}</b>
          {' >'}{' '}
          <span className="tags-match-length">
            <b>{resultPost.length}</b> Posts
          </span>
        </div>
        <div className="tags-result">{resultPost}</div>
      </div>
    </>
  );
}
