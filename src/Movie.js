import PropTypes from 'prop-types';
import './Movie.css'

function Movie({year, title, summary, poster, genres}){
    return(
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className='movie-data'>
                <h3 className='movie-title'>{title}</h3>
                <h5 className='movie-year'>{year}</h5>
                <ul className='movie-genres'>
                    {genres.map((tuna, index)=>{
                        return <li key={index} className='movie-genre'>{tuna}</li>    
                    }
                    )}
                </ul>
                <p className='movie-summary'>{summary.slice(0,180)}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {//여기서 propTypes는 소문자
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie