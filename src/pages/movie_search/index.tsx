import { FormEvent, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router';
import { ProgressBar } from 'react-loader-spinner';
import { useAppDispatch } from '../../redux/hooks';
import { update } from '../../redux/filmSlice';
import { API } from '../../utils/api';
import { Film } from '../../utils/types';
import { insertMoviePoster } from './insertMoviePoster';

export const MovieSearch = (): ReactElement => {
    const [ input, setInput ] = useState<string>('');
    const [ films, setFilms ] = useState<Film[] | null>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // EVENT HANDLERS
    const handleSearch = async (e: FormEvent) => {
        e.preventDefault();

        // do not make api call if there is no input
        if (!input) return;

        try {
            setIsLoading(true);
            // api call to https://swapi.dev/api/films using input as query
            const { data } = await API.getFilms(input);

            if (data.results.length < 1) {
                // inform user if query returned 0 results
                setFilms(null);
            } else {
                // add movie posters to result objects and set then set state
                const filmsWithPosters = insertMoviePoster(data.results)
                setFilms(filmsWithPosters);
            }
        } catch (err: any) {
            // alert user to api errors
            window.alert(err.message)
            console.error(err.message);
        } finally {
            // reset input and remove loading spinner
            setInput('');
            setIsLoading(false);
        }
    }

    const handleFilmSelection = (film: Film) => {
        // set selected film to global state and redirect to details page
        dispatch(update(film));
        navigate('details');
    }

    return (
        <main id={'search-page'}>
            <section id={'search-form'}>
                <img src={'images/star-wars-logo.png'} alt={'Star Wars Logo'} />

                <h2>Search for a Star Wars movie:</h2>

                <form onSubmit={handleSearch}>
                    <input
                        value={input}
                        placeholder={'Search'}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    {/* disable button if there is no input */}
                    <button type={'submit'} disabled={!input}>
                        Submit
                    </button>
                </form>
            </section>

            <section id={'search-results'}>
                {/* display loading spinner until api resolves */}
                {!isLoading ?
                    (
                        films && films.map((film: Film, index: number) => (
                            <div className={'film'} key={index} onClick={() => handleFilmSelection(film)}>
                                <img src={film.image} alt={film.title} />
                                <h3>{film.title}</h3>
                            </div>
                        ))
                    ) : (
                        <ProgressBar
                            height="80"
                            width="80"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass="progress-bar-wrapper"
                            borderColor = '#c8c8c8'
                            barColor = '#ffe300'
                        />
                    )
                }

                {/* if api call returned 0 results, inform user */}
                {!films && <div>No Results</div>}
            </section>
        </main>
    )
}