# 201930318 이윤아

[09월 08일]
- favicon.ico:  작은 로고(아이콘), 구분
- manifest.json: 기본적인 정보들
- <div /> 싱글태그
- App.js: 실직적으로 화면에 보여지는 부분(?)
    > index.html에 들어와있다(root 밑에)
- getElementById(''): id값이 root인 태그에 <App>(App의 리턴값)을 받아서 index.html의 id가 root인 div 사이에 들어가게 됨 (50p)
- 프로젝트 생성: npm create-react-app 파일명
- 중요한 파일: App.js > index.js > index.html
- JSX = javascript + HTML
- 컴포넌트 사용할 수 있게 하려면 export 필수!
    > 반대로 다른 컴포넌트 사용하려면 import
- 인접한 JSX요소는 반드시 하나의 태그로 감싸야 한다
    > DOM에서는 하나의 컴포넌트만 허용한다. potato를 app안에 넣어야 해. import와 export 필수. 상대경로(./)
- ; 안 붙여도 됨