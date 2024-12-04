
import input from "./input.js";
import print from "./print.js";


const getRecordData = new Object()


getRecordData.require = async () => {
  const Record = new Object()
  Record.userName = await input.text("user Name".yellow);
  Record.email = await input.email("e-mail".yellow);
  Record.domain = await input.text("domain".yellow);
  Record.category = await input.text("category".yellow);
  Record.password = await input.text("password".yellow);
  Record.note = await input.option("note".yellow);

  return new Promise((resolve) => {
    resolve(Record)
  })
}

getRecordData.option = async () => {
  const Record = new Object()
  Record.userName = await input.option("user Name".yellow);
   while (true){
    Record.email = await input.option("e-mail".yellow);
    if(Record.email.includes("@") || !Record.email){
      break;
    }

    print.err("must be an email or blank to skip")
  };
   
  Record.domain = await input.option("domain".yellow);
  Record.category = await input.option("category".yellow);
  Record.password = await input.option("password".yellow);
  Record.note = await input.option("note");

  return new Promise((resolve) => {
    resolve(Record)
  })
}

export default getRecordData;