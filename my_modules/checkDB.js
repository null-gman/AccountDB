import print from "./print.js";
import fs from "node:fs";
import createTableAccount from "../SQL/createTableAccount.js";



function checkDB() {
  print.warn("checking DB file...")
  return new Promise(async (resolve) => {
    await isDBfile();
    resolve(true)
  })

}

function isDBfile() {
  return new Promise(async (resolve) => {
    const bool = await checkDBfile()
    if (!bool) {
      await createTableAccount();
    }

    resolve(bool)
  })
}



function checkDBfile() {
  let bool = false;
  const DBfileName = "DataBase.db";
  return new Promise((resolve) => {
    fs.readdir("./", async (err, files) => {
      for (const file of files) {
        if (file === DBfileName) {
          bool = true; /* if file found */
          break;
        }
      }

      if (bool) {
        print.warn("file was found")
        resolve(true)
      } else {
        print.err("file not found")
        await createDBfile(DBfileName)
        resolve(false);
      }
    });
  })
}



function createDBfile(DBfileName) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./" + DBfileName, "", (err) => {
      if (err) {
        
        print.err("error at write file");
        process.exit();
      } else {
        print.warn("write file!")
        resolve(true)
      }
    })
  })
}




export default checkDB;