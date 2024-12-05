const sqlite3 = require("sqlite3").verbose();


export default function getPortfolioContext () {
    const db = new sqlite3.Database('./portfolio.db');
    return db;
}