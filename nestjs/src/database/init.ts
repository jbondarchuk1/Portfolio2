import ProjectData, { projectData } from "src/models/project/projectData";
import getPortfolioContext from "./context";

//build


export default function InitializeSQLite(){
  console.log("hi mom im pushing a change  asdfasdf");
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
            let vals = [
              project[1].headline, 
              project[1].language, 
              project[1].description, 
              project[1].repoLink
            ];
    
            let comma = "";
            let projLink = "";
    
            if (project[1].projectLink !== null){
              comma = ", ?";
              projLink = "projectLink, ";
              vals.push(project[1].projectLink);
            }
    
            const query = `INSERT INTO projects (headline, language, description, ${projLink} repoLink ) VALUES (?, ?, ?, ? ${comma})`;
    
            db.run(query, vals, function(err) {
              if (err) {
                console.error('Error inserting data:', err.message);
              }
            });
          }
        
        );
          db.all('select * from projects', [], (err, rows) => console.log(rows));
        });
      });
    




}