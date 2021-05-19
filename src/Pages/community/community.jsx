import React from 'react';
import './style.scss';
// eslint-disable-next-line no-unused-vars
import getPost from './data.json';

function submit() {
  fetch('https://rehdals-server.herokuapp.com/get')
    .then((response) => response.json())
    .then((data) => {
      var getData = data;
      getData.post = JSON.parse(getData.post);
      getData.post.push({
        id: Object.keys(getData.post).length,
        title: document.getElementById('q-title').value,
        content: document.getElementById('q-text').value,
        answer: [],
      });
      console.log(getData);
      // Object.keys(JSON.parse(data.post)).length
      fetch('https://rehdals-server.herokuapp.com/give', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(getData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.message === 0) {
            window.location.reload();
          }
        });
    });
}

export default function App() {
  var post = '';
  var result;
  fetch('https://rehdals-server.herokuapp.com/get')
    .then((response) => response.json())
    .then((data) => {
      post = JSON.parse(data.post);
      result = post
        .reverse()
        .slice(0, 3)
        .map(
          (element) => `
            <div class="qna-container">\
              <a href="/community/view/${element.id}">\
                <div class="qna-title">${element.title.substring(0, 30)}</div>\
                <div class="qna-content">\
                  ${element.content.substring(0, 30)}\
                </div>\
              </a>\
            </div>`
        );
      try {
        document.getElementById('post-recent-container').innerHTML =
          result.join('');
      } catch (e) {
        document.getElementById('post-recent-container').innerHTML =
          '<span class="post-loading">불러오기 실패</span>';
        console.error(e);
      }
    })
    .catch((e) => {
      document.getElementById('post-loading').innerHTML =
        '불러오기 실패<div style="color: #FF8A8A">이런, 어디선가 문제가 생긴 것 같아요.</div>';
      console.warn(e);
    });

  return (
    <div>
      <div className="post-container">
        <div className="recent-post">
          <div className="title-post-topic">최근 올라온 질문</div>
          <div className="post-all-container" id="post-recent-container">
            <span className="post-loading" id="post-loading">
              불러오는 중
            </span>
          </div>
        </div>
        <hr></hr>
        <div className="q-text">
          <div className="q-text-topic">질문하기</div>
          <div>
            <span className="answer-text-warn"></span>
          </div>
          <input
            placeholder="제목을 입력하세요."
            type="text"
            id="q-title"
          ></input>
          <div>
            <textarea placeholder="내용을 입력하세요." id="q-text"></textarea>
          </div>
          <button onClick={submit}>submit</button>
        </div>
      </div>
    </div>
  );
}
