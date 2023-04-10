import { parseCrawl } from '../parseCrawl';
const testString = 'paragraph1\r\n\r\nparagraph2\r\n\r\nparagraph3'

describe('parseCrawl should', () => {
    test('return an array of strings', () => {
        const actual = parseCrawl(testString);
        const expected = ['paragraph1', 'paragraph2', 'paragraph3'];
        expect(actual).toEqual(expected);
        expect(actual).toHaveLength(3);
    });
});