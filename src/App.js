//import Potato from "./Potato";//상대경로
function App() {//메인 컴포넌트
  return (
    <div>
      <h1>Hello React</h1>
      <Food fav = "kimchi" somthing={true} papapa = {'hello', 1, 2, true } />
    </div>
  );
}

function Food(props){//서브 컴포넌트
  console.log(props);
  return (
      <h3>I love potato</h3>
  );
}

export default App;//외부에서 사용 가능하게 해줌
