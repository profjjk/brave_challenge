import { insertMoviePoster } from '../insertMoviePoster';
import { Film } from '../../../utils/types';

const film: Film[] = [{
    title: "A New Hope",
    episode_id: 1,
    opening_crawl: "crawl",
    director: "director",
    release_date: "date",
}];

const filmWithImage: Film[] = [{
    title: "A New Hope",
    episode_id: 1,
    opening_crawl: "crawl",
    director: "director",
    release_date: "date",
    image: "images/a-new-hope.png"
}];

describe('insertMoviePoster should', () => {
    test('return Film with image', () => {
        const actual = insertMoviePoster(film);
        expect(actual).toEqual(filmWithImage);
    });
});