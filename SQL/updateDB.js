import print from "../my_modules/print.js";
import sqlite from "./DB.js";
import getRecordData from "../my_modules/inputRecordData.js";
import input from "../my_modules/input.js";
import RecordsIdCat from "../my_modules/recordsIdData.js";
import selectId_Cat from "./selectIds_Cats.js";


async function updateDB() {
  const ID = await input.id("ID".yellow);

  if ((RecordsIdCat.IdPrint()).indexOf(+ID) == -1) {
    return print.err("id not found");
  }

  const data = await getRecordData.option();
  await process(ID, data);
  await selectId_Cat()

}




function process(ID, { userName, email, domain, category, password, note }) {
  const table = 'account';
  const db = new sqlite.Database('DataBase.db');
  let isErr = false;
  console.log(ID);

  if (userName) {
    const Command = `UPDATE ${table} SET userName = '${userName}' WHERE ID = ${ID}`;
    db.run(Command, (err) => {
      if (err) {
        print.err(`error with ${userName}`);
        isErr = true;
      }
    });
  }

  if (email) {
    const Command = `UPDATE ${table} SET email = '${email}' WHERE ID = ${ID}`;
    db.run(Command, (err) => {
      if (err) {
        print.err(`error with ${email}`);
        isErr = true;
      }
    });
  }

  if (domain) {
    const Command = `UPDATE ${table} SET domain = '${domain}' WHERE ID = ${ID}`;
    db.run(Command, (err) => {
      if (err) {
        print.err(`error with ${domain}`);
        isErr = true;
      }
    });
  }

  if (category) {
    const Command = `UPDATE ${table} SET category ='${category}' WHERE ID = ${ID}`;
    db.run(Command, (err) => {
      if (err) {
        print.err(`error with ${category}`);
        isErr = true;
      }
    });
  }

  if (password) {
    const Command = `UPDATE ${table} SET password = '${password}' WHERE ID = ${ID}`;
    db.run(Command, (err) => {
      if (err) {
        print.err(`error with ${password}`);
        isErr = true;
      }
    });
  }

  if (note) {
    const Command = `UPDATE ${table} SET note = '${note}' WHERE ID = ${ID}`;
    db.run(Command, (err) => {
      if (err) {
        print.err(`error with ${note}`);
        isErr = true;
      }
    });
  }


  return new Promise((resolve) => {
    db.close(() => {
      if (!isErr) {
        print.warn(`${ID} account edited`)
      }
      resolve()
    });
  })
}


export default updateDB;