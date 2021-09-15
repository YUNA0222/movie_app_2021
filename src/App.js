//import Potato from "./Potato";//상대경로
function App() {//메인 컴포넌트
  return (
    <div>
      <h1>Hello React</h1>
      <Food fav = "kimchi"/>
      <Food fav = "a"/>
      <Food fav = "b"/>
      <Food fav = "c"/>
    </div>
  );
}

function Food({fav}){//서브 컴포넌트
  // {fav} = props
  return (
      <h3>I love {fav}</h3>
  );
}

export default App;//외부에서 사용 가능하게 해줌
