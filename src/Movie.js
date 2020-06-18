import React from "react";
import PropTypes from 'prop-types';

function MovieCheck(id, year, title, summary, poster){
    return <h4>{id.title}</h4>
};

MovieCheck.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default MovieCheck;