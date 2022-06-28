import {useState} from 'react';
import FilmList from '../component/FilmList';
import FilmUpcoming from '../component/FilmUpcoming';

const FilmBox = () => {

    const[films, setTitles] = useState(
        [
            {
                id: 1,
                title: 'Minions: The Rise of Gru',
                imdb: 'https://www.imdb.com/title/tt5113044/'
            },
            {
                id: 2,
                title: 'Murina',
                imdb: 'https://www.imdb.com/title/tt8434110/'
            }
        ]
    )

    return(
        <>
        <h1>Upcoming Film Realeases for UK</h1>
        <hr/>
        <FilmList films={films}/>
        <hr/>
        <FilmUpcoming/>
        </>
    )

}

export default FilmBox;