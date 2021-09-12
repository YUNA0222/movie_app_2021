//import Potato from "./Potato";//상대경로
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Potato/>
    </div>
  );
}

function Potato(){
  return (
      <h3>I love potato</h3>
  );
}

export default App;//외부에서 사용 가능하게 해줌
