import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state={//영화 데이터
    isLoadig: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data:{
        data: {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoadig: false})
  }

  componentDidMount(){//영화 앱을 로딩하는 함수
    //영화 데이터 로딩!
    this.getMovies();
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