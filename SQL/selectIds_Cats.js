import RecordsIdCat from "../my_modules/recordsIdData.js";
import sqlite from "./DB.js";


function selectId_Cat() {
  RecordsIdCat.remove()
  
  return new Promise((resolve) => {
    const Comand = `SELECT ID,category FROM account;`;
    const db = new sqlite.Database('DataBase.db');

    db.each(Comand, (err, row) => {
      if (err) {
        print.err("error in selecting data")
        return;
      }
      if (row.ID) {
        RecordsIdCat.IdAdd(row.ID)
        RecordsIdCat.CatAdd(row.category)
      }
    });

    db.close(() => resolve(true));
  })

}



export default selectId_Cat;