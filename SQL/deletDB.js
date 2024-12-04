import input from "../my_modules/input.js";
import print from "../my_modules/print.js";
import sqlite from "./DB.js";
import RecordsIdCat from "../my_modules/recordsIdData.js";
import selectId_Cat from "./selectIds_Cats.js";

async function deletDB() {
  const ID = await input.id("ID".yellow);
  if ((RecordsIdCat.IdPrint()).indexOf(+ID) == -1) {
    return print.err("id not found");
  }
  await prosse(ID);
  await selectId_Cat()
}


function prosse(ID) {
  const Command = `DELETE FROM account WHERE ID = ${ID};`
  const db = new sqlite.Database('DataBase.db');
  db.run(Command, (err) => {
    if (err) {
      print.err("error when delet data")
      return;
    }

    print.warn("deleted")
  });

  return new Promise((resolve) => {
    db.close(() => resolve());
  })

}

export default deletDB;
