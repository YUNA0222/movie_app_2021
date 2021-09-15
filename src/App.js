//import Potato from "./Potato";//상대경로
function App() {//메인 컴포넌트
  return (
    <div>
      <h1>Hello React</h1>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
    </div>
  );
}

function Movie(){//서브 컴포넌트
  return (
      <h3>I love potato</h3>
  );
}

export default App;//외부에서 사용 가능하게 해줌
