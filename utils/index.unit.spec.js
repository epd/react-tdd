import {conditionalCaseTransform} from './';

describe('conditionalCaseTransform', () => {
    it('changes text based on the params passed in', () => {
        expect(conditionalCaseTransform('upper?', 0)).toBe('UPPER?');
        expect(conditionalCaseTransform('lower?', 1)).toBe('lower?');
        expect(conditionalCaseTransform('definitely upper.', 2)).toBe('DEFINITELY UPPER.'); // prettier-ignore
        expect(conditionalCaseTransform('ShOuLd bE L0wEr', 3)).toBe('should be l0wer'); // prettier-ignore
    });
});
