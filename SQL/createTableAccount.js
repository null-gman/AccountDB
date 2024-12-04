import print from "../my_modules/print.js";
import sqlite from "./DB.js";

const Comand = `
CREATE TABLE account (
str varchar(255),
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    userName varchar(255),
    email varchar(255) NOT NULL,
    domain varchar(255) NOT NULL,
    category varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    note varchar(255)
);`;

function createTableAccount() {

  return new Promise((resolve) => {
    
    const db = new sqlite.Database('DataBase.db');
    db.run(Comand,(err)=>{
      if (err) {
        // print.err(err);
        
      }else{
        print.warn("table account created")
      }

    });
  
    db.close(() => resolve(true));
  

  })

}


export default createTableAccount;