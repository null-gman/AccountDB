import print from "../my_modules/print.js";
import sqlite from "./DB.js";

async function selectAll() {
  return new Promise((resolve) => {
    print.warn("DATA");
    const Comand = `SELECT * FROM account;`
  
    const db = new sqlite.Database('DataBase.db');
    const space = " | ";
    db.each(Comand, (err,row) => {
      if (err) {
        print.err("error when selecting data!")
        return;
      }
      print.plain("\t"+row.ID+space+row.userName+space+row.email+space+row.domain+space+row.category+space+row.password+space+row.note);
    });      
  
    db.close(()=>resolve());
  })

}

export default selectAll;