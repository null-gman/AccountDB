import checkDB from "./my_modules/checkDB.js";
import input from "./my_modules/input.js";
import print from "./my_modules/print.js";
import RecordsIdCat from "./my_modules/recordsIdData.js";
import deletDB from "./SQL/deletDB.js";
import insertDB from "./SQL/insertDB.js";
import selectAll from "./SQL/selectAll.js";
import selectByCat from "./SQL/selectByCat.js";
import selectById from "./SQL/selectById.js";
import selectId_Cat from "./SQL/selectIds_Cats.js";
import updateDB from "./SQL/updateDB.js";


async function main() {
  await checkDB();
  await selectId_Cat();

  print.note("type '.exit' to exit program".bold);
  console.log();
  
  // console.log(RecordsIdCat.CatPrint())

  while (true) {
    //exit the loop and program by typing '.exit' .
    await startMethods();
  }

}

main()


function startMethods() {
  // i know its piece of shit but its working .

  print.warn("chose method".bold);

  return new Promise(async (resolve) => {

    if (await input.option("read")) {
      resolve(await selectAll());
      console.log();
      return;
    }

    if (await input.option("read by id")) {
      resolve(await selectById());
      console.log();
      return;
    }

    if (await input.option("add data")) {
      resolve(await insertDB());
      console.log();
      return;
    }

    if (await input.option("update data")) {
      resolve(await updateDB());
      console.log();
      return;
    }

    if (await input.option("delet data")) {
      resolve(await deletDB());
      console.log();
      return;
    }

    if (await input.option("read by category")) {
      resolve(await selectByCat());
      console.log();
      return;
    }

    resolve()
  })
}



