import sqlite from "./DB.js";
import input from "../my_modules/input.js";
import print from "../my_modules/print.js";
import RecordsIdCat from "../my_modules/recordsIdData.js";


async function selectById() {
  const ID = await input.id("ID".yellow);
  if ((RecordsIdCat.IdPrint()).indexOf(+ID) == -1) {
    return print.err("id not found");
  }
  await prosses(ID);
}

async function prosses(id) {
  return new Promise((resolve, reject) => {
    const db = new sqlite.Database('DataBase.db');
    const Comand = `SELECT * FROM account WHERE ID = ${id}`

    db.run(Comand);
    const space = " | ";
    db.each(Comand, (err, row) => {
      if (err) {
        print.err("error when select data!");
        return
      }
      print.plain("\t" + row.ID + space + row.userName + space + row.email + space + row.domain + space + row.category + space + row.password + space + row.note);
    });

    db.close(() => resolve());
  })
}

export default selectById;