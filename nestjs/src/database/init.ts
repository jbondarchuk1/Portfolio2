import ProjectData, { projectData } from "../models/project/projectData";
import getPortfolioContext from "./context";

/**
 * Using a sqlite database, seed the database with our hardcoded projects from the /src/models/project/ProjectData file.
 * 
 */
export default function InitializeSQLite() {
  let db = getPortfolioContext();

  // Drop the table if it exists
  db.run(`DROP TABLE IF EXISTS projects;`, (err) => {
    if (err) {
      console.error('Error dropping table:', err.message);
      return;
    }

    // Create the table
    db.run(`CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY,
            headline TEXT NOT NULL,
            language TEXT NOT NULL,
            description TEXT NOT NULL,
            repoLink TEXT NOT NULL,
            projectLink TEXT NULL);`, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
        return;
      }

      // Insert data after the table is created
      Object.entries(projectData).map(project => {
        // define the project data as a list of values [headline, language, description, repoLink]
        let vals = [
          project[1].headline,
          project[1].language,
          project[1].description,
          project[1].repoLink
        ];

        // depending on whether the projectLink property is included, update the sql query
        let comma = "";
        let projLink = "";

        if (project[1].projectLink !== null) {
          comma = ", ?";
          projLink = "projectLink, ";
          vals.push(project[1].projectLink);
        }

        // define the sql query accordingly to the projectLink property.
        const query = `INSERT INTO projects (headline, language, description, ${projLink} repoLink ) VALUES (?, ?, ?, ? ${comma})`;

        // insert the data
        db.run(query, vals, function (err) {
          if (err) {
            console.error('Error inserting data:', err.message);
          }
        });
      }

      );
      // for testing purposes, uncomment below to see the output in the console.
      // db.all('select * from projects', [], (err, rows) => console.log(rows));
    });
  });

}