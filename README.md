# 201930318 이윤아
## [ 12월 08일 ]
### 조건부 렌더링
1. 엘리먼트 변수
- React에서는 렌더링 하려는 엘리먼트를 변수에 저장할 수 있다.
2. 논리 연산자 &&로 if를 인라인으로 표현하기
- JSX안에는 중괄호를 이용해서 JS표현식을 포함 할 수 있다.
- 논리 연산자 &&를 사용하면 쉽게 엘리먼트를 조건부로 넣을 수 있다
3. 조건부 연산자로 if-else 구문을 인라인으로 표현하기
- 엘리먼트를 조건부로 렌더링하는 또 다른 방법은 조건부 연산자인 condition ? true:false를 사용하는 것
- 독성이 다소 떨어지지만 큰 표션식을 넣을 수도 있다.
4. 컴포넌트가 렌더링하는 것을 막기
- 다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨기고 싶을 때가 있다.
- 이때는 렌더링 결과를 출력하는 대신 null을 반환하면 해결할 수 있다

### 상속
React는 강력한 합성 모델을 갖고 있으며, 상속 대신 합성을 사용하여 컴포넌트 간에 코드를 재사용하는 것이 좋다
```javascript
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```
###  특수화
때로는 어떤 컴포넌트의 특수한 경우인 컴포넌트를 고려해야 하는 경우가 있다. 예를 들어, WelcomeDialog는 Dialog의 특수한 경우라고 할 수 있다.
더 구체적인 컴포넌트가 일반적인 컴포넌트를 렌더링하고 props를 통해 내용을 구성한다.


## [ 12월 01일 ]
### Components와 Props
#### 
컴포넌트를 정의하는 가장 간단한 방법은 JavaScript 함수를 작성하는 것이다.
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
#### 컴포넌트 합성
컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있다.
```javascript
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
}
```
### State and Lifecycle
#### 클래스에 로컬 State 추가하기
1. render() 메서드 안에 있는 this.props.date를 this.state.date로 변경합니다.
2. 초기 this.state를 지정하는 class constructor를 추가합니다.
3. <Clock /> 요소에서 date prop을 삭제합니다.
```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

#### 생명주기 메서드를 클래스에 추가하기
애플리케이션에서 컴포넌트가 삭제될 때 해당 컴포넌트가 사용 중이던 리소스를 확보하는 것이 중요.
Clock이 처음 DOM에 렌더링 될 때마다 타이머를 설정. 
이것은 React에서 마운팅이라고 합니다.
또한, Clock에 의해 생성된 DOM이 삭제될 때마다 타이머를 해제. 이것은 React에서 “언마운팅”이라고 합니다.
componentDidMount() 메서드는 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행됨. 타이머를 설정하기에 좋음.
```javascript
 tick() {
    this.setState({
      date: new Date()
    });
  }
```

## [ 11월 24일 ]
### 리액트 문서 - 설치
#### 1단계: HTML 파일에 DOM 컨테이너 설치
```javascript
<div id="like_button_container"></div>
```
#### 2단계: 스크립트 태그 추가하기
```javascript
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
```
#### 3단계: React 컴포넌트 만들기
```javascript
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
```

### CDN 링크
#### 배포용 버전 - html
```javascript
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```
#### CDN을 통해 React를 사용한다면, crossorigin 어트리뷰트(attribute)와 함께 사용
```javascript
<script crossorigin src="..."></script>
```
#### 
```javascript
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
## 주요 개념
### 6. 이벤트 처리하기
- React의 이벤트는 소문자 대신 캐멀 케이스를 사용한다.
- JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달한다.

## [ 11월 17일 ]
### 리액트 공식 문서
### (4) markdown-editor - 마크다운 변환
```javascript 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

export default App
```

### (3) Todo.html - 리스트 추가
```javascript 
<head>
   <script type="text/babel">
       class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todos-example')
);

    </script>
</head>
<body>
    <div id="hello-example"></div> 
</body>
```

