import React from "react";

const Film = ({title,imdb}) => {
    return(
        <>
        <li><a href={imdb}>{title}</a></li>
        </>
    )
}

export default Film;