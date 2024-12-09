const sqlite3 = require("sqlite3").verbose();

/**
 * This project does not use an ORM since the database is very simple (1 table).
 * This database context is using sqlite3 and queries can be used with db.run() or db.all() depending on the query type.
 * @returns SQLite3 database context object
 */
export default function getPortfolioContext () {
    const db = new sqlite3.Database('./portfolio.db');
    return db;
}