# 201930318 이윤아
[ 09월 29일 ]
- map()함수를 쓰면 props(배열)로 들어온 배열을 하나하나 데이터로 추출 가능
- 함수를 이용해서 가독성을 높일 수 있다
- 구조 분해할당 props를 { fav }라는 변수안에 얺고 사용하겠다- const(상수)사용
- 이미지에 key값을 부여하지 않으면 에러가 발생하므로 key값을 부여해야한다.

- prop-type: props의 자료형을 검사해주는 도구
  > prop-type을 쓰려면 import PropTypes from 'prop-types'; 임포트 해줘야함
  > 기능1) 자료형 검사: PropTypes.string.isRequired는  PropTypes은 propType이 string(문자열)을 isRequired(필요)로 하다라는 뜻이다.
  > 기능2) props검사: 정의되지 않은 props를 사용하면 경고해줌

- state: 동적데이터(변경 될 수 있는 데이터)를 다룰 때 사용
	>state를 상용하려면 반드시 클래스형 컴포넌트 안에서, 소문자를 이용해서 사용
	>{this.state.count}의 this.state는 현재 클래스에서 선언한 state를 의미
	>state는 사용자가 직접 변경 허용x
	>간접적으로 변경하려면 setState() 사용해야 함
	>ex) this.setState({count: this.state.count + 1});
	>ex) this.setState(current => ({
    >	  count: current.count+1,
    >	}));
	
- 클래스형 컴포넌트를 사용하려면 import React from "react";과 해당 클래스가 React의 Component를 상속 받아야한다.
  >클래스형 컴포넌트는 JSX를 반환할 때 return을 사용하는 대신 render()를 사용해야함

- <botton>태그 : onClick은 해당 버튼을 누르면 이벤트 발생시켜줌

- constructor(): constructor()이 render()보다 먼저 실행됨
- componentDidMount(): render()가 실행된 후 실행됨
- componentDidUpdate(): 화면이 업데이트되면 실행
- componentWillUnmount(): 컴포넌트가 화면에서 떠날 때 실행

>결과적으로 1. constructor() 2. render() 3. componentDidMount() 순서로 실행

[ 09월 15일 ]
- props로 값 전달하고 값 받기
- 메인컴포넌트에서 키와 인자값을 보냄
- 구조 분해 할당: 데이터의 개수가 많을 때 편리
- map함수: 배열 안에 있는 데이터들에게 일괄적으로 이벤트를 부여함

- map(): 배열의 모든 원소에 특정작업을 적용할 때 사용
    - 배열에 있는 것을 하나씩 뽑아서 적용
    - ex) friends.map((current) => {
             console.log(current); //console창에 friends의 배열 출력
              return 0; //이건 의미 x [0, 0, 0, 0]
          });

- {foodILike.map(dish => (<Food name = {dish.name}/>)) }
    - <Food fav="">의 업그레이드 버전
    - dish의 이름은 상관 없음
    - Food는 함수
    - FoodILike의 배열의 개수만큼 실행함
    - FoodILike에서 원소를 하나 뽑아 dish에 담아서 name에 전달

- 무명함수: 함수의 이름없이 쓰는 함수, 1번 사용
    - ex) function(friends){
        return friends + "❤"
    }

- <img>: html태그, 싱글태그, src안에 주소를 담아서 사용, 사진 출력



[ 09월 08일 ]
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