## [ 11월 10일 ]
### 리액트 공식 문서
### (1) index.html - 글씨 출력
```javascript 
<head>
   <script type="text/babel">
        class HelloMessage extends React.Component { //클래스형 컴포넌트를 상속 받음
            render() {
                return (
                    <div>
                        Hello {this.props.name} //props 출력(?)
                    </div>
                )
            }
        }
        ReactDOM.render(
            <HelloMessage name="Taylor" />,
            document.getElementById('hello-example') //id가 hello-example인 것을 Taylor라고 부름
        )
    </script>
</head>
<body>
    <div id="hello-example"></div> 
</body>
```
###  (2) Timer.html - 화면에 시간 출력( 화면 전체가 갱신되는 것이 아니라, 일부분만 업데이트 됨 )
```javascript 
<head>
   <script type="text/babel">
        class Timer extends React.Component { //클래스형 컴포넌트를 상속 받음
            constructor(props) { //생성자
                super(props) //부모 
                this.state = { seconds: 0 } //state인 second값 0으로 초기화
            }
        
            tick() {
                this.setState(state => ({
                seconds: state.seconds + 1 //second값 1씩 증가
                }))
            }
        
            componentDidMount() {
                this.interval = setInterval(() => this.tick(), 1000) //1초당
            }
        
            componentWillUnmount() {
                clearInterval(this.interval)
            }
        
            render() {
                return (
                    <div>
                        Seconds: {this.state.seconds} //지난 초 값 출력
                    </div>
                )
            }
        }
    
        ReactDOM.render(
            <Timer />,
            document.getElementById('timer-example') //id가 timer-example인 것
        )
</head>
<body>
     <div id="timer-example"></div> 
</body>
```


## [ 11월 03일 ]
### router props에 데이터 담아 보내기
```javascript 
   function Navigation(){
    return(
        <div className='nav'>
            <Link to="/">Home</Link>
            <Link to={{ pathname: './about', state: {fromNavigation: true}}}>About</Link>
        </div>
    );
}
```

### Detaol.js 컴포넌트(클래스형) 만들기
```javascript 
   import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const{ location, history} = this.props
    }
    
    render(){
        return(
            <span>hello</span>
        )
    }
}

export default Detail
```
### Route 컴포넌트 추가하기
```javascript 
import Detail from './routes/Detail'

   function App() {
  return(
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path='/movie-detail' component={Detail} /> 
    </HashRouter>
  )
}
```

### push()함수 사용하기
```javascript 
   import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const{ location, history} = this.props
        if(location.state === undefined){
            history.push('/') //location.state가 없는 경우 Home으로 이동
        }
    }
    
    render(){
        return(
            <span>hello</span>
        )
    }
}

export default Detail
```


## [ 10월 27일 ]
### react-router-dom: 화면 이동 시켜주는 장치
1. react-router-dom 설치하기
```javascript 
    npm install react-router-dom
```
2. react-router-dom 임포트하기
```javascript 
    import {HashRouter, Route} from 'react-router-dom'
```
### About.js 수정하기
```javascript 
    import React from 'react';

    function About() {
    return (
        <span>
           hi
        </span>
        </div>
  );
}
export default About
```

### a 엘리먼트 Link 컴포넌트로 바꾸기
```javascript 
    import { Link } from 'react-router-dom'

    function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
  );
}
export default Navigation
```

### push()함수 사용하기
```javascript 
    import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
```


## [ 10월 13일 ]
 ### 1. 영화 앱 스타일링하기 - css파일 없이 스타일 적용하기
① 우선 보기 좋게 ```<div>```를 이용해서 JSX를 감싼다.
```javascript 
    <section className= 'container'> //리액트에서는 class가 아닌 className 사용
        {isLoading? (
          <div className= 'loader'>
            <span className='loader-class'>Loading...</span>
          </div>
    (생략)
```
② 엘리먼트에 style 속성 추가
```javascript 
    <h3 class="movie__title" style={{ backgroundColor: 'red' }}>
    {title}
    </h3>
```
 ### 2. 영화 앱 스타일링하기 - css파일을 이용해서 스타일 적용
① css파일 생성  
② 컴포넌트에 css파일 임포트
```javascript 
    import './App.css'
```
③ css파일 수정
```css 
   body{
       background-color: #2f2f2f;
   }
```
#### 07장: 영화 앱 다듬기
 ### prop-types로 배열 props 검사하기
 ```js 
    Movie.propTypes = { // 대소문자 주의!
        genres : PropTypes.arrayOf(PropTypes.string).isRequired
    }
```
 ### 컴포넌트에서 배열 props 출력하기
배열이므로 map()이용
 ```js 
    <ul className='movie-genres'>
        {genres.map((tuna)=>{
            return <li className='movie-genre'>{tuna}</li>    
            }
        )}
    </ul>
```

## [ 10월 06일 ]
### 마운트로 분류하는 생명주기 함수
1. constructor( ) // 생성자 함수  
2. render( )  
3. componentDidMount( )
### 업데이트로 분류한 생명주기 함수
- componentDidUpdate( ) // 화면이 업데이트되면 실행
### 컴포넌트가 죽을 때 실행되는 함수
- componentWillUnmount( ) // 컴포넌트가 화면에서 떠날 때 실행

<br>

#### 06장: 영화 앱 만들기 
### axios: 영화 데이터를 로딩하기 위해 사용

### JSON Viewer:  줄바꿈이 없는 json파일을 보기 쉽게 해주는 확장 도구

