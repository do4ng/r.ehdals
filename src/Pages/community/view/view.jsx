/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Marked, MarkedHTML } from '../../../Library/markdown';
import getPost from '../data.json';
import './style.scss';
var ele = '';
var getData = '';
function clickSubmit() {
  // console.log(document.getElementById('answer-text-area').value);
  getData[ele.id].answer.push(
    document.getElementById('answer-text-area').value
  );
  fetch('https://rehdals-server.herokuapp.com/give', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ post: getData }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.message === 0) {
        window.location.reload();
      }
    });
}
export default function App({ match }) {
  // match.params.post
  fetch('https://rehdals-server.herokuapp.com/get')
    .then((response) => response.json())
    .then((data) => {
      const post = JSON.parse(data.post);
      getData = post;
      post.forEach((element) => {
        if (match.params.post === element.id.toString()) {
          ele = element;
          document.getElementById('qna-view-title').innerText = element.title;
          document.getElementById('qna-view-content').innerHTML = Marked(
            element.content
          );
          var answer = element.answer;
          const a = answer.map(
            (answerElement) =>
              `
              <div
                class="qna-a-content"
              >${Marked(answerElement || '불러오기 실패')}</div>`
          );
          document.getElementById('answer-container-id').innerHTML =
            a.join(' ');
          document.getElementById(
            'qna-answer-title'
          ).innerText = `${answer.length}개의 답변`;
        }
      });
    })

    .catch((e) => {
      console.warn(e);
      document.getElementById('qna-view-container').innerHTML =
        '<div class="qna-view-error"><div style="color: #FF7575;">ERROR : 불러오기 실패</div><div>이런, 어디선가 문제가 생긴 것 같아요.</div></div>';
    });
  return (
    <>
      <div className="qna-view-container" id="qna-view-container">
        <div className="qna-view-title" id="qna-view-title"></div>
        <hr></hr>
        <div className="qna-view-content" id="qna-view-content"></div>
        <hr></hr>
        <div className="qna-answer-container">
          <div className="qna-answer-title" id="qna-answer-title">
            0개의 답변
          </div>
          <div id="answer-container-id">
            <span className="post-loading">불러오는 중</span>
          </div>
        </div>
        <hr></hr>
        <div className="answer-input">
          <span className="answer-text">답변</span>
          <div>
            <span className="answer-text-warn"></span>
          </div>
          <div>
            <textarea
              id="answer-text-area"
              placeholder="내용을 입력하세요"
            ></textarea>
            <button onClick={clickSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
