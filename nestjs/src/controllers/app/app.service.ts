import { Injectable } from '@nestjs/common';
import getPortfolioContext from '../../database/context'

@Injectable()
export class AppService {
  getHello(): string {
    return "hello world"
  }

  public getProjects(): Promise<string[]>{
    let db = getPortfolioContext();
    
    return new Promise((resolve, reject) => {
      let r:string[] = [];
      db.all("SELECT * FROM projects;", [], (err, rows) => {
        if (err) reject(err);
        else{
          resolve(rows);
        }
      });
    })

  }
}
