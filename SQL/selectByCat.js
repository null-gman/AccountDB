import print from "../my_modules/print.js";
import sqlite from "./DB.js";
import RecordsIdCat from "../my_modules/recordsIdData.js";
import selectId_Cat from "./selectIds_Cats.js";
import input from "../my_modules/input.js";


async function selectByCat() {
  const cat = await input.text("Category".yellow)
  if ((RecordsIdCat.CatPrint()).indexOf(cat) == -1) {
    print.err(`there is not ${cat}`);
    return;
  }
  await prosses(cat);

  await selectId_Cat()
}



async function prosses(Cat) {
  return new Promise((resolve) => {
   
    const Comand = `SELECT * FROM account WHERE category = '${Cat}'`
    const db = new sqlite.Database('DataBase.db');

    const space = " | ";

    db.each(Comand, (err,row) => {
      if (err) {
        print.err("error when select data")
        return
      }
      print.plain("\t"+row.ID+space+row.userName+space+row.email+space+row.domain+space+row.category+space+row.password+space+row.note);
    });   

    db.close(() => resolve() );
  })

}



export default selectByCat;