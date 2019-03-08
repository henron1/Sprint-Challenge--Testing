const db = require('../data/dbConfig');
const Games = require('./gamesModel');

describe('Enpoints for Games', () => {
    afterEach(async () => {
        await db('games').truncate();
    });
    describe('post()', () => {
        it('creates a game object', async () => {
            const newGame ={
                title: "hitman",
                genre: "shooter",
                releaseYear: 2019
            };
            const post = await Games.insert(newGame);
            expect(post.title).toBe('hitman');
            expect(post.genre).toBe('shooter');
            expect(post.releaseYear).toBe(2019);
        })
    })
})