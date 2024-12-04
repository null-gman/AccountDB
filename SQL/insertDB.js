import print from "../my_modules/print.js";
import sqlite from "./DB.js";
import getRecordData from "../my_modules/inputRecordData.js";
import selectId_Cat from "./selectIds_Cats.js";


async function insertDB() {
  const Data = await getRecordData.require();
  await prosses(Data);
  await selectId_Cat()
}

async function prosses({ userName, email, domain, category, password, note }) {

  return new Promise((resolve) => {
    const Command = `
    INSERT INTO account (userName,email,domain,category,password,note)
    VALUES ('${userName}','${email}','${domain}','${category}','${password}','${note}'); `;

    const db = new sqlite.Database('DataBase.db');
    db.run(Command,(err)=>{
      if (err) {
        print.err("error with adding data!")
      }else{
        print.warn("record account added")
      }
    });
    db.close(() => {
      resolve()
    });
  })




}



export default insertDB;