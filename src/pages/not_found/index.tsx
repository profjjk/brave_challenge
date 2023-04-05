import { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

export const NotFound = (): ReactElement => {
    const navigate = useNavigate();

    return (
        <main id={'not-found'}>
            <h1>404 - Page Not Found</h1>

            <div onClick={() => navigate('/')}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
                <p>Go to Homepage</p>
            </div>
        </main>
    )
}