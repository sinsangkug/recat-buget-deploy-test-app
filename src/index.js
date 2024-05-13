import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//index.html파일 내부에 작성된 root id속성 값을 가진 <div> 엘리먼트를 선택해 root변수에 저장
const root = ReactDOM.createRoot(document.getElementById('root'));
//<div> 엘리먼트 영역 내부에  App.js에 작성된     <div className="App">...</div>  App컴포넌트의 디자인을 넣어 보여주게 설정
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
