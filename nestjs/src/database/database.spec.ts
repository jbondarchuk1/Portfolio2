import InitializeSQLite from './init';
import getPortfolioContext from './context';

/**
 * The following is the test suite for the database initialization.
 * 1. initialize the database by seeding values
 * 2. query the database with a select and sqlite3.db.all()
 * 3. verify that we have 5 values in the database.
 */
describe('database', () => {
    it('should return ', async () => {
        InitializeSQLite(); // 1
        const db = await getPortfolioContext();
        await db.all('select * from projects', [], (err, rows) => { // 2
            return expect(rows.length).toBe(5); // 3
        })
    });
  });