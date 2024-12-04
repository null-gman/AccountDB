import readline from "node:readline";
import print from "./print.js";

// console.log("input.js");

class solidInput {
  constructor() {
    this.inOut = { input: process.stdin, output: process.stdout };
    //  this.Rl = readline.createInterface({...inOut}); /* will be like this ather input called */
  }

  input = (text) => {
    this.Rl = readline.createInterface({ ...this.inOut });
    const printInput = () => this.prompt(text + ": ");

    printInput()
    return new Promise((resolve) => {
      this.Rl.on("line", value => {
        value = value.trim();

        if (value === ".exit") {
          process.exit();
        }

        
        if(value.includes("'") || value.includes('"')){
          print.err("cannot use ' or \"")
          printInput()
          return;
        }

        if (this.filter(value)) {
          this.Rl.close()
          resolve(value);
          return;
        }
        print.err("not " + text)
        printInput()
      })
    })

  }

  prompt = (text) => {
    this.Rl.setPrompt(text.bold)
    this.Rl.prompt()
  }

  filter = (value) => true;
}


class inputEmail extends solidInput {
  constructor() {
    super()
  }
  filter = (value) => {
    if (!value) return false;
    return value.includes("@");
  };
}


class inputText extends solidInput {
  constructor() {
    super()
  }
  filter = (value) => value ? true : false ;
 
}


class inputID extends solidInput {
  constructor() {
    super()
  }
  filter = (value) => {

    if(!value) return false;

    value = Number(value);

    
    if (isNaN(value)) return false;

    return true;
  }
}

class inputOption extends solidInput {
  constructor() {
    super()
  }
  filter = (value) => true;
  
}



const input = new Object()




input.email = (new inputEmail()).input;
input.text = (new inputText()).input;
input.id = (new inputID()).input;

input.option = (new inputOption()).input;

export default input;














