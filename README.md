# 201930318 이윤아
## { 11월 10일}
### 리액트 공식 문서
### index.html - 글씨 출력
```javascript 
<head>
   <script type="text/babel">
        class HelloMessage extends React.Component {
            render() {
                return (
                    <div>
                        Hello {this.props.name}
                    </div>
                )
            }
        }
        ReactDOM.render(
            <HelloMessage name="Taylor" />,
            document.getElementById('hello-example')
        )
    </script>
</head>
<body>
    <div id="hello-example"></div> //id가 hello-example인 것을 출력
</body>
```
### Timer.html - 화면에 시간 출력( 화면 전체가 갱신되는 것이 아니라, 일부분만 업데이트 됨 )
```javascript 
<head>
   <script type="text/babel">
        class Timer extends React.Component {
            constructor(props) {
                super(props)
                this.state = { seconds: 0 }
            }
        
            tick() {
                this.setState(state => ({
                seconds: state.seconds + 1
                }))
            }
        
            componentDidMount() {
                this.interval = setInterval(() => this.tick(), 1000)
            }
        
            componentWillUnmount() {
                clearInterval(this.interval)
            }
        
            render() {
                return (
                    <div>
                        Seconds: {this.state.seconds}
                    </div>
                )
            }
        }
    
        ReactDOM.render(
            <Timer />,
            document.getElementById('timer-example')
        )
</head>
<body>
     <div id="timer-example"></div> //id가 timer-example인 것을 출력
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