import { ReactElement } from 'react';
import { Link } from 'react-router-dom'

export const Footer = (): ReactElement => {
    return (
        <footer>
            <Link to={'https://swapi.dev/'}>powered by SWAPI.dev</Link>
        </footer>
    )
}