import {getOfficesList} from './';

describe('getOfficesList', () => {
    beforeEach(() => {
        fetch.mockReset();
    });

    it('retreives a list of our offices and returns the result', async () => {
        fetch.mockResponseOnce(
            JSON.stringify([
                'Villena',
                'Madrid',
                'San Francisco',
                'Vancouver',
                'Nashville',
            ])
        );
        const results = await getOfficesList();

        expect(fetch).toHaveBeenCalledWith('/api/offices-list', {
            headers: {
                'accepts': 'application/json', // prettier-ignore
                'content-type': 'application/json',
            },
        });
        expect(results).toEqual([
            'Villena',
            'Madrid',
            'San Francisco',
            'Vancouver',
            'Nashville',
        ]);
    });
});
