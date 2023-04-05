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
        if (!input) return;

        try {
            setIsLoading(true);
            const { data } = await API.getFilms(input);
            if (data.results.length < 1) {
                setFilms(null);
            } else {
                const filmsWithPosters = insertMoviePoster(data.results)
                setFilms(filmsWithPosters);
            }
        } catch (err: any) {
            window.alert(err.message)
            console.error(err.message);
        } finally {
            setInput('');
            setIsLoading(false);
        }
    }

    const handleFilmSelection = (film: Film) => {
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

                    <button type={'submit'} disabled={!input}>
                        Submit
                    </button>
                </form>
            </section>

            <section id={'search-results'}>
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
                {!films && <div>No Results</div>}
            </section>
        </main>
    )
}