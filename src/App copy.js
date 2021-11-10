import React from 'react';//얘는 필요없
import axios from 'axios';
import Movie from './Movie';
import './App.css'

class App extends React.Component{
  state={//영화 데이터
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const {
      data:{
        data: {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading: false})
  }

  componentDidMount(){//영화 앱을 로딩하는 함수
    //영화 데이터 로딩!
    this.getMovies()
  }

  render(){
    const { isLoading, movies } = this.state;
    return(
      <section className= 'container'>
        {isLoading? (
          <div className= 'loader'>
            <span className='loader-class'>Loading...</span>
          </div>
        ) 
        : 
        (
          <div className='movies'>
            {
              movies.map((movie)=>{
                //console.log(movie)
               return(
                 < Movie
                   key = {movie.id}
                   //id = {movie.id}
                   year = {movie.year}
                   title = {movie.title}
                   summary = {movie.summary}
                   poster = {movie.medium_cover_image}
                   genres = {movie.genres}
                 />
               )
             })
            }
          </div>
        )
        }
        </section>
    )//false부분에 영화 데이터가 들어감
  }
}

export default App;//외부에서 사용 가능하게 해줌