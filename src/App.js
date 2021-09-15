import { render } from "@testing-library/react";

const foodILike = [
  {
    name: 'chikin',
    image: 'https://img.insight.co.kr/static/2020/01/06/700/u193cc75jr3p97lg645z.jpg'
  },
  {
    name: 'gukbap',
    image: 'https://cdn.mindgil.com/news/photo/202008/69679_4073_1653.jpg'
  }
]

function renderFood(foo){
  return <Food name={foo.name} picture={foo.image} />
}

//import Potato from "./Potato";//상대경로
function App() {//메인 컴포넌트
  return (
    <div>
      {
        foodILike.map(renderFood)
      }
    </div>
  );
}

function Food({name, picture}){//서브 컴포넌트
  // {fav} = props
  return (
    <div>
      <h2>I love {name}</h2>
      <img src = {picture}/>
    </div>
  );
}

export default App;//외부에서 사용 가능하게 해줌
