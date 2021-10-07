import React from "react";

class App extends React.Component{
  state={//영화 데이터
    isLoadig: true,
    movies: [],
  };

  componentDidMount(){//영화 앱을 로딩하는 함수
    //영화 데이터 로딩!
    setTimeout(()=>{ this.setState({isLoadig: false}) }, 3000);
  }

  render(){
    const { isLoadig } = this.state;
    return(
      <div>
        {isLoadig? 'true' : 'false'}
      </div>
    )//false부분에 영화 데이터가 들어감
  }
}

export default App;//외부에서 사용 가능하게 해줌