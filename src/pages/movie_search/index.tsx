import { FormEvent, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../redux/hooks';
import { update } from '../../redux/filmSlice';
import { API } from '../../utils/api';
import { Film } from '../../utils/types';

export const MovieSearch = (): ReactElement => {
    const [ input, setInput ] = useState<string>('');
    const [ films, setFilms ] = useState<Film[]>([]);
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
            setFilms(data.results);
        } catch (err: any) {
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
                        films.map((film: Film, index: number) => (
                            <div className={'film'} key={index} onClick={() => handleFilmSelection(film)}>
                                <h3>{film.title}</h3>
                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )
                }
            </section>
        </main>
    )
}