### async, await
1. 네트워크와 연결해서 데이터의 개수를 많이 받아오면 시간이 많이 걸릴 수 밖에 없기 때문에 getMovie()함수에 시간이 많이 걸린다는 것을 자바스크립트에게 알리기 위해 async와 await를 사용한다.
2. await는 실제 시간이 필요한 대상에다가 붙임

```javascript
getMovies = async () => {  //자바 스크립트에게 getMovies()는 시간이 필요하다는 것을 알림
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');  // axios.get는 시간이 필요하다고 알림
  }
```

### 구조 분해 할당
- data.data.movies를 보기 쉽게 하기 위해 구조분해 할당을 이용
```js
const {data: { data: {movies}}}
```

- ES6에서는 객체의 키값과 변수의 이름이 같다면 축약해서 쓸 수 있다
> this.setState({movies: movies}) >> this.setState({movies})


## [ 09월 29일 ]
- map()함수를 쓰면 props(배열)로 들어온 배열을 하나하나 데이터로 추출 가능
- 함수를 이용해서 가독성을 높일 수 있다
- 구조 분해할당 props를 { fav }라는 변수안에 얺고 사용하겠다- const(상수)사용
- 이미지에 key값을 부여하지 않으면 에러가 발생하므로 key값을 부여해야한다.

### prop-type: props의 자료형을 검사해주는 도구
- prop-type을 쓰려면 import PropTypes from 'prop-types'; 임포트 해줘야함
-  기능1) 
> 자료형 검사: PropTypes.string.isRequired는  PropTypes은 propType이 string(문자열)을 isRequired(필요)로 하다라는 뜻이다.
- 기능2)
> props검사: 정의되지 않은 props를 사용하면 경고해줌

### state: 동적데이터(변경 될 수 있는 데이터)를 다룰 때 사용
- state를 상용하려면 반드시 클래스형 컴포넌트 안에서, 소문자를 이용해서 사용
- {this.state.count}의 this.state는 현재 클래스에서 선언한 state를 의미
- state는 사용자가 직접 변경 허용x
- 간접적으로 변경하려면 setState() 사용해야 함
```js
    this.setState({count: this.state.count + 1});
```
```javascript
    this.setState(current => ({
    	count: current.count+1,
    }))
```
	
### 클래스형 컴포넌트를 사용하려면 import React from "react";과 해당 클래스가 React의 Component를 상속 받아야한다.
- 클래스형 컴포넌트는 JSX를 반환할 때 return을 사용하는 대신 render()를 사용해야함

### ```<botton>```태그 : onClick은 해당 버튼을 누르면 이벤트 발생시켜줌


## [ 09월 15일 ]
- props로 값 전달하고 값 받기
- 메인컴포넌트에서 키와 인자값을 보냄

### 구조 분해 할당: 데이터의 개수가 많을 때 편리하다

### map(): 배열의 모든 원소에 특정작업을 적용할 때 사용
> 배열에 있는 것을 하나씩 뽑아서 적용함.   
> 배열 안에 있는 데이터들에게 일괄적으로 이벤트를 부여함
```js
friends.map((current) => {
             console.log(current); //console창에 friends의 배열 출력
              return 0; //이건 의미 x [0, 0, 0, 0]
          });
```

### {foodILike.map(dish => (<Food name = {dish.name}/>)) }
- ```<Food fav="">```의 업그레이드 버전   
- dish의 이름은 상관 없음   
- Food는 함수   
- FoodILike의 배열의 개수만큼 실행함   
- FoodILike에서 원소를 하나 뽑아 dish에 담아서 name에 전달   

### 무명함수: 함수의 이름없이 쓰는 함수, 1번 사용
```js
    function(friends){
        return friends + "❤"
    }
```
### ```<img>```:  html태그, 싱글태그, src안에 주소를 담아서 사용, 사진 출력

## [ 09월 08일 ]
- favicon.ico:  작은 로고(아이콘), 구분
- manifest.json: 기본적인 정보들
- ```<div />```: 싱글태그
- App.js: 실직적으로 화면에 보여지는 부분(?)
    > index.html에 들어와있다(root 밑에)
- getElementById(''): id값이 root인 태그에 <App>(App의 리턴값)을 받아서 index.html의 id가 root인 div 사이에 들어가게 됨 (50p)
- 프로젝트 생성: npm create-react-app 파일명
- 중요한 파일: App.js > index.js > index.html
- JSX = javascript + HTML
- 컴포넌트 사용할 수 있게 하려면 export 필수!
    > 반대로 다른 컴포넌트 사용하려면 import해야한다.
- 인접한 JSX요소는 반드시 하나의 태그로 감싸야 한다
    > DOM에서는 하나의 컴포넌트만 허용한다. potato를 app안에 넣어야 해. import와 export 필수. 상대경로(./)
- ; 안 붙여도 됨