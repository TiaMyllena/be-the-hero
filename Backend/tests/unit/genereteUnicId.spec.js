const genereteUnicId = require('../../src/utils/genereteUnicId');

describe('Generete Unic Id', () => {
    it('should generete an unique ID', () => {
        const id = genereteUnicId();

        expect(id).toHaveLength(8); 
    });
});