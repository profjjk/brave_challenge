import { Film } from '../../utils/types';

export const insertMoviePoster = (films: Film[]) => {
    return films.map((film: Film) => {
        switch (film.title) {
            case 'The Phantom Menace':
                film.image = 'images/the-phantom-menace.png'
                break;
            case 'Attack of the Clones':
                film.image = 'images/attack-of-the-clones.png'
                break;
            case 'Revenge of the Sith':
                film.image = 'images/revenge-of-the-sith.png'
                break;
            case 'A New Hope':
                film.image = 'images/a-new-hope.png'
                break;
            case 'The Empire Strikes Back':
                film.image = 'images/empire-strikes-back.png'
                break;
            default :
                film.image = 'images/return-of-the-jedi.png'
                break;
        }
        return film;
    });
}