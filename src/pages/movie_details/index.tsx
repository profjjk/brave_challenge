import { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { selectFilm } from '../../redux/filmSlice';
import { useAppSelector } from '../../redux/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

export const MovieDetails = (): ReactElement => {
    const { film } = useAppSelector(selectFilm);
    const navigate = useNavigate();

    return (
        <main id={'details-page'}>
            <div id={'film-details'}>
                <div className={'nav'} onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                    <p>Back</p>
                </div>
                {film.title ? (
                    <>
                        <div className={'top-row'}>
                            <img src={film.image} alt={film.title} />
                            <div>
                                <h1>{film.title}, Episode {film.episode_id}</h1>
                                <p>Released {dayjs(film.release_date).format('MMMM D, YYYY') }</p>
                                <p>Director: {film.director}</p>
                            </div>
                        </div>

                        <div>
                            <p>{film.opening_crawl}</p>
                        </div>
                    </>
                ) : (
                    <h2>No Film</h2>
                )}
            </div>
        </main>
    )
}