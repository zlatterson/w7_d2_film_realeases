import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {

    const filmNodes = films.map(film => (
        <Film
            key={film.id}
            title={film.title}
            imdb={film.imdb}
        />
    ));
    return(
        <ul>
        {filmNodes}
        </ul>
    );
}

export default FilmList;