//import React from 'react';
import ReactDOM from 'react-dom';//5번 줄 사용 가능
import App from './App';//export덕분에 외부에서 사용 가능

ReactDOM.render(<App />, document.getElementById('root')//<App>(App의 리턴값)을 받아서 index.html에서 id가 root인 div 사이에 들어가게 됨 50p
);
