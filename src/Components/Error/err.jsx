/* eslint-disable react/prop-types */
import React from 'react';
export default function Err(props) {
  const errorStyle = {
    textAlign: 'center',
    marginTop: '5%',
  };
  const errMessageStyle = {
    marginTop: '2%',
    fontSize: 'small',
    color: '#7c7c7c',
  };
  return (
    <div style={errorStyle}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div style={errMessageStyle}>
        만약 다른 기기에서는 접속이 되나요?
        <div>
          <a href="/state">이곳에서</a> 상태를 확인하세요!
        </div>
      </div>
    </div>
  );
}
