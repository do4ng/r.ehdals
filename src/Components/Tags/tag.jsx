/* eslint-disable react/prop-types */
import './style.scss';
import React from 'react';

export default function Tag(props) {
  return (
    <span className={'tag tag-size-' + props.size}>
      <a href={`/tag/${props.text}`}>{props.text}</a>
    </span>
  );
}
