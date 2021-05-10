import config from '../../Data/config';
import Error from '../../Components/Error/err';
import './style.scss';
import React from 'react';
export default function App({ match }) {
  var result = (
    <Error
      title="등록된 유저가 없어요."
      content="URL이 맞는지 다시 확인해주세요."
    ></Error>
  );
  if (config.nick === match.params.user) {
    result = (
      <>
        <div className="author-s">
          <strong>{config.nick}</strong>
          <br></br>
          <span className="des">{config.des}</span>
        </div>
      </>
    );
  }
  return result;
}
