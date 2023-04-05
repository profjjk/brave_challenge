import { Routes, Route } from 'react-router-dom';
import { MovieSearch, MovieDetails, NotFound } from '../pages';
import { Footer } from '../components';
import './sass/main.scss';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<MovieSearch />} />
                <Route path={'/details'} element={<MovieDetails />} />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}