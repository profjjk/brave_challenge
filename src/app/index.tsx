import { Routes, Route } from 'react-router-dom';
import { MovieSearch, MovieDetails } from '../pages';
import './sass/main.scss';

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MovieSearch />} />
            <Route path={'/details'} element={<MovieDetails />} />
        </Routes>
    )
}