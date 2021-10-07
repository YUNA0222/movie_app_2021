import PropTypes from 'prop-types';

function Movie(){
    return(
        <h1>hi</h1>
    )
}

Movie.PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
}

export default Movie;