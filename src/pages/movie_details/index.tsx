import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router';
import { selectFilm } from '../../redux/filmSlice';
import { useAppSelector } from '../../redux/hooks';
import { parseCrawl } from './parseCrawl';
import { Image } from '../../utils/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faXmark } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';


export const MovieDetails = (): ReactElement => {
    const [ photo, setPhoto ] = useState<Image | null>(null);
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
                            <img
                                src={film.image}
                                alt={film.title}
                                onClick={() => window.innerWidth > 767 && setPhoto({ src: film.image, alt: film.title })}
                            />

                            <div>
                                <h1>{film.title}</h1>
                                <h4>Episode {film.episode_id}</h4>
                                <p><span>Released:</span> {dayjs(film.release_date).format('MMMM D, YYYY') }</p>
                                <p><span>Director:</span> {film.director}</p>
                            </div>
                        </div>

                        <div>
                            {parseCrawl(film.opening_crawl).map((p: string, index: number) => (
                                <p className={'crawl'} key={index}>{p}</p>
                            ))}
                        </div>
                    </>
                ) : (
                    <h2>No Film</h2>
                )}
            </div>

            {photo &&
                <div className={'image-modal'}>
                    <div className={'modal-content'}>
                        <div className={'close'} onClick={() => setPhoto(null)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                        <img src={photo.src} alt={photo.alt} />
                    </div>
                </div>
            }
        </main>
    )
}