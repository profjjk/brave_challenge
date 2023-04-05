import { Routes, Route } from 'react-router-dom';
import { MovieSearch, MovieDetails } from '../pages';
import { Footer } from '../components';
import './sass/main.scss';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<MovieSearch />} />
                <Route path={'/details'} element={<MovieDetails />} />
            </Routes>
            <Footer />
        </>
    )
}